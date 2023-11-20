import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
const CheckoutForm = () => {
    const [error, setError] = useState("")
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        })
        if (error) {
            // console.log("error =", error)
            setError(error.message)
        } else {
            console.log("[paymentMethod]", paymentMethod)
            setError("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-[500px] mx-auto mt-20 bg-slate-100 p-5'>
            <CardElement options={{
                style: {
                    base: {
                        fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" }
                    },
                    invalid: {
                        color: "#9e2146"
                    }
                }
            }}
            />
            <button type="submit" className='btn mt-6 btn-secondary' disabled={!stripe}>
                Pay
            </button>
            <p className='text-red-600'>{error}</p>
        </form>
    );
};

export default CheckoutForm;