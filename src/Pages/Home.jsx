import React from "react";

import Navbar from "../Components/Navbar";
import MainSection from "../Components/MainSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className=" container mx-auto h-screen w-full">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
