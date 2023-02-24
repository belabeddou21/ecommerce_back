import express from 'express';
import stripePackage from 'stripe';

const router = express.Router();
const stripe = new stripePackage(process.env.STRIPE_KEY);

app.post('/charge', async (req, res) => {
    const { amount, cardNumber, expiryMonth, expiryYear, cvc } = req.body;
  
    try {
      const token = await stripe.tokens.create({
        card: {
          number: cardNumber,
          exp_month: expiryMonth,
          exp_year: expiryYear,
          cvc: cvc,
        },
      });
  
      const charge = await stripe.charges.create({
        amount: amount,
        currency: 'usd',
        source: token.id,
      });
  
      res.status(200).json({ message: 'Payment successful' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Payment failed' });
    }
  });
    export default router; 