import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='bg-[url("./hero2.png")] bg-cover h-[60vh] sm:h-[50vh] lg:h-[90vh] relative'>
      <div className="absolute left-0 top-0 bg-green-500/30 z-40 w-full h-full" />
      <div className="text-white flex flex-col py-15 px-10 lg:px-30 items-center text-center sm:items-start sm:text-start sm:py-50">
        <div className="lg:max-w-4xl md:max-w-xl space-y-5">
          <h1 className="lg:text-5xl text-xl sm:text-2xl sm:text-black text-green-500 font-bold">
            Delicious food at irresistible prices
          </h1>
          <p className="lg:text-3xl  sm:text-xl font-bold text-white">
            Discover the best fresh meals daily with high quality and an
            affordable price for everyone
          </p>
        </div>

        <button className="md:mt-10 lg:mt-15 mt-5 py-3 px-6 bg-green-500 rounded-full text-black font-bold border-2 border-green-500 hover:bg-white hover:text-green-500 transition cursor-pointer w-fit z-60 animate-pulse">
          <Link to="/foods">Discover Foods</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
