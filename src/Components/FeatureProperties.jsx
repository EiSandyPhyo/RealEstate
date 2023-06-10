import React, { useState } from "react";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import PlaceholderImage from "../../public/images/blurImg.png";

const FeatureProperties = ({ properties }) => {
  const [heartFill, setHeartFill] = useState(false);
  return (
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
                        <RxHeartFilled size={20} className=" text-red-600  " />
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
  );
};

export default FeatureProperties;
