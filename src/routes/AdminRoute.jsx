import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()


    if (loading && isAdminLoading) {
        return <h2>Loading...</h2>
    }
    if (user && (!loading && !isAdminLoading) && isAdmin) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;