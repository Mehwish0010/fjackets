'use client';
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Load Stripe outside of component to avoid recreating on every render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

interface CheckoutFormProps {
  onSuccess: (orderId: string) => void;
  onError: (error: string) => void;
}

function CheckoutFormContent({ onSuccess, onError }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { items, subtotal, clear } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Create payment intent
      const response = await fetch('/api/payment/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: subtotal,
          currency: 'usd',
          metadata: {
            items: JSON.stringify(items.map(item => ({
              id: item.productId,
              title: item.title,
              quantity: item.quantity,
              size: item.size,
            }))),
          },
        }),
      });

      const { success, data, error: apiError } = await response.json();

      if (!success) {
        throw new Error(apiError || 'Failed to create payment intent');
      }

      // Confirm payment
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        }
      );

      if (confirmError) {
        throw new Error(confirmError.message || 'Payment failed');
      }

      if (paymentIntent.status === 'succeeded') {
        // Confirm payment with backend
        const confirmResponse = await fetch('/api/payment/confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
            orderData: {
              items,
              subtotal,
              total: subtotal,
            },
          }),
        });

        const confirmResult = await confirmResponse.json();

        if (confirmResult.success) {
          clear(); // Clear cart
          onSuccess(confirmResult.data.orderId);
        } else {
          throw new Error(confirmResult.error || 'Failed to confirm order');
        }
      }
    } catch (err: any) {
      setError(err.message || 'Payment failed');
      onError(err.message || 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-[#001B52] mb-4">Payment Information</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Details
            </label>
            <div className="border border-gray-300 rounded-lg p-3">
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold">${subtotal}.00</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Shipping:</span>
          <span className="text-green-600 font-semibold">FREE</span>
        </div>
        <div className="border-t border-gray-200 pt-2">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-[#001B52]">Total:</span>
            <span className="text-xl font-bold text-[#D31E37]">${subtotal}.00</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-[#001B52] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#D31E37] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200"
      >
        {isProcessing ? 'Processing...' : `Pay $${subtotal}.00`}
      </button>
    </form>
  );
}

export default function CheckoutForm(props: CheckoutFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFormContent {...props} />
    </Elements>
  );
}
