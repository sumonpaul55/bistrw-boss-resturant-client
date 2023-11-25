import axios from 'axios';


const url = "https://bistrow-boss-server-kqtazrfgq-sumonpaul55s-projects.vercel.app"
const axiosPublic = axios.create({
    baseURL: url,

})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;