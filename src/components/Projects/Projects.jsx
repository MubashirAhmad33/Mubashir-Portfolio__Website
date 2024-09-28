import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import GitHubModal from "../Modals/GitHubModal";

function Projects() {
  const [open, setOpen] = useState("");

  const projectsData = [
    {
      image: "./yt.jpeg", // Replace with your image URL
      heading: "Youtube Clone",
      description:
        "I made a Youtube Clone in June 2023 during my internship at Alright Tech. It's not just a task but a complete Frontend + API integration. I completed the frontend side using MUI and some styling with CSS3.",
      skills: ["React JS", "MUI", "API Integration", "CSS3"],
      GithubLink: "https://github.com/MubashirAhmad33/YouTube__Clone",
      buttonText: "Check Out",
    },
    {
      image: "./alphatimetracker.PNG", // Replace with your image URL
      heading: "Alphinex Timetracker",
      description:
        "In October 2023, I was hired by Alphinex Solutions, where I started working on the AlphaTime Tracker portal and Dashboard. The Dashboard side has a lot of admin functionality created using the Full Stack Next.js framework.",
      skills: ["Next.js", "Frontend", "Backend", "Full Stack"],
      GithubLink: "https://github.com/sulemankhan1/alphinex-dashboard",
      buttonText: "Check Out",
    },
    {
      image: "./coffeapp.PNG", // Replace with your image URL
      heading: "Landing Page (Coffee)",
      description:
        "This is a Coffee web app landing page created by myself using HTML, CSS3, and JavaScript. It's fully responsive for every screen.",
      skills: ["HTML", "CSS3", "JavaScript"],
      GithubLink:
        "https://github.com/MubashirAhmad33/Discover-the-Art-of-Fresh-Coffee-",
      buttonText: "Check Out",
    },
    {
      image: "./tea.PNG", // Replace with your image URL
      heading: "Tea Ecommerce",
      description:
        "In Alright Tech, I was tasked with creating this ecommerce Tea website. It has a landing page, cart, where we can add tea, its quantity, price, delivery price, and full ecommerce functionality.",
      skills: ["React JS", "Redux Toolkit", "CSS3", "Static Data For API"],

      GihubLink: "https://github.com/MubashirAhmad33/Image_Gallery_Profile",
      buttonText: "Check Out",
    },
  ];

  return (
    <div className="bg-white p-10" id="services">
      <h2 className="lg:text-3xl text-lg font-bold mb-8 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} setOpen={setOpen} />
        ))}
      </div>
      {/* Uncomment to use the GitHub modal */}
      {/* {open === "githubmodal" && <GitHubModal onClose={() => setOpen("")} />} */}
    </div>
  );
}

export default Projects;
