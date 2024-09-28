import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Home = () => {
  // Create a spring for text animations
  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" }, // Start off-screen to the left
    to: { opacity: 1, transform: "translateX(0)" }, // Move to original position
    config: { tension: 200, friction: 20 },
    delay: 2000, // 2 seconds delay before the animation starts
  });

  // Create a spring for image animations
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 20 },
    delay: 200, // Add a slight delay for the image animation
  });

  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="grid max-w-5xl px-4 py-5 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <animated.p
            style={textAnimation}
            className="max-w-2xl mb-2 font-light text-black lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400"
          >
            Hi I'm
          </animated.p>
          <animated.h1
            style={textAnimation}
            className="font-ageo  mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
          >
            Mubashir Ahmad
          </animated.h1>
          <animated.p
            style={textAnimation}
            className="max-w-lg mx-auto font-light text-black md:text-lg lg:text-xl text-justify"
          >
            I'm Mubashir Ahmad, a Software Engineer as well as a React and
            Next.js Developer.
          </animated.p>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex flex justify-center items-center mt-10">
          <animated.img
            style={imageAnimation}
            src="./perfil.png"
            alt=""
            className="w-60 h-60 object-cover bg-orange-400 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
