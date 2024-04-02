import About from "./components/About"; // Adjust path if necessary
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

import "./globals.css";

const HomePage = () => {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Contact />
    </>
  );
};

export default HomePage;
