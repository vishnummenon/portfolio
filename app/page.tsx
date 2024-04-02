import About from "./components/About"; // Adjust path if necessary
import Experience from "./components/Experience";
import Offline from "./components/Offline";
import Intro from "./components/Intro";

import "./globals.css";

const HomePage = () => {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Offline />
    </>
  );
};

export default HomePage;
