import React from 'react';
import notFound from '../../../Images/not-found.jpg';
const NotFound = () => {
    return (
        <div className='mt-6 mx-40  object-center'>
            <img className=' w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;