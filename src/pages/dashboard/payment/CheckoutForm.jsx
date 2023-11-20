import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import useCarts from '../../../hooks/useCarts';
import useAuth from '../../../hooks/useAuth';
const CheckoutForm = () => {
    const [error, setError] = useState("")
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxios()
    const [cart] = useCarts()
    const [clientSecret, setClientSecret] = useState("")
    const { user } = useAuth()
    const [transactionid, setTransactionId] = useState('')
    // console.log(user)

    const totalPrice = cart.reduce((accumolator, items) => {
        return accumolator + items.price;
    }, 0)
    useEffect(() => {
        axiosSecure.post(`/create-payment-intent`, { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])
    // console.log(clientSecret)

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
            console.log("paymentMethod", paymentMethod)
            setError("")
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous"
                }
            }
        })
        if (confirmError) {
            console.log(confirmError)
        }
        else {
            // console.log("paymentIntend", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log("TransactionId", paymentIntent.id)
                setTransactionId(paymentIntent.id)
                // now save the payment in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionid: paymentIntent.id,
                    date: new Date(), // utc date convert. use momet js to convert
                    cartIds: cart.map(items => items._id),
                    menuItemIds: cart.map(item => item.menuItemId),
                    status: "pending"
                }
                const res = await axiosSecure.post("/payment", payment)
                console.log(res.data)
            }
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
            <button type="submit" className='btn mt-6 btn-secondary' disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-600'>{error}</p>
            {
                transactionid && <p className='text-green-600 mt-3 font-semibold'>Your Transaction id:  {transactionid}</p>
            }
        </form>
    );
};

export default CheckoutForm;