import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="about h-screen flex flex-col justify-center items-center">
      <h2 className="font-mono">About Me</h2>
      <p className="text-xl my-10 italic text-gray-300 font-mono">
        I write code, and something more...
      </p>
      <p className="w-full md:w-1/3 text-lg text-cyan-600 text-justify font-mono">
      Dedicated and proficient Lead Mobile Engineer with a strong commitment to staying updated and honing skills. 
      Over 6 years of experience in developing cross-domain business applications, with commendable expertise in Javascript client-side frameworks.
      </p>
    </section>
  );
};

export default About;
