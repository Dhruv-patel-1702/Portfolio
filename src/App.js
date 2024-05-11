import React from "react";
import "./index.css";
import Navbar from "./components/navbar.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Skills from "./pages/skills.js";
import Work from "./pages/work.js";
import Contact from "./pages/contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div >
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
