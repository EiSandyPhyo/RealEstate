import React from "react";
import { HiOutlinePhone } from "react-icons/hi";

const GetInTouch = () => {
  return (
    <div className="container-2xl mt-16 lg:mt-24 mb-20">
      <div className="flex-center-center flex-col">
        <h1 className="sub-header  dark:text-white">Have Question ? Get in touch!</h1>
        <p className="paragraph">
          A great platform to buy, sell and rent your properties without any
          agent or commissions.
        </p>
        <button className="btn flex-center-center gap-2 px-7 py-2 mt-6">
          <HiOutlinePhone className="xs:mb-[4px] md:mb-1 text-md sm:text-lg" />
          Contact us
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
