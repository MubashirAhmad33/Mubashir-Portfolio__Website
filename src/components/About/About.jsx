import React from "react";
import { useSpring, animated } from "@react-spring/web";

const About = () => {
  // Create a spring for the image animation
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" }, // Start above and transparent
    to: { opacity: 1, transform: "translateY(0)" }, // Move to original position
    config: { tension: 200, friction: 20 },
    delay: 200, // Slight delay for the image animation
  });

  // Create a spring for the text animation
  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" }, // Start below and transparent
    to: { opacity: 1, transform: "translateY(0)" }, // Move to original position
    config: { tension: 200, friction: 20 },
    delay: 400, // Delay the text animation for better effect
  });

  return (
    <section className="py-16 max-w-6xl mx-auto p-5" id="about">
      <h2 className="lg:text-3xl text-lg font-bold mb-8 text-center">About</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-0">
        <animated.div style={imageAnimation} className="md:w-1/3 w-full">
          <img
            src="./profile.png"
            alt="Profile"
            className="w-60 h-60 object-cover bg-orange-500 mx-auto"
          />
        </animated.div>

        <animated.div style={textAnimation} className="md:w-2/3 w-full">
          <h3 className="md:text-2xl text-md font-semibold mb-2 p-3">
            I'm Mubashir
          </h3>
          <p className="text-md text-gray-700 p-3 text-justify">
            I'm Mubashir Ahmad, a Software Engineering graduate from the
            University of Kohat (KUST) in 2022. As a React and Next.js
            Developer, I specialize in comprehensive front-end and back-end
            development. I focus on creating visually stunning and
            high-performing products that deliver exceptional user experiences.
            With a wealth of experience in React JS, Next JS, and the MERN
            Stack, I showcase a versatile skill set in software development.
          </p>
        </animated.div>
      </div>
    </section>
  );
};

export default About;
