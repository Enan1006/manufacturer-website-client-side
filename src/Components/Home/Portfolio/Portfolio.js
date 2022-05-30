import React from "react";

const Portfolio = () => {
  return (
    <div >
      <div className="grid lg:grid-rows-1 grid-rows-3 grid-flow-col gap-5 px-12 lg:my-12">
        <div className="lg:row-span-2 row-span-1">
          <div>
            <div className="avatar pb-12 pt-4">

            </div>
            <h2 className="text-xl font-bold ">
              <span className="text-primary">Name:</span> Imdadul Haque Enan
            </h2>
            <p>
              Email:{" "}
              <a href="mailto:ihenan1007@gmail.com">ihenan1007@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+880 1840052775">+880 184-052775</a>
            </p>
          </div>
        </div>
        <div className="lg:row-span-2 lg:col-span-2 lg:px-12">
          <p>
            I am <span className="font-bold text-primary"> IH Enan</span>, I have experince in Javascript, React js, Nide js, MongoDB, Express js.I have about 4 years working experience with
            wordpress on fiverr.But I want to learn more to develop skills.My
            dream is to be a successful freelancer.I like to work from home and do
            freelancing, so I want to improve my skill.
          </p>
          <div className="py-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-secondary dark:text-white">
                HTML
              </span>
              <span className="text-sm font-medium text-secondary dark:text-white">
                98%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: "98%" }}
              ></div>
            </div>
          </div>
          <div className="py-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-secondary dark:text-white">
                CSS
              </span>
              <span className="text-sm font-medium text-secondary dark:text-white">
                95%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-secondary h-2.5 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="py-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-secondary dark:text-white">
                JAVASCRIPT
              </span>
              <span className="text-sm font-medium text-secondary dark:text-white">
                90%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="py-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-secondary dark:text-white">
                REACT
              </span>
              <span className="text-sm font-medium text-secondary dark:text-white">
                85%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-secondary h-2.5 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="py-2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-secondary dark:text-white">
                WORDPRESS
              </span>
              <span className="text-sm font-medium text-secondary dark:text-white">
                98%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: "99%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
