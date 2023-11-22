import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import { FaUsers } from "react-icons/fa"

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()
    const { data } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin-stats`)
            return res.data
        }
    })
    // console.log(data)
    return (
        <main>
            <div className="container mx-auto">
                <h2>Hi, Welcome Back <span className='text-primary font-semibold'>{user?.displayName && user.displayName}</span></h2>
                <div className="mt-10">
                    <div className="stats stats-vertical lg:stats-horizontal shadow justify-between w-full items-center justify-center">

                        <div className="stat flex items-center justify-center gap-5">
                            <FaUsers className='text-secondary' size={50} />
                            <div>
                                <div className="stat-value">${data?.revenue}</div>
                                <div className="stat-title text-xl font-semibold">Revinue</div>
                            </div>
                        </div>

                        <div className="stat flex items-center justify-center gap-5">
                            <FaUsers className='text-secondary' size={50} />
                            <div>
                                <div className="stat-value">{data?.user}</div>
                                <div className="stat-title text-xl semibold-bold">Customers</div>
                            </div>
                        </div>

                        <div className="stat flex items-center justify-center gap-5">
                            <FaUsers className='text-secondary' size={50} />
                            <div>
                                <div className="stat-value">{data?.menuItems}</div>
                                <div className="stat-title text-xl semibold-bold">Items</div>
                            </div>
                        </div>
                        <div className="stat flex items-center justify-center gap-5">
                            <FaUsers className='text-secondary' size={50} />
                            <div>
                                <div className="stat-value">{data?.orders}</div>
                                <div className="stat-title text-xl semibold-bold">Orders</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main >
    );
};
export default AdminHome;