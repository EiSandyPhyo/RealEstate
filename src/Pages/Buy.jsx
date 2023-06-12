import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import FeatureProperties from "../Components/FeatureProperties";
import HowItWorks from "../Components/HowItWorks";

const Buy = ({ properties }) => {

  return (
    <div>
      <div className="">
        {/*  hero section */}
        <div className="hero-img">
          <div className="bg-dark-opacity"></div>
          <div className="relative px-12">
            <div className="flex-center-center h-[378px]">
              <h2 className="header">find your dream home</h2>
            </div>
          </div>
        </div>
        {/* custom shape */}
        <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <section className=" pb-16 md:pb-24">
        {/* search box section */}
        <div className="flex-center-center -mt-[43px] px-3">
          <div className=" md:w-[672px] shadow-lg rounded-md z-10 bg-white">
            <form action="" className="flex-between-center gap-2 pl-4 pr-1">
              <div className="flex-center-center gap-1">
                <BiSearchAlt className="text-xl sm:text-2xl" />
                <input
                  type="text"
                  className="border border-none focus:outline-none w-48 xs:w-[250px] sm:w-96 md:w-[400px] text-sm md:text-lg p-2"
                  placeholder="City, Address, Zip :"
                />
              </div>
              <button className="btn px-5 py-2 sm:px-7 sm:py-[12px] md:px-6 md:py-2 my-1">
                Search
              </button>
            </form>
          </div>
        </div>

        {/* feature properties section */}
        <FeatureProperties properties={properties}/>

        {/* How It Works */}
        <HowItWorks/>
      </section>

    </div>
  );
};

export default Buy;
