import React from "react";
import Typewriter from "typewriter-effect";

import About from "./components/About"; // Adjust path if necessary
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import "./globals.css";

const HomePage = () => {
  const titleText = "Hi, I'm Vishnu M Menon";
  return (
    <>
      <section className="h-screen bg-black-200 pt-96">
        <h1 className="flex justify-center items-center">{titleText}</h1>
        <h1 className="flex justify-center items-center">{titleText}</h1>
        {/* <Typewriter
          options={{
            strings: ["1", "2"],
            autoStart: true,
            loop: true,
          }}
        /> */}
      </section>
      <section className="about p-4">
        <About />
      </section>
      <section className="experience p-4">
        <Experience />
      </section>
      <section className="contact p-4">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
