import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { toast } from 'react-toastify';
const url = "http://localhost:5000"
const axiosSecure = axios.create({
    baseURL: url,
    withCredentials: true
})
const useAxios = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
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
        toast(`You are logged out for ${status}`)
        return Promise.reject(error);
    })
    return axiosSecure;
};
export default useAxios;