import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-20 text-white  bg-white  md:p-5 p-3 z-20  ">
      {/* MAIN CONTAINER */}
      <div className="h-full flex justify-between items-center w-[88%] mx-auto ">
        {/* LEFT */}
        <div className="text-black font-bold text-2xl">
          <a href="#">PortFolio</a>
        </div>

        {/* Toggle menu micon */}
        <div className="z-10 md:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-black"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* RIGHT */}

        <ul className="hidden lg:flex gap-5 border-2 border-red-500">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Doctor</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Responsive links */}
      {open && (
        <div className="lg:hidden ">
          <ul className="absolute w-full h-[calc(100vh-80px)] flex flex-col gap-8 top-20 left-0 bg-gray-500 justify-center items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Doctor</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
