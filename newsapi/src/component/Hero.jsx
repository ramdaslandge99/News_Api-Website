import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{ height: "50vh" }}
    >
      <h1 style={{ fontSize: "50px", color: "orangered" }}>NEWS Hub</h1>
      <h4 style={{ color: "#008B8B" }}>THE WEBSITE BUILD WITH THE NEWS API</h4>
    </div>
  );
};

export default Hero;
