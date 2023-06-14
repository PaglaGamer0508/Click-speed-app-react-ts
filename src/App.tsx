import React from "react";
import ClickSpeed from "./components/click-speed/ClickSpeed";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div id="container">
        <ClickSpeed />
      </div>
    </>
  );
};

export default App;
