import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, price, short_description, quantity,minimum_quantity } = product;
  const navigate = useNavigate();
  const handleNavigateToProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="">
        <div className="card lg:max-w-lg shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  text-start">
                <h2 className="card-title">{name}</h2><p><b>Price:</b> {price}</p>
                <p><b>Quantity: </b>{quantity}</p>
                <p><b>Minimum Quantity: </b>{minimum_quantity}</p>
                <p>{short_description.slice(0,75)}</p>
                <div className="card-actions">
                    <button onClick={() => handleNavigateToProduct(_id)} className="btn btn-block bg-primary border-0 text-white font-bold my-2">purchase</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Product;
