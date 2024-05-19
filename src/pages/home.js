import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="home"
        style={{
          background: "#1e1e1e",
          fontFamily: "Inconsolata, monospace",
          fontOpticalSizing: "auto",
          fontWeight: "<weight>",
          fontStyle: "normal",
          fontVariationSettings: "width 100",
        }}
      >
        <div
          className="flex items-center justify-center gap-x-52"
          style={{ background: "#1e1e1e", height: "100vh" }}
        >
          <div className="text-white w-2/6">
            <p
              style={{
                color: "#777e82",
                fontSize: "22px",
              }}
              className="tracking-[3px]"
            >
              ~ My Name is
            </p>
            <p className="text-5xl font-bold mt-2">
              <label style={{ color: "#7e74f1" }}>Dhruv</label> Patel.
            </p>
            <h1
              className="relative mt-2 text-3xl font-bold"
              style={{ color: "#7e74f1" }}
            >
              I'm a{" "}
              <label className="text-white">fullstack web developer</label>
            </h1>
            <p className="mt-4 text-xl -tracking-tight  ">
              I'm a proficient Fullstack developer with a strong focus on
              crafting dynamic websites using React.js. Committed to clean code
              and collaboration, I'm driven by challenges and dedicated to
              delivering top-notch results.
            </p>
            <div className="flex gap-x-5 mt-5">
              <Link to="https://www.linkedin.com/in/dhruv-patel-43989822b/">
                <img
                  src="./assets/linkdin.svg"
                  alt="linkdin"
                  className="w-7 h-8 hover: transition-transform duration-300 hover:-translate-y-2"
                />
              </Link>
              <Link to="https://github.com/Dhruv-patel-1702">
                <img
                  src="./assets/github.svg"
                  alt="github"
                  className="w-7 h-8 hover:transition-transform duration-300 hover:-translate-y-2"
                />
              </Link>
              <Link to="https://www.instagram.com/dhruv_patel_17_2/">
                <img
                  src="./assets/instagram.svg"
                  alt="instagram"
                  className="w-7 h-8 hover:transition-transform duration-300 hover:-translate-y-2"
                />
              </Link>
              <Link to="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1344001889235334167">
                <img
                  src="./assets/Figma.svg"
                  alt="Figma"
                  className="w-7 h-8 hover:transition-transform duration-300 hover:-translate-y-2"
                />
              </Link>
            </div>
          </div>
          <div>
            <div>
              <div className="w-60 h-80  border-2 rounded-lg border-gray-400 bg-zinc-700 opacity-40 bg-cover flex items-center">
                <img
                  src="./assets/sem3_end.jpg"
                  alt="homephoto"
                  className="w-60 h-72 relative right-5 rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
