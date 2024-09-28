import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section className="p-10 max-w-6xl mx-auto" id="skills">
      <h2 className="lg:text-3xl text-lg font-bold text-center mb-8">Skills</h2>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-5 ">
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">Professional Skills</h3>
          <p className="mb-6 text-md text-gray-700 text-justify">
            I’m a React and Next.js developer skilled in full-stack development
            using the MERN stack. I specialize in creating responsive,
            high-performance applications with a focus on seamless user
            experiences and clean, efficient design.
          </p>

          {/* Skill Data */}
          {skillsData.map((skill) => (
            <div className="flex items-center mb-4 " key={skill.name}>
              <div className="flex items-center w-1/2 ">
                <span className="md:text-2xl mr-2 text-lg">{skill.icon}</span>
                <span className="max-[500px]:hidden ">{skill.name}</span>
              </div>
              <div className="relative w-full mx-2 bg-gray-200 rounded h-3">
                <div
                  className={`bg-blue-600 h-3  rounded`}
                  style={{ width: skill.percentage }}
                />
              </div>
              <div className="font-medium">{skill.percentage}</div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="./work3.jpg"
            alt="Work representation"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

// Skills Data Array
const skillsData = [
  {
    name: "HTML5",
    percentage: "95%",
    icon: <FaHtml5 className="text-red-600" size={24} />,
  },
  {
    name: "CSS3",
    percentage: "85%",
    icon: <FaCss3Alt className="text-blue-600" size={24} />,
  },
  {
    name: "JavaScript",
    percentage: "65%",
    icon: <FaJs className="text-yellow-500" size={24} />,
  },
  {
    name: "React JS",
    percentage: "80%",
    icon: <FaReact className="text-blue-400" size={24} />,
  },
  {
    name: "Next.js",
    percentage: "80%",
    icon: <SiNextdotjs className="text-black" size={24} />,
  },
];

export default Skills;
