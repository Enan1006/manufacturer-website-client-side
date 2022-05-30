import React from "react";

const HomeContact = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/d5CXW8r/pexels-albin-berlin-919073-1.png)'}}>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
        <div className="card-body">
        <h1 className="text-primary text-xl font-bold text-center">Your Comment </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email "
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Message</span>
            </label>
            <input
              type="text"
              placeholder="Type Your Comment Here.. "
              className="input input-bordered py-10"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary border-none text-white font-bold">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
