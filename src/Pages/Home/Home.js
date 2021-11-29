import React from "react";
import NavigationBar from "../Shared/NavigationBar";
import Projects from "./Projects/Projects";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <TopBanner />
      <Projects />
      <h1>Bismillahr Rahmanir Rahim</h1>
    </div>
  );
};

export default Home;
