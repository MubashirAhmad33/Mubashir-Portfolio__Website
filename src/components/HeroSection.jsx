import React, { useState } from "react";
import Modal from "./Modal";

const HeroSection = () => {
  const [open, setOpen] = useState("");
  return (
    <div className="min-h-screen flex items-center bg-gray-400">
      <div className="flex md:flex-row flex-col gap-4 max-w-5xl mx-auto h-full p-5  ">
        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col items-start justify-center">
          <p>Hello there</p>
          <h1 className="max-w-xl text-4xl font-bold">
            I’m Michale Smith, Ui & Ux Designer
          </h1>
          <p className="mt-4 text-lg">
            I'm a creative designer based in New York, and I'm very passionate
            and dedicated to my work.
          </p>
          <button
            className="flex items-center gap-2 mt-6 bg-red-500 text-white px-4 py-2 rounded-full"
            onClick={() => setOpen("hireme")}
          >
            <span>Hire me</span>
            <img src="./arrow-right.png" alt="arrow" />
          </button>
        </div>
        {open === "hireme" && <Modal onClose={() => setOpen("")} />}

        {/* RIGHT */}
        {/* <div className="relative md:w-1/2">
          <img
            src="./Ellipse 12.png"
            alt="Ellipse 12"
            className="w-[400px] object-cover  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " // First ellipse with base width
          />
          <img
            src="./Ellipse 13.png"
            alt="Ellipse 13"
            className="w-[420px] object-cover   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " // First ellipse with base width
          />
          <img
            src="./Ellipse 14.png"
            alt="Ellipse 14"
            className="w-[430px]  object-cover  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " // First ellipse with base width
          />
          <img
            src="./men.png"
            alt="Ellipse 14"
            className="w-[430px]  object-cover  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " // First ellipse with base width
          />
        </div> */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <img
            src="./Ellipse 12.png"
            alt="Ellipse 12"
            className="w-[400px] object-cover absolute"
          />
          <img
            src="./Ellipse 13.png"
            alt="Ellipse 13"
            className="w-[420px] object-cover absolute"
          />
          <img
            src="./Ellipse 14.png"
            alt="Ellipse 14"
            className="w-[430px] object-cover absolute"
          />
          <img
            src="./men.png"
            alt="Designer"
            className="relative z-10 w-[430px] object-cover"
          />
          <div className="absolute bg-white flex flex-col items-center gap-2 px-4 py-2 rounded-xl top-0 right-24 z-20 ">
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
          <div className="absolute bg-white flex flex-row items-center gap-2 px-4 py-2 rounded-xl bottom-10 left-0 z-20">
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
