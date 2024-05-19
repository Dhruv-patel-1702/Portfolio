import React from 'react'
import {Link} from 'react-router-dom'

const about = () => {
  return (
    <>
      <div
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
          className="flex items-center justify-center gap-x-24"
          style={{ background: "#1e1e1e", height: "100vh" }}
        >
          <div>
            <img
              className="w-80 h-80"
              src="./assets/AvatarAndIcons-removebg-preview.png"
              alt="About img"
            />
            <h1
              className="text-3xl relative left-14 top-2"
              style={{ color: "#7e74f1"}}
            >
              Dhruv <label className='text-white'>Patel</label>
            </h1>
          </div>

          <div className="w-2/5 relative top-5">
            <h1 className="text-3xl mb-6" style={{ color: "#7e74f1" }}>
              ~ About me
            </h1>
            <p className="text-white text-xl leading-8">
              I'm Dhruv Patel, a versatile full-stack developer adept at
              creating dynamic and responsive websites. With a comprehensive
              skill set spanning both front-end and back-end technologies, I'm
              committed to delivering robust solutions tailored to meet client
              needs. From crafting intuitive user interfaces with HTML, CSS, and
              JavaScript to architecting scalable server-side systems with
              Express.js, I thrive on the challenges of full-stack development.
              Let's collaborate and build something exceptional together!
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
        </div>
      </div>
    </>
  );
}

export default about