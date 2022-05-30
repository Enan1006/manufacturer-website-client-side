import React, { useState } from 'react';
import ProductsData from '../../../hook/ProductsData/ProductsData';
import ShowProducts from '../../ShowProducts/ShowProducts';

const AllProducts = () => {
  const [products] = ProductsData();
  return (
    <div className="px-12 lg:py-12">
        <h2 className='text-3xl py-2 text-primary text-center font-bold'>Our Product</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {products.map((product) => (
            <ShowProducts
              product={product}
              key={product._id}
            ></ShowProducts>
          ))}
      </div>
    </div>
  );
};
export default AllProducts;