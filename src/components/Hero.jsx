import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../assets/beachVid.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={beachVid}
      />
      <div className="w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-6">
        <h1>First Class Travel</h1>
        <h2>Top Locations Worldwide</h2>
        <form
          className="flex justify-between items-center max-w-[700] mx-auto w-full border p-1 rounded-md
         text-black bg-gray-100/70"
        >
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
