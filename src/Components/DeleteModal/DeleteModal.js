import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsData from "../../hook/ProductsData/ProductsData";

const DeleteModal = ({ product, manageProduct }) => {
  const id = useParams();
  const { _id } = product;



  const [products, setproducts] = ProductsData();
  const navigate = useNavigate();
  const handleDelete = (id) => {

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

  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="delete-modal" className="btn" onClick={() => handleDelete(_id)}>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
