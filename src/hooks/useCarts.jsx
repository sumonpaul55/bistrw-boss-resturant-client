import { useQuery } from '@tanstack/react-query';
// import React from 'react';
import useAxios from './useAxios';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useCarts = () => {
    // load data usinng tanstack query
    const axiosSecure = useAxios()
    // get user
    const { user } = useContext(AuthContext)
    const { data: cart = [], refetch } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data
        }
    })
    return [cart, refetch]
};

export default useCarts;