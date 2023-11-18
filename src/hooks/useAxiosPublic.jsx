import axios from 'axios';


const url = "http://localhost:5000"
const axiosPublic = axios.create({
    baseURL: url,

})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;