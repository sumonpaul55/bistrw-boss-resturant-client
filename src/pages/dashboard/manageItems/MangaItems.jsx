import React from 'react';
import PageTitle from '../../shared/PageTitle';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrash, FaUpload } from 'react-icons/fa';

const MangaItems = () => {
    const [menu] = useMenu()
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
                                menu?.map((menu, idx) => (
                                    <tr key={idx}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div><img src={menu.image} className='w-20 rounded-lg' alt="" /></div>
                                        </td>
                                        <td>
                                            <h3 className="text-base font-semibold">{menu.name}</h3>
                                        </td>
                                        <td className='font-bold'>{menu.price}</td>
                                        <td>
                                            <button onClick={() => handleEdit(menu._id)} className='p-3 bg-red-700 rounded-xl'>
                                                <FaEdit size={14} className='text-white' />
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(items._id)} className='p-3 bg-red-700 rounded-xl'>
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
        </div>
    );
};

export default MangaItems;