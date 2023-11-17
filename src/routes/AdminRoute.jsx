import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin()

    if (loading || isAdminLoading) {
        return <div className='animate-spin bg-black w-5 h-5 mx-auto mt-20 mb-5'></div>
    }
    if (user || isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;