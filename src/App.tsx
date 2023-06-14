import React, { useState, useEffect } from "react";
import ClickSpeed from "./components/click-speed/ClickSpeed";
import Alert from "./components/alert/Alert";
import "./App.css";
import { ModalProvider } from "./components/context/ModalContext";
const App: React.FC = () => {
  const [clickSpeed, setClickSpeed] = useState(0);

  const handleSpeedRank = (speed: number) => {
    setClickSpeed(speed);
  };

  return (
    <ModalProvider>
      <div id="container">
        <ClickSpeed clickSpeedRank={handleSpeedRank} />
        <Alert clickSpeedRank={clickSpeed} />
      </div>
    </ModalProvider>
  );
};

export default App;
