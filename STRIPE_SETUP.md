# Stripe Payment Integration Setup

This guide will help you set up Stripe payments for your FJackets e-commerce application.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Node.js and npm installed
3. Next.js project set up

## Installation

1. Install Stripe dependencies:
```bash
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
```

## Environment Variables

Create a `.env.local` file in your project root and add the following variables:

```env
# Stripe Keys
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

## Getting Your Stripe Keys

1. **Secret Key**: Go to Stripe Dashboard → Developers → API Keys → Secret key
2. **Publishable Key**: Go to Stripe Dashboard → Developers → API Keys → Publishable key
3. **Webhook Secret**: Go to Stripe Dashboard → Developers → Webhooks → Add endpoint → Select events → Copy webhook signing secret

## API Endpoints Created

### 1. Create Payment Intent
- **URL**: `/api/payment/create-payment-intent`
- **Method**: POST
- **Body**: 
```json
{
  "amount": 100.00,
  "currency": "usd",
  "metadata": {
    "items": "[...]"
  }
}
```

### 2. Confirm Payment
- **URL**: `/api/payment/confirm`
- **Method**: POST
- **Body**:
```json
{
  "paymentIntentId": "pi_...",
  "orderData": {
    "items": [...],
    "subtotal": 100.00,
    "total": 100.00
  }
}
```

### 3. Webhook Handler
- **URL**: `/api/payment/webhook`
- **Method**: POST
- **Purpose**: Handle Stripe events (payment success/failure)

## Components Created

### 1. CheckoutForm Component
- Location: `src/components/CheckoutForm.tsx`
- Features:
  - Stripe Elements integration
  - Card payment processing
  - Error handling
  - Loading states

### 2. Checkout Page
- Location: `src/app/checkout/page.tsx`
- Features:
  - Order summary
  - Payment form integration
  - Success/error states
  - Cart validation

## Webhook Setup

1. In Stripe Dashboard, go to Developers → Webhooks
2. Click "Add endpoint"
3. Set endpoint URL to: `https://yourdomain.com/api/payment/webhook`
4. Select events:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `charge.succeeded`
   - `charge.failed`
5. Copy the webhook signing secret to your `.env.local`

## Testing

### Test Card Numbers
Use these test card numbers for testing:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Requires Authentication**: `4000 0025 0000 3155`

### Test CVC and Expiry
- **CVC**: Any 3 digits (e.g., 123)
- **Expiry**: Any future date (e.g., 12/25)

## Payment Flow

1. User adds items to cart
2. User clicks "Proceed to Checkout"
3. User fills payment form with Stripe Elements
4. Frontend creates payment intent via API
5. Stripe processes payment
6. Backend confirms payment and creates order
7. Cart is cleared and success page shown

## Security Features

- ✅ Stripe Elements for secure card input
- ✅ Server-side payment intent creation
- ✅ Webhook signature verification
- ✅ Environment variable protection
- ✅ Error handling and validation

## Customization

### Styling
The checkout form uses your brand colors:
- Primary: `#001B52` (dark blue)
- Accent: `#D31E37` (red)

### Order Processing
In `/api/payment/confirm`, you can add:
- Database order creation
- Email notifications
- Inventory updates
- Analytics tracking

## Troubleshooting

### Common Issues

1. **"Invalid API key"**: Check your environment variables
2. **"Webhook signature verification failed"**: Verify webhook secret
3. **"Payment failed"**: Check test card numbers
4. **CORS errors**: Ensure API routes are properly configured

### Debug Mode
Enable Stripe debug logging:
```javascript
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
});
```

## Production Deployment

1. Switch to live Stripe keys
2. Update webhook endpoint URL
3. Test with real payment methods
4. Monitor webhook events
5. Set up error monitoring

## Support

For Stripe-specific issues, refer to:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)
- [Stripe Community](https://community.stripe.com)
