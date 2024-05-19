import React from "react";

const Service = () => {
  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen text-white"
        style={{
          fontFamily: "Inconsolata, monospace",
        }}
      >
        <div>
          <div className="text-center mb-8 text-white">
            <p className="text-2xl">~ SERVICES</p>
            <h1 className="text-xl relative left-2 top-1">Specialized in</h1>
          </div>
          <div className="flex justify-center items-center space-x-12 mt-14">
            <div
              className="card w-72 h-64 text-center p-4 rounded-xl pt-8 text-black border-4 shadow-lg shadow-slate-600"
              style={{ background: "#ffffff" }}
            >
              <img src="./assets/React.png" alt="" className="mx-auto mb-4" />
              <h1
                className="mt-6 font-semibold text-xl tracking-tighter"
                style={{ color: "#1e1e1e" }}
              >
                Web Development
              </h1>
              <p className="mt-5  text-sm">
                Create and maintain your websites and also take care of its
                performance and traffic capacity.
              </p>
            </div>

            <div
              className="card w-72 h-64 text-center p-4 rounded-xl pt-8 text-black border-4 shadow-lg shadow-slate-600"
              style={{ background: "#ffffff" }}
            >
              <img src="./assets/React.png" alt="" className="mx-auto mb-4" />
              <h1
                className="mt-6 font-semibold text-xl tracking-tighter"
                style={{ color: "#1e1e1e" }}
              >
                UI/UX Design
              </h1>
              <p className="mt-5  text-sm">
                Turn what you have in mind of a digital product into reality.
                For any platform you consider.
              </p>
            </div>

            <div
              className="card w-72 h-64 text-center p-4 rounded-xl pt-8 text-black border-4 shadow-lg shadow-slate-600"
              style={{ background: "#ffffff" }}
            >
              <img src="./assets/React.png" alt="" className="mx-auto mb-4" />
              <h1
                className="mt-6 font-semibold text-xl tracking-tighter"
                style={{ color: "#1e1e1e" }}
              >
                Web Development
              </h1>
              <p className="mt-5  text-sm">
                Create and maintain your websites and also take care of its
                performance and traffic capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
