'use client'

import { FC } from "react";

import Typewriter from "typewriter-effect";

const Intro: FC = () => {
    return (
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
    );
};

export default Intro;
