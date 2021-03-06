import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [res, setRes] = useState({});

  useEffect(() => {
    const url = `https://serene-ridge-16672.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, res]);
  const { _id, name, img, price, quantity, minimum_quantity } = product;

  const handleNavigateToPurchase = (id) => {
    navigate(`/payment/${id}`);
  };

  const order = {
    productId: _id,
    product: name,
    productQuantity: quantity,
  };

  return (
    <div className="lg:px-12 px-5">
      <h2 className="text-3xl py-2 text-primary text-center font-bold">
        Purchase
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10">
        <div>
          <figure>
            <img className="w-48" src={img} alt="iPhone" />
          </figure>
          <h2 className="card-title text-2xl">{name}</h2>
          <p>
            <b>Quantity :</b> {quantity}
          </p>
          <div className="form-control">
            <label className="label">
              <p className="">
                <b>Minimum Order Quantity :</b>
              </p>
            </label>
            <input
              type="number"
              placeholder={minimum_quantity}
              className="input input-bordered w-48"
            />
          </div>
          <p className="">
            <b>Price : $</b>
            {price}
          </p>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              placeholder={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              placeholder={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Address</span>
            </label>
            <input
              type="text"
              placeholder="Type Your Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Customer Note</span>
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="input input-bordered py-10"
            />
          </div>

          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              onClick={() => handleNavigateToPurchase(_id)}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purchase;
