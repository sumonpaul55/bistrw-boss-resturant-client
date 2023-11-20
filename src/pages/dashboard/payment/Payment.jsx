import React from 'react';
import PageTitle from '../../shared/PageTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PK)
const Payment = () => {
    return (
        <div>
            <PageTitle heading="--- payment gatway ---" subHeading="Please pay to eat"></PageTitle>
            <div>
                <h3 className="text-3xl font-bold">Payment gateway</h3>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;