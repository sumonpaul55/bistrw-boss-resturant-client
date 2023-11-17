import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../hooks/useAxios';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxios();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Users has been deleted",
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
    const makeAdmin = user => {
        axiosSecure.patch(`/users/adming/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({ title: `${user.name} is Admin now`, icon: "success" })
                }
                refetch()
            })
    }

    return (
        <div>
            <div className='flex justify-evenly'>
                <h3 className='text-3xl'>All users</h3>
                <h3 className='text-3xl'>Total Users:{users.length} </h3>
            </div>
            <div>
                <table className="table table-zebra">
                    {/* head */}
                    <thead className=''>
                        <tr className='bg-secondary'>
                            <th>
                                #
                            </th>
                            <th className='font-bold text-black'>Name</th>
                            <th className='font-bold text-black'>Email</th>
                            <th className='font-bold text-black'>Role</th>
                            <th className='font-bold text-black'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((items, idx) => (
                                <tr key={idx} className=''>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <h3 className='font-semibold'>{items.name}</h3>
                                    </td>
                                    <td>
                                        <h3 className='font-semibold'>{items?.email}</h3>
                                    </td>
                                    <td className='font-bold'>
                                        {
                                            items.role === "admin" ? "Admin" :
                                                <button className='p-3 bg-red-700 rounded-xl' onClick={() => makeAdmin(items)}>
                                                    <FaUsers size={16} className='text-white'></FaUsers>
                                                </button>
                                        }

                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(items._id)} className='p-3 bg-red-700 rounded-xl'>
                                            <FaTrash size={16} className='text-white' />
                                        </button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;