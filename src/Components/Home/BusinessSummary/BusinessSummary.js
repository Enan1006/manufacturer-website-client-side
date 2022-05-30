import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='px-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 my-8'>
                <div>
                    <img className='rounded-md drop-shadow-lg' src="https://i.ibb.co/NKjc0cB/pexels-fauxels-3184429.png" alt="" />
                </div>
                <div>
                    <h1 className='text-3xl py-2 text-primary font-bold'>About us</h1>
                    <p>Through our experience building manufacturing websites and industrial websites, we know you have unique needs that are unlike other industries.

                        We can help solve these needs through high-quality websites made for manufacturing and industrial companies. Websites that not only look great, but also yield results for your company.</p>
                    <button className="btn bg-primary border-0 text-white font-bold px-4 my-4">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;