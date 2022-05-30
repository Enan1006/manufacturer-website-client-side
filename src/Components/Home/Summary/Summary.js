import React from "react";
import { FaFlag } from "react-icons/fa";
import { FaLaugh } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";

const Summary = () => {
  return (
    <div className="mx-12 my-20">
      <h2 className='text-3xl py-2 text-primary text-center font-bold'>Our Summary</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 shadow-lg pt-4">
        <div className="card lg:w-full bg-primary rounded-none">
          <figure className="px-10 pt-10">
            <FaFlag className="h-16 w-16 text-secondary"></FaFlag>
          </figure>
          <div className="card-body p-4 items-center text-center">
            <h2 className="text-3xl font-bold text-white">35</h2>
            <p className="text-secondary font-bold">YEARS EXPERIENCE</p>
          </div>
        </div>
        <div className="card lg:w-full bg-secondary rounded-none">
          <figure className="px-10 pt-10">
            <FaLaugh className="h-12 w-12 text-primary"></FaLaugh>
          </figure>
          <div className="card-body p-4 items-center text-center">
            <h2 className="text-3xl font-bold  text-white">1500+</h2>
            <p className="text-primary font-bold">HAPPY CUSTOMER</p>
          </div>
        </div>
        <div className="card lg:w-full  bg-primary rounded-none ">
          <figure className="px-10 pt-10">
            <FaNetworkWired className="h-12 w-12 text-secondary"></FaNetworkWired>
          </figure>
          <div className="card-body p-4 items-center text-center">
            <h2 className="text-3xl font-bold text-white">250</h2>
            <p className="text-secondary font-bold">DISTRIBUTOR</p>
          </div>
        </div>
        <div className="card lg:w-full bg-secondary rounded-none ">
          <figure className="px-10 pt-10">
            <FaIndustry className="h-12 w-12 text-primary"></FaIndustry>
          </figure>
          <div className="card-body p-4 items-center text-center">
            <h2 className="text-3xl font-bold text-white">45</h2>
            <p className="text-primary font-bold">FACTORY INDUSTRIAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
