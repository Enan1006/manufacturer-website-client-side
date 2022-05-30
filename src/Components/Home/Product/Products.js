import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://serene-ridge-16672.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <div className='px-12 py-12'>
            <h2 className='text-3xl py-2 text-primary font-bold text-center'>Our Products</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;