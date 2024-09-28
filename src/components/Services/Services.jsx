import React, { useState } from "react";
import Card from "./Card";
import GitHubModal from "../Modals/GitHubModal";

function Services() {
  const [open, setOpen] = useState("");

  const servicesData = [
    {
      image: "./React js.png", // Replace with your image URL
      heading: "React JS",
      description:
        "React is a powerful JavaScript library for building dynamic user interfaces, primarily for single-page applications. With over 2 years of experience, we specialize in developing reusable and efficient UI components.",
      buttonText: "Check Out",
    },
    {
      image: "./Node js.png", // Replace with your image URL
      heading: "Node JS",
      description:
        "Node.js is a server-side runtime built on Chrome's V8 JavaScript engine, used to create fast and scalable applications. With 1 year of experience, we build efficient real-time systems using Node.js.",
      buttonText: "Check Out",
    },
    {
      image: "./Express js.png", // Replace with your image URL
      heading: "Express JS",
      description:
        "Express.js is a minimalistic web application framework for Node.js that simplifies backend development. With 1 year of experience, we build scalable and robust APIs and web services using Express.",
      buttonText: "Check Out",
    },
    {
      image: "./Mongo db.png", // Replace with your image URL
      heading: "Mongoose",
      description:
        "Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. With 1 year of experience, we manage data efficiently and design scalable databases using Mongoose and MongoDB.",
      buttonText: "Check Out",
    },
    {
      image: "./Next js.png", // Replace with your image URL
      heading: "Next JS",
      description:
        "Next.js is a React framework that enables server-side rendering and static site generation. With 2 years of experience, we build high-performance web applications and SEO-friendly websites using Next.js.",
      buttonText: "Check Out",
    },
    {
      image: "./Tailwind css.png", // Replace with your image URL
      heading: "Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. With 2 years of experience, we create highly responsive and customized designs with Tailwind CSS.",
      buttonText: "Check Out",
    },
    {
      image: "./Typescript.png", // Replace with your image URL
      heading: "TypeScript",
      description:
        "TypeScript is a strongly-typed superset of JavaScript that enhances code reliability and development speed. With 1 years of experience, we use TypeScript to build scalable and maintainable applications.",
      buttonText: "Check Out",
    },
  ];

  return (
    <div className="bg-white p-10 " id="services">
      <h2 className="text-3xl font-bold mb-8 text-center  ">Skills Set</h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   max-w-6xl mx-auto ">
        {servicesData.map((service, index) => (
          <Card key={index} service={service} setOpen={setOpen} />
        ))}
      </div>
      {open === "githubmodal" && <GitHubModal onClose={() => setOpen("")} />}
    </div>
  );
}

export default Services;
