import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data?.admin;
        }
    })
    // console.log(isAdmin)
    return [isAdmin, isAdminLoading]
};
export default useAdmin;