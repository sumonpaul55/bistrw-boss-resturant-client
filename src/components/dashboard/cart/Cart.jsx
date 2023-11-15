import React from 'react';
import useCart from "../../../hooks/useCarts"
import PageTitle from '../../../pages/shared/PageTitle';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';
const Cart = () => {
    const axiosSecure = useAxios()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((accumolator, items) => {
        return accumolator + items.price;
    }, 0)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Items has been deleted",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
                    .catch(err => {
                        Swal.fire({ title: err, icon: "error" })
                    })
            }
        });
    }
    return (
        <div>
            <PageTitle heading="---My Cart---" subHeading="WANNA ADD MORE?"></PageTitle>
            <div className='flex justify-between mt-4'>
                <h3 className="text-3xl font-semibold uppercase">Total Orders: {cart?.length}</h3>
                <h3 className="text-3xl font-semibold uppercase">Total price: {totalPrice}</h3>
                <button className="text-3xl font-semibold uppercase bg-[#D1A054] p-2 text-white rounded-lg">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th className='font-bold text-black'>Image</th>
                                <th className='font-bold text-black'>Name</th>
                                <th className='font-bold text-black'>Price</th>
                                <th className='font-bold text-black'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map((items, idx) => (
                                    <tr key={idx}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <img src={items.image} className='w-20 rounded-xl' alt="" />
                                        </td>
                                        <td>
                                            <h3 className='font-semibold'>{items?.name}</h3>
                                        </td>
                                        <td>{items?.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(items._id)} className='p-3 bg-red-700 rounded-xl'>
                                                <FaTrash size={20} className='text-white' />
                                            </button>
                                        </th>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;