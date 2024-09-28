import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close menu
import Menu from "./Menu";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Toggle navbar state
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav class="bg-gray-800 h-20  ">
      {/* <div className="flex justify-between items-center max-w-4xl  mx-auto h-full relative">
  
        <div className="text-white">Logo</div>
        <Menu />

        <ul className="lg:flex space-x-3  md:hidden">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div> */}

      <div className="flex  justify-center items-center h-full text-white font-bold text-2xl ">
        MobiFolio.com
      </div>
    </nav>
  );
};

export default Navbar;
