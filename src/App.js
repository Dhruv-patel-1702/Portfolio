import React from "react";
import "./index.css";
import Navbar from "./components/navbar.js";
import Home from "./pages/home.js";
import Serive from "./pages/service.js";
import About from "./pages/about.js";
import Skills from "./pages/skills.js";
import Project from "./pages/project.js";

import Contact from "./pages/contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Serive />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
