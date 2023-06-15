import React from "react";
import ClickSpeed from "./components/click-speed/ClickSpeed";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./components/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ClickSpeed />} index />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
