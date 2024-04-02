import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="about h-screen flex flex-col justify-center items-center">
      <h2>About Me</h2>
      <p className="text-xl my-20 italic">
        I write code, and something more...
      </p>
      <p>
      Dedicated and proficient Lead Mobile Engineer with a strong commitment to staying updated and honing skills. 
      Over 6 years of experience in developing cross-domain business applications, with commendable expertise in Javascript client-side frameworks.
      </p>
    </section>
  );
};

export default About;
