import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="about h-screen flex flex-col justify-center items-center px-4">
      <h2 className="font-mono">About Me</h2>
      <p className="text-xl my-10 italic text-gray-300 font-mono">
        I write code, and something more...
      </p>
      <p className="w-full md:w-1/3 text-base text-cyan-600 text-justify font-mono">
      Dedicated and proficient Associate Technical Lead with a strong commitment to staying updated and honing skills. 
      Over 7 years of experience in developing cross-domain business applications, with commendable expertise in Javascript client-side frameworks.
      <br />
      <br />
      After completing my Masters in Computer Science in 2016, I started my career in software development with  <strong className="text-white">Oracle,</strong> where I primarily worked on developing a Dashboard Project using the OJet framework.
      The move to PNB as an IT Officer was in 2019, where I worked on customizing the Core Banking Solution as per the business requirements.
      In 2020, I moved to  <strong className="text-white">KeyValue Software Systems,</strong> where I embarked on cross platform mobile applications development using the React Native framework. 
      I have worked on multiple domains including FinTech, E-commerce and social networking applications. Besides React Native, I have also had working experience in ReactJS, Next, GraphQL...
      <br />
      <br />
      As part of my thesis during my Masters, I have worked on leveraging <strong className="text-white">Multi Label Classification</strong> to automate ranking of candidates in a recruitment process.
      This was done by evaluating their emotional intelligence using social media metadata.
      </p>
    </section>
  );
};

export default About;
