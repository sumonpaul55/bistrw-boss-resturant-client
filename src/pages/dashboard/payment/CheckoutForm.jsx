import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import useCarts from '../../../hooks/useCarts';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const CheckoutForm = () => {
    const [error, setError] = useState("")
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxios()
    const [cart, refetch] = useCarts()
    const [clientSecret, setClientSecret] = useState("")
    const { user } = useAuth()
    const [transactionid, setTransactionId] = useState('')
    const navigate = useNavigate();
    // console.log(user)

    const totalPrice = cart.reduce((accumolator, item) => accumolator + parseFloat(item.price), 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post(`/create-payment-intent`, { price: totalPrice })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res?.data?.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

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
            // console.log("paymentMethod", paymentMethod.id)
            if (paymentMethod.id) {
                setError("")
            }
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
            Swal.fire({
                title: `${confirmError}`,
                position: "top-right"
            })
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
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        title: `Thanks, Your Payment has been Successfull`,
                        position: "top-right",
                        timer: 2000
                    })
                    navigate("/dashboard/paymentHistory")
                    refetch()
                }
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
                {`Pay $${totalPrice}`}
            </button>
            <p className='text-red-600'>{error}</p>
            {
                transactionid && <p className='text-green-600 mt-3 font-semibold'>Your Transaction id:  {transactionid}</p>
            }
        </form>
    );
};

export default CheckoutForm;