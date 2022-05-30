import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import auth from '../../firebase.init';
import useToken from '../../hook/useToken/useToken';

const SignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser); // token


    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     if (gUser || user) {
    //         navigate(from, { replace: true });
    //     }
    // }, [user, gUser, from, navigate])

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small> </p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }


    if (loading || gLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex py-12 justify-center items-center grid lg:grid-cols-2 px-12'>
            <div className='mx-auto w-96'>
                <img src="https://i.ibb.co/3NjdgxW/image-2022-05-28-T15-08-54-514-Z.png" alt="" />
            </div>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text font-bold">Email</span>

                            </label>

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {

                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}



                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 Characters or Longer'
                                    }
                                })}
                            />
                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}



                        <input className='btn  w-full max-w-xs bg-primary border-none text-white' type="submit" value="Login" />
                    </form>
                    <p><small>Don't have an account?  <Link className='text-primary font-bold' to="/signup">Create New Account</Link></small></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue With Google</button>

                </div>
            </div>
            </div>
            
        </div>
    );
};

export default SignIn;