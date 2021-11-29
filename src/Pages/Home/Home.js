import React from "react";
import Footer from "../Shared/Footer";
import NavigationBar from "../Shared/NavigationBar";
import Contact from "./Contact";
import Projects from "./Projects/Projects";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <TopBanner />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
