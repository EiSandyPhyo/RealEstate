import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import PlaceholderImage from "../../public/images/blurImg.png";

const Buy = ({ properties }) => {
  const [heartFill, setHeartFill] = useState(false);

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
        <div className="container-2xl mt-16 lg:mt-24">
          <div className="flex-center-center flex-col pb-8">
            <h1 className="sub-header">Featured Properties</h1>
            <p className="paragraph">
              A great platform to buy, sell and rent your properties without any
              agent or commissions.
            </p>
          </div>
          {/* cards */}
          <div className="grid-layout-3 mt-8">
            {properties.map((property) => {
              return (
                /* card */
                <div
                  className="shadow rounded-xl overflow-hidden card-hover"
                  key={property.id}
                >
                  <div className="relative">
                    <LazyLoadImage
                      src={property.image}
                      height={236}
                      placeholderSrc={PlaceholderImage}
                    />
                    <div className="absolute top-4 end-4">
                      <div className=" w-10 h-10 bg-white rounded-full cursor-pointer flex-center-center ">
                        <button onClick={() => setHeartFill(!heartFill)}>
                          {heartFill ? (
                            <RxHeartFilled
                              size={20}
                              className=" text-red-600  "
                            />
                          ) : (
                            <RxHeartFilled
                              size={20}
                              className="text-slate-100 hover:text-red-600"
                            />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h2 className="h2 cursor-pointer hover:text-green-600 duration-500 ease-in-out inline-block">
                        {property.title}
                      </h2>
                    </div>
                    <div className="border-y border-slate-100 py-6 mb-6">
                      <div className="flex-between-center">
                        <div className="flex-center-center gap-2">
                          <FaCompressArrowsAlt className="icon-color" />
                          8000sqft
                        </div>
                        <div className="flex-center-center gap-2">
                          <IoBedOutline className="icon-color" />4 Beds
                        </div>
                        <div className="flex-center-center gap-2">
                          <LuBath className="icon-color" />4 Baths
                        </div>
                      </div>
                    </div>
                    <div className="flex-between-center text-slate-400">
                      <div className="">
                        <div className="">
                          <p>Price</p>
                          <p className="text-black font">$5000</p>
                        </div>
                      </div>

                      <div className="">
                        <p>Rating</p>
                        <div className="flex-center-center gap-2">
                          {[...Array(5)].map((x, i) => (
                            <BsStarFill key={i} className="text-amber-400" />
                          ))}
                          <p className="text-black font mt-1">5(30)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>

    </div>
  );
};

export default Buy;
