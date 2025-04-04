import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useEffect } from 'react';
const url = "http://localhost:5000"
// http://localhost:5000/
const axiosSecure = axios.create({
    baseURL: url,
    withCredentials: true
})

const useAxios = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    useEffect(() => {
        axiosSecure.interceptors.request.use(function (config) {
            const token = localStorage.getItem('access-token')
            config.headers.authorization = `Bearer ${token}`;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // intercept 401 and 403 status
        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, async (error) => {
            const status = error.response.status;
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        })
    }, [logOut, navigate])
    return axiosSecure;
};
export default useAxios;