import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HelmetProvider from '../shared/HelmetProvider';
import { toast } from 'react-toastify';
import SocialLogin from '../../components/socialLogin/SocialLogin';
const Login = () => {
    const captchRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const fromLogin = location?.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        // console.log(email, pass)
        signIn(email, pass)
            .then(res => {
                const user = res.user
                user && toast(`Welcome back ${user?.displayName}`, {
                    autoClose: 2000
                })
                navigate(fromLogin, { replace: true })
            })
            .catch(err => {
                toast(`${err}`)
            })
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handerCaptcha = (e) => {
        const userCaptchaValue = e.target.value;
        const validation = validateCaptcha(userCaptchaValue)
        if (validation) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
    return (
        <>
            <HelmetProvider pageTitle="login"></HelmetProvider>
            <div className='container mx-auto'>
                <h3 className='text-center text-xl md:text-3xl font-bold py-3 capitalize'>login</h3>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplateNoReload />
                                    </label>
                                    <input onBlur={handerCaptcha} type="text" ref={captchRef} placeholder="Enater avobe tesx" className="input input-bordered" required />
                                    {/* <button className='btn btn-xs mt-2 bg-secondary text-white hover:bg-secondary' onClick={handeValidate}>Validate</button> */}
                                </div>
                                <div className="form-control mt-6">
                                    {
                                        disabled ? <input type="submit" disabled value="Login" className='btn btn-primary' /> :
                                            <input type="submit" value="Login" className='btn btn-primary' />
                                    }
                                </div>
                            </form>
                            <p className='text-center py-6'>Are You new here? Please<Link to="/signUp" className='text-secondary font-bold text-xl'>Register</Link>
                            </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;