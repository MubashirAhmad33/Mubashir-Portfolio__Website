import React from "react";

const ProjectCard = ({ project, setOpen }) => {
  return (
    <div className="group rounded-lg shadow-2xl flex flex-col gap-5 h-full p-5 hover:bg-orange-500 hover:text-white">
      {/* IMAGE */}
      <img
        src={project.image}
        alt={project.heading}
        className="w-full h-64 object-contain rounded-xl"
      />
      {/* HEADER */}
      <h1 className="text-2xl font-semibold">{project.heading}</h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 group-hover:text-white flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-black mr-2 p-1 mb-2 text-sm rounded-md transition-colors duration-300 group-hover:bg-orange-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-auto relative">
        <button
          className="group py-2 px-4 rounded text-black group-hover:text-white hover:text-white transition-colors duration-300"
          onClick={() => setOpen("githubmodal")}
        >
          {/* Left border effect */}
          <span className="absolute left-0 top-0 h-0 w-1 bg-white transition-all duration-300 group-hover:h-full"></span>
          <a
            href={project.GithubLink} // Corrected the key from GihubLink to GithubLink
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.buttonText}
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
