import React from "react";

const HeroSection = () => {
  return (
    <div className=" bg-[#EDF5FE]  md:p-5 p-3 z-10 ">
      <div className="flex flex-col md:flex-row items-center  gap-5  w-[90%] mx-auto">
        {/* TEXT CONTAINER */}
        <div className="w-1/2 mx-auto   ">
          <p className=" text-lg md:text-xl">Hello There</p>
          <h1 className="text-3xl md:text-5xl max-w-md">
            I’m Michale Smith, UI & UX Designer
          </h1>
          <p className="mt-3 text-sm md:text-base  max-w-md">
            I'm a creative designer based in New York, and I'm very passionate
            and dedicated to my work.
          </p>
          <button className="mt-5 bg-red-500 text-white px-4 py-2 rounded-3xl">
            Hire me
          </button>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="h-full flex md:flex-col justify-center items-center relative md:w-1/2 mx-auto">
          {/* Centered Ellipse */}
          <img
            src="./Ellipse 12.png"
            alt=""
            className="absolute object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-[400px] "
          />
          <img
            src="./Ellipse 13.png"
            alt=""
            className="absolute object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-[430px] "
          />
          <img
            src="./Ellipse 14.png"
            alt=""
            className="absolute object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-[450px] "
          />
          {/* Designer Image */}
          <img
            src="./men.png"
            alt="Designer"
            className="relative z-10  w-1/2 md:w-2/3 max-h-full object-cover "
          />

          <div className="absolute bg-white flex flex-col items-center gap-2 px-4 py-2 rounded-xl top-0 right-24 z-20">
            <img
              src="./person-svgrepo-com 1.png"
              alt=""
              className="bg-[#EDF5FE] p-2 rounded-full"
            />
            <h1 className="font-semibold">2K+</h1>
            <p className="text-center text-sm">
              Happy <span className="block">Customer</span>
            </p>
          </div>
          <div className="absolute bg-white flex flex-row items-center gap-2 px-4 py-2 rounded-xl bottom-[10px] left-[24px] z-20">
            <img
              src="./Group.png"
              alt=""
              className="bg-[#EDF5FE] p-2 rounded-full"
            />

            <p className="text-center text-sm">
              Best Design
              <span className="block"> Award.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
