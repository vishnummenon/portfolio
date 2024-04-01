"use client";

import Typewriter from "typewriter-effect";

import About from "./components/About"; // Adjust path if necessary
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import "./globals.css";

const HomePage = () => {
  return (
    <>
      <section className="h-screen bg-black-200 flex flex-col justify-center items-center">
        <div>
        <h1 className="text-7xl">Hi,</h1>
        <h1 className="text-4xl ml-16 mt-4">I'm Vishnu M Menon</h1>
        <div className="flex ml-16 mt-2">
          <pre>I am a </pre>
          <Typewriter
            options={{
              strings: [
                "React Native Developer",
                "Machine Learning Enthusiast",
                "Creative Writer"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        </div>
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
