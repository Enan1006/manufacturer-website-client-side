import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ review }) => {
  const { name, img, reviewTitle, rating } = review;
  return (
    <div className="my-4">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-12 ">
        <div className="flex justify-center md:justify-end -mt-16 ">
          {/* <h1>Review</h1> */}
          <img className="w-20 h-20 rounded-full" src={img} alt="" />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
          <p className="mt-2 text-gray-600">{`${reviewTitle.slice(0, 150)}`}</p>
        </div>
        <div className="flex justify-end mt-4">
          <div className="grid ">
            <div>
              <p className="text-xl font-medium text-secondary">
                Ratting: <span className="text-primary">{rating} </span>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
