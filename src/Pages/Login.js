import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const { signUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleSigninUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }
    return (
        <div>
            <h1 className='text-4xl text-slate-700 text-center font-bold my-10'>Log In</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="flex">
                    <div className="text-center w-1/2 mr-10">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/authentication-icon.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSigninUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;