import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    // console.log(googleSignIn)
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const location = useLocation();

    const afterLogin = location?.state?.from?.pathname || "/"

    const handleGoogleSignin = () => {
        googleSignIn()
            .then(res => {
                const userName = res.user?.displayName
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
                axiosPublic.post("/users", userInfo)
                    .then((res) => {
                        // console.log(res.data)
                        if (res.data.insertedId === null) {
                            toast(`Welcome Back ${userName}`, {
                                position: "bottom-right"
                                ,
                                autoClose: 2000
                            })
                            navigate(afterLogin)
                        }
                        else if (res.data?.insertedId) {
                            toast(`Welcome ${userName}`, {
                                position: "bottom-right",
                                autoClose: 2000
                            })
                            navigate(afterLogin)
                        }
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            })
            .catch(err => {
                toast(err)
            })
    }
    return (
        <div className='py-3 px-8'>
            <div className='divider'></div>
            <button onClick={handleGoogleSignin} className='border py-2 px-4 md:px-7 flex justify-center rounded-lg hover:bg-gray-400 hover:text-white items-center gap-2'>
                <FaGoogle size={20} />
                Google
            </button>
        </div>
    );
};

export default SocialLogin;