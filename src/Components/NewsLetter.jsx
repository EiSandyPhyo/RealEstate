import React from "react";
import { FiMail } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className=" container mx-auto relative my-10 lg:my-20 overflow-hidden">
      <div className="flex p-10 justify-between items-center z-10 shadow-lg ">
        <div>
          <h1 className=" text-2xl md:text-3xl font-semibold mb-3">
            Subscribe to Newsletter!
          </h1>
          <p className=" text-slate-400 mb-3">
            Subscribe to get latest updates and information.
          </p>
        </div>
        <div className="flex gap-3 border-2 pl-3 border-slate-200 rounded-full w-[500px]">
          <input
            type="text"
            placeholder="Enter your email:"
            className=" px-3 py-2 w-full border-0 "
          />
          <button className=" p-2 w-[150px] fs-[17px] leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      {/*for desktop view */}
      <div className=" absolute left-[-20px] top-[-30px] w-full -z-10">
        <div className=" flex justify-between items-center ">
          <FiMail className=" rotate-[-45deg]" size={"9rem"} color="gainsboro" />
          <BsPencil size={"9rem"} color="gainsboro" />
        </div>
      </div>

      {/*for mobile view*/}
      <div className=" lg:hidden absolute rotate-[15deg] top-0 left-[-10px] w-full -z-10">
        <div className=" flex justify-between items-center ">
          <FiMail
            className=" rotate-[-50deg]"
            size={"9rem"}
            color="gainsboro"
          />
          <BsPencil size={"9rem"} color="gainsboro" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
