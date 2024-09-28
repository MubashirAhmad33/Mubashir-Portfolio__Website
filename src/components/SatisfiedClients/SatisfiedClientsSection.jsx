import React from "react";
import CountUp from "react-countup";
import { FaSmile, FaProjectDiagram, FaHandsHelping } from "react-icons/fa"; // Importing icons

const stats = [
  {
    id: 1,
    icon: <FaSmile className="text-yellow-500 text-6xl" />,
    label: "Satisfied Clients",
    value: 1200,
  },
  {
    id: 2,
    icon: <FaProjectDiagram className="text-green-500 text-6xl" />,
    label: "Projects Completed",
    value: 340,
  },
  {
    id: 3,
    icon: <FaHandsHelping className="text-blue-500 text-6xl" />,
    label: "Support Given",
    value: 1500,
  },
];

const SatisfiedClientsSection = () => {
  return (
    <div className=" py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="lg:text-3xl text-lg font-bold mb-8 text-center  ">
          Acheivement
        </h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className=" hover:bg-orange-500 hover:text-white transition-shadow group flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xlduration-300"
            >
              {/* Icon */}
              <div className="mb-4">{stat.icon}</div>

              {/* Counting Animation */}
              <div className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-white">
                <CountUp end={stat.value} duration={3} />
              </div>

              {/* Label */}
              <p className="text-lg text-gray-600 group-hover:text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SatisfiedClientsSection;
