import React from 'react';
import banner from '../../../Images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen  bg-white" style={{ backgroundImage: 'url(https://i.ibb.co/6HJTzD5/banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/6HJTzD5/banner.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:pr-28'>
                        <h1 className="text-5xl font-bold text-white">We brovide best and quality parts</h1>
                        <p className="py-6 text-white">Parts to keep your motor running. Service that overcomes the competition.</p>
                        <button className="btn btn-primary font-bold text-white px-4 my-4">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;