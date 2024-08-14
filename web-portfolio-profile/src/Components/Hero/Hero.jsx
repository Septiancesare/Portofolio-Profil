import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero relative bg-hero-pattern  min-h-screen">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="hero-content flex-col gap-8 lg:flex-row relative z-10">
          <img
            src="..\src\assets\image\profpict tian 720.jpg"
            className="max-w-96 max-h-96 max-md:max-w-64 rounded-lg shadow-2xl"
          />
          <div className="text-slate-300 ">
            <h1 className="text-7xl max-md:text-5xl max-md:flex justify-center font-bold py-2">
              Hello everyone!!
            </h1>
            <h2 className="text-5xl max-md:text-4xl max-md:flex justify-center font-bold my-3 tracking-wider">
              I'm &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-cyan-100 to-cyan-400">
                Septian Cesare Arden
              </span>
            </h2>
            {/* <hr /> */}
            <h2 className="  text-5xl max-md:text-3xl max-md:shadow-none font-thin my-3 p-3 tracking-widest ">
              IT Enthusiast | Student
            </h2>

            <p className="py-6 max-w-2xl text-center ">
              I'm an Informatics Education student with strong communication and
              teamwork skills, passionate about Front-End development. I'm eager
              to explore Back-End and Android development, aiming to become a
              programmer who stays current with tech trends and contributes to
              the industry's growth.
            </p>
            <div className="max-md:flex justify-center">
              <button className="btn bg-cyan-300 text-blue-950 hover:text-cyan-200 hover:outline hover:outline-teal-400 ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
