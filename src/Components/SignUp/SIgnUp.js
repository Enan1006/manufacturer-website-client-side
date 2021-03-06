import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hook/useToken/useToken';
import Loading from '../Shared/Loading/Loading';

const SIgnUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();


    //user info save krbo
    const [token] = useToken(user || gUser);





    let signInError;
    if (error || gError || updating) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small> </p>
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('updated');
        // navigate('/home')
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (gUser || user) {
        console.log(gUser || user)
    }

    if (token) {
        navigate('/home');
    }
    return (
        <div className='flex  justify-center items-center py-12 grid lg:grid-cols-2'>
            <div>
                <img src="https://i.ibb.co/JCdG45V/image-2022-05-28-T15-03-37-765-Z.png" alt="" />
            </div>
            <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* form */}

                        {/* name */}
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text font-bold">Name</span>

                            </label>

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {

                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },

                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}



                            </label>
                        </div>

                        {/* email */}
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

                        {/* password */}
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


                        <input className='btn bg-primary  w-full max-w-xs text-white' type="submit" value="Sign Up" />
                    </form>

                    <p><small>Already Have an account? <Link className='text-primary font-bold' to="/signin">Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue With Google</button>

                </div>
            </div>
            </div>
            
        </div>
    );
};

export default SIgnUp;