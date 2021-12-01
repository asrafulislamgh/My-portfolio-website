import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import NavigationBar from "./Pages/Shared/NavigationBar";
import Footer from "./Pages/Shared/Footer";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticleBackground from "./ParticleBackground/ParticleBackground";

AOS.init();
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center  vh-100"
        style={{ backgroundColor: "black" }}
      >
        <div>
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Router>
        {/* {loading ? <Line /> : "Thank you"} */}
        <NavigationBar />
        <ParticleBackground />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/projects" element={<Home />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/:id" element={<ProjectDetails />}></Route>
          <Route path="/contact" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
