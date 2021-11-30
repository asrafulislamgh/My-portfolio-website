import React from "react";
import Contact from "./Contact";
import Projects from "./Projects/Projects";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
  return (
    <div id="home">
      <TopBanner />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
