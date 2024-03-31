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
          className="flex justify-between items-center text-xl px-14 fixed left-0 right-0 top-0 z-10 h-14 text-white -tracking-tight "
          style={{
            background: "#1e1e1e",
            fontFamily: "Inconsolata, monospace",
            fontOpticalSizing: "auto",
            fontWeight: "<weight>",
            fontStyle: "normal",
            fontVariationSettings: "wdth 100",
          }}
        >
          <div>
            <label
              style={{ color: "#2938bd" }}
              className="font-bold text-white"
            >
              Dhruv{" "}
            </label>
            Patel
          </div>
          <div className="flex">
            <ul className="gap-x-10 font-semibold hidden lg:flex ">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/service" className="nav-link">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/project" className="nav-link">
                  Project
                </Link>
              </li>
              <li>
                <Link to="/skill" className="nav-link">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <button onClick={handleClick} className="lg:hidden">
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
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="nav-link">
              Service
            </Link>
          </li>
          <li>
            <Link to="/project" className="nav-link">
              Project
            </Link>
          </li>
          <li>
            <Link to="/skill" className="nav-link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
