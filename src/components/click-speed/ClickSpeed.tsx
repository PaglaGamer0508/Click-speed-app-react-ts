import React from "react";
import "./clickSpeed.scss"

const ClickSpeed: React.FC = () => {
  return (
    <div className="container">
      <div id="time-section">
        <div className="times">1 sec</div>
        <div className="times">5 sec</div>
        <div className="times">10 sec</div>
        <div className="times">15 sec</div>
        <div className="times">20 sec</div>
        <div className="times">30 sec</div>
      </div>
      <div id="time-remaining-section">
        <input type="text" id="time-remaining" disabled />
        <div className="label"></div>
      </div>
      <div id="click-setion">
        <div className="click-elements">
          <input type="text" id="click-per-second" disabled />
          <div className="label"></div>
        </div>
        <div className="click-elements">
          <input type="text" id="total-clicks" disabled />
        </div>
      </div>
      <div id="btn-section">
        <button id="add-btn">+</button>
        <button id="restart-btn">X</button>
      </div>
    </div>
  );
};

export default ClickSpeed;
