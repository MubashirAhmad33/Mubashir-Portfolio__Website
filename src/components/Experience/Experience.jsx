import React from "react";

const experiences = [
  {
    id: 1,
    company: "NAUSAL TECHNOLOGY",
    role: "Web Development (FRONT-END)",
    description: `
      Nausal Tech intern skilled in HTML, CSS, and JavaScript for static web projects.
      Proficient in the full development cycle, ensuring consistent quality.
      Attained intermediate-level front-end skills.
    `,
  },
  {
    id: 2,
    company: "ALRIGHT TECH",
    role: "MERN STACK (REACT JS)",
    description: `
      MERN Stack Developer at Alright Tech, specializing in crafting dynamic web applications.
      Proficient in MongoDB, Express.js, React.js, and Node.js.
      Committed to optimizing performance and ensuring scalable code for impactful digital solutions.
    `,
  },
  {
    id: 3,
    company: "ALPHINEX SOLUTION",
    role: "FULL STACK (NEXT JS)",
    description: `
      Full Stack (Next.js) Developer at Alphinex Solution, leveraging MongoDB and Next.js 
      for dynamic web applications. Specialized in seamless user experiences and 
      committed to cutting-edge web development trends.
    `,
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="experience">
      <h2 className="lg:text-3xl text-lg font-bold text-center mb-10">
        Experience
      </h2>

      {/* Timeline Wrapper */}
      <div className="relative before:absolute before:content-[''] before:w-1 before:bg-gray-400 lg:before:h-full before:left-1/2 before:top-0   md:before:h-0">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`mb-10 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Experience Card */}
            <div
              className={`order-1 bg-white rounded-lg shadow-md w-full md:w-5/12 p-6 ${
                index % 2 === 0
                  ? "text-justify group hover:bg-orange-400"
                  : "text-justify group hover:bg-orange-400"
              }`}
            >
              <h3 className="font-bold lg:text-2xl text-md text-left mb-2 group-hover:text-white">
                {exp.company}
              </h3>
              <h4 className="font-semibold lg:text-2xl text-md mb-4 text-orange-500 group-hover:text-white">
                {exp.role}
              </h4>
              <p className="text-gray-700 group-hover:text-white">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
