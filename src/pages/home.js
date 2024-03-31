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
          fontVariationSettings: "wdth 100",
        }}
      >
        <div
          className="flex items-center justify-center gap-x-60"
          style={{ background: "#1e1e1e", height: "100vh" }}
        >
          <div className="text-white">
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
            <p className="mt-5 text-xl -tracking-tight space-y-2 ">
              I'm a proficient frontend developer with expertise in crafting
              <br />
              dynamic websites using HTML, CSS, and JavaScript. Committed to
              <br />
              clean code and collaboration, I'm driven by challenges and
              <br />
              <p> dedicated to delivering top-notch results.</p>
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
            <div
              className="box2 h-72 w-64 rounded-2xl  -rotate-12"
              style={{ background: "#7e74f1" }}
            >
              <div
                className="box2 h-72 w-64 rounded-2xl rotate-12"
                style={{ background: "#69b2f6", opacity: 0.7 }}
              >
                <img src="./assets/Avatar.svg" alt="homeimage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
