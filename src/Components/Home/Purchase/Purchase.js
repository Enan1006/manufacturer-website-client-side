import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Purchase = () => {
    const {ProductId}=useParams()
    const navigate =useNavigate();
    return (
        <div>
            
        </div>
    );
};

export default Purchase;