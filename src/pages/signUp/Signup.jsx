import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import HelmetProvider from '../shared/HelmetProvider';
import { AuthContext } from '../../AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
    const { createUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const navigate = useNavigate()
    const onSubmit = data => {
        // console.log(data.name, data.email, data.password)

        createUser(data.email, data.password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: data.name
                }).then().catch()
                toast('You have signed up successfully', {
                    position: "bottom-right",
                    autoClose: 2000
                });
                navigate("/")
            }).catch(err => {
                toast(`${err.message}`, {
                    position: "bottom-right",
                    autoClose: 2000
                });
            })
    }
    return (
        <>
            <HelmetProvider pageTitle="Signup"></HelmetProvider>
            <div className='container mx-auto mt-20'>
                <h2 className='text-center text-xl font-bold md:text-2xl mb-7'>Sign Up</h2>
                <div className="hero min-h-screen bg-base-200 my-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">
                            <h1 className="text-5xl font-bold">Sign Up!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" defaultValue="name" {...register("name", { required: true })} placeholder="Enater your name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>Name field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required type="email" defaultValue="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600'>Email must required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' defaultValue="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "required" && <span className='text-red-600'>Password is 6 character required</span>}
                                    {errors.password?.type === "minLength" && <span className='text-red-600'>Password is 6 character</span>}
                                    {errors.password?.type === "maxLength" && <span className='text-red-600'>Password must be less than 20 character</span>}
                                    {errors.password?.type === "pattern" && <span className='text-red-600'>Password should contains special character letters and number</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className='btn btn-primary' />
                                </div>
                            </form>
                            <p className='text-center py-6'>Do you have an account? Please<Link to="/login" className='text-secondary font-bold text-xl'>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;