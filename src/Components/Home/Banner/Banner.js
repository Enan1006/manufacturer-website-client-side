import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen  bg-white" style={{ backgroundImage: 'url(https://www.rocheindustry.com/wp-content/uploads/2021/04/Auto-Parts-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='lg:pr-28'>
                        <h1 className="text-5xl font-bold text-white">We provide quality parts</h1>
                        <p className="py-6 text-white">We priotize Quality</p>
                        <button hre className="btn btn-primary font-bold text-white px-4 my-4">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;