import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav>
        <div
          className="flex justify-between items-center text-xl px-28 fixed top-0 left-0 right-0 z-10 h-14 text-white -tracking-tight "
          style={{
            background: "#1e1e1e",
            fontFamily: "Inconsolata, monospace",
            fontOpticalSizing: "auto",
            fontWeight: "<weight>",
            fontStyle: "normal",
            fontVariationSettings: "width 100",
          }}
        >
          <div className="text-2xl">
            <label
              style={{ color: "#7e74f1" }}
              className="font-bold text-white"
            >
              Dhruv{" "}
            </label>
            Patel
          </div>
          <div className="flex">
            <ul className="gap-x-10 font-semibold hidden lg:flex ">
              <li>
                <Link to="/" className="nav-link hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link hover:text-gray-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/service" className="nav-link hover:text-gray-500">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/project" className="nav-link hover:text-gray-500">
                  Project
                </Link>
              </li>
              <li>
                <Link to="/skill" className="nav-link hover:text-gray-500">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link hover:text-gray-500">
                  Contact
                </Link>
              </li>
            </ul>
            <button
              onClick={handleClick}
              className="lg:hidden transition-opacity duration-500"
              style={{ opacity: showMenu ? 0.5 : 2 }}
            >
              {showMenu ? (
                <img src="./assets/close.png" alt="close" className="w-4 h-4" />
              ) : (
                <img src="./assets/menu.png" alt="menu" className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
        <ul
          className={`flex flex-col justify-center items-center gap-y-14 fixed bg-blue-400 w-full h-full top-0 font-semibold text-white transition-transform duration-700 ${
            !showMenu ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{ background: "#1e1e1e" }}
        >
          <li onClick={handleClick}>
            <Link to="/" className="nav-link hover:text-gray-500">
              Home
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/about" className="nav-link hover:text-gray-500">
              About
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/service" className="nav-link hover:text-gray-500">
              Service
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/project" className="nav-link hover:text-gray-500">
              Project
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/skill" className="nav-link hover:text-gray-500">
              Skills
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/contact" className="nav-link hover:text-gray-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
