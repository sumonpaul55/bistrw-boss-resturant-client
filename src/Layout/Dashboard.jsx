import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCartArrowDown, FaEnvelope, FaUtensils, FaList, FaUser, FaBook, FaCartPlus } from "react-icons/fa";
import { GiOilDrum } from "react-icons/gi";
import { SiCodereview } from "react-icons/si";
import { TbBookmarksFilled } from "react-icons/tb";
import { BiFoodMenu } from "react-icons/bi";
import "./dashboard.css"
import useAdmin from '../hooks/useAdmin';
// import Cart from '../components/dashboard/cart/Cart';
import useCarts from '../hooks/useCarts';

const Dashboard = () => {
    //TODO: get isadmin value from the database
    const [isAdmin] = useAdmin();
    const [cart] = useCarts()


    return (
        <main className='dashboard'>
            <div className="container mx-auto">
                <div className='flex'>
                    {/* dashboard sidebar */}
                    <div className="w-64 min-h-screen px-2 bg-orange-400 pt-10">
                        <ul className='space-y-6 font-semibold pl-3'>
                            {
                                isAdmin ? <>
                                    <li className='flex items-center gap-2 hover:text-white duration-150'>
                                        <FaHome />
                                        <NavLink>Admin Home</NavLink>
                                    </li>
                                    <li className='flex items-center gap-2 hover:text-white duration-150'>
                                        <FaUtensils />
                                        <NavLink to="/dashboard/add-items">Add items</NavLink>
                                    </li>
                                    <li className='flex items-center gap-2 hover:text-white duration-150'>
                                        <FaList />
                                        <NavLink to="/dashboard/manage-items">Mange items</NavLink>
                                    </li>

                                    <li className='flex items-center gap-2 hover:text-white duration-150'>
                                        <FaBook />
                                        <NavLink >Manage Bookings</NavLink>
                                    </li>
                                    <li className='flex items-center gap-2 hover:text-white duration-150'>
                                        <FaUser />
                                        <NavLink to="/dashboard/users">All Users</NavLink>
                                    </li>

                                </>
                                    :
                                    <>
                                        <li className='flex items-center gap-2 hover:text-white duration-150'>
                                            <FaHome />
                                            <NavLink to="">User Home</NavLink>
                                        </li>
                                        <li className='flex items-center gap-2 hover:text-white duration-150'>
                                            <GiOilDrum />
                                            <NavLink to="/dashboard/PaymentHistory">Reservation</NavLink>
                                        </li>
                                        <li className='flex items-center gap-2 hover:text-white duration-150'>
                                            <FaCartPlus />
                                            <NavLink to="/dashboard/cart">My Cart ({cart.length})</NavLink>
                                        </li>
                                        <li className='flex items-center gap-2 hover:text-white duration-150'>
                                            <SiCodereview />
                                            <NavLink to="">Add a Reviews</NavLink>
                                        </li>
                                        <li className='flex items-center gap-2 hover:text-white duration-150'>
                                            <TbBookmarksFilled />
                                            <NavLink>My Bookings</NavLink>
                                        </li>
                                        <li className='flex items-center gap-2 hover:text-white duration-150'>
                                            <BiFoodMenu />
                                            <NavLink to="/dashboard/paymentHistory">Payment Real History</NavLink>
                                        </li>
                                    </>
                            }
                            {/* shared navlinks */}
                            <div className="divider"></div>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <FaCartArrowDown />
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <BiFoodMenu />
                                <NavLink to="/dashboard/paymentHistory">Payment History</NavLink>
                            </li>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <BiFoodMenu />
                                <NavLink to="/">Menu</NavLink>
                            </li>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <FaEnvelope />
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* dashboard main layout */}
                    <div className='flex-1 p-6'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;