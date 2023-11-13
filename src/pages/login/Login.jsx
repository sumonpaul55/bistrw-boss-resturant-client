import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, LoadCanvasTemplateNoReload } from 'react-simple-captcha';
const Login = () => {
    const captchRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        // console.log(email, pass)
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handeValidate = () => {
        const captcha = captchRef.current.value;
        const validation = validateCaptcha(captcha)
        if (validation) {
            setDisabled(false)
        }
    }
    return (
        <div className='container mx-auto'>login
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
                                <input type="text" ref={captchRef} placeholder="Enater avobe tesx" className="input input-bordered" required />
                                <button className='btn btn-xs mt-2 bg-secondary text-white hover:bg-secondary' onClick={handeValidate}>Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                {
                                    disabled ? <input type="submit" disabled value="Login" className='btn btn-primary' /> :
                                        <input type="submit" value="Login" className='btn btn-primary' />
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;