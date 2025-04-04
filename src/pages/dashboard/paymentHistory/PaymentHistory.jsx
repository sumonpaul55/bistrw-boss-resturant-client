import React from 'react';
import useAuth from "../../../hooks/useAuth"
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()
    const { data: payment } = useQuery({
        queryKey: ["payment", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`);
            return res.data
        }
    })
    // console.log(payment)
    return (
        <main>
            <div className="container mx-auto">
                <h2 className='font-bold text-xl my-5'>Total Payments: {payment?.length}</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='py-3 bg-yellow-600 text-white'>
                                <tr className='uppercase'>
                                    <th>#</th>
                                    <th>Email</th>
                                    <th>Category</th>
                                    <th>Total Price</th>
                                    <th>Payment Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payment?.map((items, idx) => (
                                        <tr key={idx}>
                                            <th>{idx + 1}</th>
                                            <td>{items.email}</td>
                                            <td>{items.transactionid}</td>
                                            <td>${items.price}</td>
                                            <td>{items.date.toLocaleString()}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default PaymentHistory;