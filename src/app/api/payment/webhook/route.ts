import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig!, endpointSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('PaymentIntent was successful!', paymentIntent.id);
      
      // Handle successful payment
      // - Update order status in database
      // - Send confirmation email
      // - Update inventory
      break;
      
    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object as Stripe.PaymentIntent;
      console.log('Payment failed:', failedPayment.id);
      
      // Handle failed payment
      // - Update order status
      // - Send failure notification
      break;
      
    case 'charge.succeeded':
      const charge = event.data.object as Stripe.Charge;
      console.log('Charge succeeded:', charge.id);
      break;
      
    case 'charge.failed':
      const failedCharge = event.data.object as Stripe.Charge;
      console.log('Charge failed:', failedCharge.id);
      break;
      
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
