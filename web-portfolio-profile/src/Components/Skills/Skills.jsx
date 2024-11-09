import React from "react";

const Skills = () => {
  return (
    <>
      <div
        className="flex  justify-center items-center min-h-2.5 max-md:flex max-md:justify-center max-md:w-full  bg-gradient-to-tr from-slate-900 via-black to-slate-800 p-10"
        id="skil"
      >
        <div className="flex flex-col items-center">
          <h6 className="flex justify-center text-center text-slate-200 font-bold text-2xl p-10 glow-text tracking-wider">
            Skills
          </h6>
          <div className="flex gap-8 mb-10">
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-solid fa-people-arrows fa-3x p-3"></i>
              <p>Communication</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-solid fa-people-group fa-3x p-3"></i>
              <p>Team Work</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-solid fa-clock fa-3x p-3"></i>
              <p>Time Management</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-solid fa-lightbulb fa-3x p-3"></i>
              <p>Creativity</p>
            </div>
          </div>
          {/* hardskill  */}
          <div className="flex gap-12 m-4">
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-brands fa-js fa-3x p-3"></i>
              <p>Javascript</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-brands fa-react fa-3x p-3"></i>
              <p>React Js</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-brands fa-php fa-3x p-3"></i>
              <p>PHP</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-brands fa-laravel fa-3x p-3"></i>
              <p>Laravel</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-brands fa-bootstrap fa-3x p-3"></i>
              <p>Bootstrap</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-brands fa-tailwind fa-3x p-3"></i>
              <p>Tailwind</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-brands fa-flutter fa-3x p-3"></i>
              <p>Flutter</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-cyan-300">
              <i class="fa-solid fa-leaf fa-3x p-3"></i>
              <p>Spring Boot</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
