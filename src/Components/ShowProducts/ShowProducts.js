import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsData from '../../hook/ProductsData/ProductsData';

const ShowProducts = ({ product, setManageProduct }) => {
  const { _id, img, name, short_description, price, quantity, minimum_quantity } =
    product;

  const [products, setproducts] = ProductsData();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you Sure?");
    if (proceed) {
      const url = `https://serene-ridge-16672.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setproducts(remaining);
        });
    }
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="" src={img} alt="car" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="card-text font-bold">Quantity : {quantity}</p>
        <p className="card-text font-bold">
          Minimum Order Quantity : {minimum_quantity}
        </p>
        <p className="card-text font-bold">Price : ${price}</p>
        <p className="card-text pb-4">{short_description.slice(0, 75)}</p>
        <label
          onClick={() => handleDelete(_id)}
          htmlFor="delete-modal"
          className="btn bg-primary font-bold border-none text-white"
        >
          DELETE PRODUCT
        </label>
      </div>
    </div>
  );
};

export default ShowProducts;