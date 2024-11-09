import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="navbar bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Academic</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a href="#contact" onClick={() => handleScroll("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl mx-4 text-slate-100">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-cyan-400 to-cyan-800">
              Portfolio
            </span>
            Website
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-md">
            <li className="text-slate-200 rounded-lg mx-2  hover:glow-navbar">
              <a>Home</a>
            </li>
            <li className="text-slate-200 rounded-lg mx-2 hover:glow-navbar">
              <a href="#academic" onClick={() => handleScroll("academic")}>
                Academic
              </a>
            </li>
            <li className="text-slate-200 rounded-lg mx-2  hover:glow-navbar">
              <a href="#skil" onClick={() => handleScroll("skil")}>Skills</a>
            </li>
            <li className="text-slate-200  rounded-lg mx-2  hover:glow-navbar">
              <a>Portfolio</a>
            </li>
            <li className="text-slate-200  rounded-lg mx-2 hover:glow-navbar">
              <a href="#contact" onClick={() => handleScroll("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-4 navbar-end">
          <a
            className="btn bg-gradient-to-br from-cyan-700 via-cyan-400 to-cyan-600 text-black
          hover:from-cyan-950 hover:via-cyan-700 hover:to-cyan-600 hover:text-slate-100 
          transition duration-500 ease-in-out"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
