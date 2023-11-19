import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    console.log(loading, isAdminLoading)

    if (loading && isAdminLoading) {
        return <h2>Loading...</h2>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;