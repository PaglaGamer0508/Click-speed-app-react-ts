import React from "react";
import ClickSpeed from "./components/click-speed/ClickSpeed";
// import Alert from "./components/alert/Alert";
import "./App.css";
const App: React.FC = () => {
  return (
    <div id="container">
      <ClickSpeed />
      {/* <Alert clickSpeedRank={clickSpeed} /> */}
    </div>
  );
};

export default App;
