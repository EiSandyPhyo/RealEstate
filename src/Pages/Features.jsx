import React from "react";
import { BsTelephone } from "react-icons/bs";
import FeatureGrids from "../Components/FeatureGrids";
import FeatureSlider from "../Components/FeatureSlider";

const Features = () => {
  return (
    <>
      <div className="relative bgTop table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-slate-900 opacity-80"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white z-50">
              Services / Features
            </h3>
          </div>
        </div>
      </div>
      <div className="relative lg:py-24 py-16">
        <FeatureGrids />
        <div className="container lg:mt-24 mt-16 mx-auto px-4">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              What Our Client Say ?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>
          <FeatureSlider/>
         
        </div>
        <div className="container lg:mt-24 mt-16 mx-auto px-4">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
              Have Question ? Get in touch!
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
            <div className="mt-6">
              <button
                className="py-3 px-5 bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"
                href="/contact"
              >
                <span className="flex gap-2">
                  <i>
                    <BsTelephone className=" font-semibold align-middle mt-1" />
                  </i>
                  <span className="font-semibold">Contact us</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
