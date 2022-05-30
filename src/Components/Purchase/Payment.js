/* import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_QOevMnSLL8eDpoje0ba2eje900gogsgu4N');


const Payment = () => {    
    const { paymentId } = useParams();
const [product, setProduct] = useState({});
const [res, setRes] = useState({});

useEffect(() => {
  const url = `https://serene-ridge-16672.herokuapp.com/product/${paymentId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setProduct(data));
}, [paymentId, res]);

return (
  <div className="lg:px-12 px-5 py-10 lg:m-20">
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
      <div>
        <figure>
          <img className="w-48" src={product.picture} alt="iPhone" />
        </figure>
        <h2 className="card-title text-2xl">{product.name}</h2>
        <p ><b>Order Quantity :</b> {product.quantity}</p>
        <p className=""><b>Price : $</b>{product.price}</p>
      </div>

      <div>
      <Elements stripe={stripePromise}>
  <CheckoutForm product={product} />
</Elements>
      </div>
      
    </div>
  </div>
);
}; */

// export default Payment;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const { paymentId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://serene-ridge-16672.herokuapp.com/product/${paymentId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [paymentId]);
  return (
    <div>

      <h1>{product.name}</h1>

    </div>
  );
};

export default Payment;