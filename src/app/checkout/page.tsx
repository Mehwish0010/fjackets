'use client';
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import CheckoutForm from '@/components/CheckoutForm';
import { CheckCircle, XCircle } from 'lucide-react';
import Link from '@/components/Link';

export default function CheckoutPage() {
  const { items, subtotal, totalItems } = useCart();
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [orderId, setOrderId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 mx-auto bg-[#001B52] rounded-full flex items-center justify-center">
            <XCircle className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#001B52]">Your cart is empty</h2>
            <p className="text-gray-600">Add some items to your cart before checkout.</p>
          </div>
          <Link href="/shop" className="inline-block bg-[#001B52] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D31E37] transition-all duration-200">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handlePaymentSuccess = (orderId: string) => {
    setOrderId(orderId);
    setPaymentStatus('success');
  };

  const handlePaymentError = (error: string) => {
    setErrorMessage(error);
    setPaymentStatus('error');
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#001B52]">Payment Successful!</h2>
            <p className="text-gray-600">Thank you for your order.</p>
            <p className="text-sm text-gray-500">Order ID: {orderId}</p>
          </div>
          <div className="space-y-3">
            <Link href="/shop" className="inline-block bg-[#001B52] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D31E37] transition-all duration-200">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'error') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 mx-auto bg-red-500 rounded-full flex items-center justify-center">
            <XCircle className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#001B52]">Payment Failed</h2>
            <p className="text-gray-600">{errorMessage}</p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentStatus('pending')}
              className="inline-block bg-[#001B52] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D31E37] transition-all duration-200"
            >
              Try Again
            </button>
            <Link href="/cart" className="block text-[#001B52] hover:text-[#D31E37] font-medium">
              Back to Cart
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#001B52] mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your purchase</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-[#001B52] mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.size || 'na'}`} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#001B52]">${item.price * item.quantity}.00</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal ({totalItems} items):</span>
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
            </div>

            <div className="bg-[#001B52] rounded-lg p-4 text-white">
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-300">
                Your payment information is encrypted and secure. We use Stripe to process all payments.
              </p>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <CheckoutForm
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
