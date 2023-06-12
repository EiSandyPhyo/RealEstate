import React, { useState } from "react";
import { LuHexagon } from "react-icons/lu";
import { Icon } from "@iconify/react";

const HowItWorks = () => {
  const [workItems, setWorkItems] = useState([
    { id: 1, name: "Evaluate Property", icon: "uil:estate" },
    { id: 2, name: "Meeting with Agent", icon: "uil:bag" },
    { id: 3, name: "Close the Deal", icon: "uil:key-skeleton" },
  ]);
  return (
    <div className="container-2xl mt-16 lg:mt-24">
      <div className="flex-center-center flex-col pb-8">
        <h1 className="sub-header">How It Works</h1>
        <p className="paragraph">
          A great platform to buy, sell and rent your properties without any
          agent or commissions.
        </p>
      </div>
      <div className="grid-layout-3 mt-8">
        {workItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div className="lg:px-8" key={item.id}>
              <div className="relative">
                <LuHexagon
                  className=" w-32 h-32 text-[#f3faf6] mx-auto"
                  style={{ fill: "#f3faf6" }}
                />
                <div className="absolute center-h-v">
                  {/* <IconComponent className=" text-4xl text-green-600" /> */}
                  <Icon icon={item.icon} className=" text-4xl text-green-600" />
                </div>
              </div>
              <div className="mt-6">
                <h2 className="sub-header-2 text-center">{item.name}</h2>
                <p className="paragraph mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;