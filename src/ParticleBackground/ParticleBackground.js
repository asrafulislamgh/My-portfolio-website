import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./Particle-config";

const ParticleBackground = () => {
  return (
    <div>
      <Particles params={particleConfig}></Particles>
    </div>
  );
};

export default ParticleBackground;
