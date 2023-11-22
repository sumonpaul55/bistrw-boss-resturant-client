import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AdminHome = () => {
    const { user } = useAuth()
    return (
        <main>
            <div className="container mx-auto">
                <h2>Hi, Welcome Back <span className='text-primary font-semibold'>{user?.displayName && user.displayName}</span></h2>
            </div>
        </main>
    );
};
export default AdminHome;