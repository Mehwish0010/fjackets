import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentIntentId, orderData } = body;

    if (!paymentIntentId) {
      return NextResponse.json(
        { success: false, error: 'Payment intent ID is required' },
        { status: 400 }
      );
    }

    // Retrieve the payment intent to confirm it was successful
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {
      // Payment was successful - you can now process the order
      // Here you would typically:
      // 1. Save order to database
      // 2. Send confirmation email
      // 3. Update inventory
      // 4. Clear cart

      return NextResponse.json({
        success: true,
        data: {
          paymentIntent,
          orderId: `ORDER-${Date.now()}`, // Generate order ID
          message: 'Payment successful! Your order has been placed.',
        },
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Payment not completed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error confirming payment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to confirm payment' },
      { status: 500 }
    );
  }
}
