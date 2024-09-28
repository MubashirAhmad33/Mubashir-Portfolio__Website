import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center gap-20 items-center">
          <div className=" text-center text-gray-400">
            <p>&copy; 2024 MobiFolio. All rights reserved.</p>
          </div>
          <div className="flex space-x-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
