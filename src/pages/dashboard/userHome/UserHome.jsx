import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth()
    return (
        <main>
            <div className="container mx-auto">
                <h2 className='text-xl my-4'>Hi, Welcome Back <span className='text-secondary font-bold'>{user && user?.displayName}</span></h2>
            </div>
        </main>
    );
};

export default UserHome;