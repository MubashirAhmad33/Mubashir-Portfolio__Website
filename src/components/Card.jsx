import React from "react";

const Card = ({ service }) => {
  return (
    <div className=" rounded-lg shadow-2xl flex flex-col gap-5 h-full p-5  hover:bg-red-500 hover:text-white">
      {/* IMAGE */}
      <img
        src={service.image}
        alt={service.heading}
        className={` w-16 h-16 object-contain rounded-md`}
      />
      {/* HEADER */}
      <h1 className="text-2xl font-semibold">{service.heading}</h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 flex-grow">{service.description}</p>

      {/* BUTTON */}
      <div className="mt-auto relative">
        <button className=" group py-2 px-4 rounded text-blue-500 hover:text-blue-600 transition-colors duration-300">
          {service.buttonText}
          {/* Left border effect */}
          <span className="absolute left-0 top-0 h-0 w-1 bg-blue-500 transition-all duration-300 group-hover:h-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Card;
