import React, { useState } from "react";
import ClickSpeed from "./components/click-speed/ClickSpeed";
import "./App.css";
import Alert from "./components/alert/Alert";
import { ModalProvider } from "./components/context/ModalContext";
import MyCountdownComponent from "./components/click-speed/test";

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
        {/* <MyCountdownComponent /> */}
      </div>
    </ModalProvider>
  );
};

export default App;
