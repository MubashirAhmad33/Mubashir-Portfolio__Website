import React, { useState } from "react";
import Card from "./Card";
import GitHubModal from "./GitHubModal";

function Services() {
  const [open, setOpen] = useState("");

  const servicesData = [
    {
      image: "./service1.png", // Replace with your image URL
      heading: "UI/UX Design",

      description:
        "We offer top-notch web development services using modern technologies.",
      buttonText: "Learn More",
    },
    {
      image: "./booking 1 (Traced).png", // Replace with your image URL
      heading: "Mobile App Design",
      description:
        "We create high-performing mobile applications for Android and iOS.",
      buttonText: "Get Started",
    },
    {
      image: "./web-design 1 (Traced).png", // Replace with your image URL
      heading: "Web  Design",
      description:
        "Beautiful and user-friendly design to enhance your product's user experience.",
      buttonText: "Contact Us",
    },
  ];
  return (
    <div className="bg-white p-10 ">
      <div className="text-center">
        <h1 className="font-semibold ">
          My <span className="text-red-500">Services</span>
        </h1>
        <p className="mx-auto mb-10 text-lg sm:text-lg md:text-4xl md:w-[500px]">
          Provide a Wide Range of Digital Services
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   max-w-5xl mx-auto ">
        {servicesData.map((service, index) => (
          <Card key={index} service={service} setOpen={setOpen} />
        ))}
      </div>
      {open === "githubmodal" && <GitHubModal onClose={() => setOpen("")} />}
    </div>
  );
}

export default Services;
