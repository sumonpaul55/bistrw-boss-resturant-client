import React from 'react';
import PageTitle from '../../shared/PageTitle';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const MangaItems = () => {
    const [menu] = useMenu()
    const axiosSecure = useAxios()
    const handleDelete = item => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire(`${item.name} deleted successfull`)
                        }
                        // refetch()
                    })
            }
        });
    }
    return (
        <div>
            <PageTitle heading="---Hurry Up!---" subHeading="MANAGE ALL ITEMS"></PageTitle>
            <h3 className='text-black font-semibold md:text-2xl'>Total items {menu.length}</h3>
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className=''>
                            <tr className='font-bold text-black text-base'>
                                <th>
                                    #
                                </th>
                                <th>Items Iamge</th>
                                <th>Item name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu?.map((menuItem, idx) => (
                                    <tr key={idx}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div><img src={menuItem.image} className='w-20 rounded-lg' alt="" /></div>
                                        </td>
                                        <td>
                                            <h3 className="text-base font-semibold">{menuItem.name}</h3>
                                        </td>
                                        <td className='font-bold'>{menuItem.price}</td>
                                        <td>
                                            <button className='p-3 bg-red-700 rounded-xl'>
                                                <FaEdit size={14} className='text-white' />
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(menuItem)} className='p-3 bg-red-700 rounded-xl'>
                                                <FaTrash size={14} className='text-white' />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        {/* foot */}
                    </table>
                </div>
            </div>
        </div >
    );
};

export default MangaItems;