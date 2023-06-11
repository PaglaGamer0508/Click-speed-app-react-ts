import React from "react";
import "./style.scss";

const ClickSpeed: React.FC = () => {
  return (
    <div id="click-speed-container">
      {/* Time Section */}
      <div id="time-section">
        <button className="times">1 sec</button>
        <button className="times">5 sec</button>
        <button className="times">10 sec</button>
        <button className="times">15 sec</button>
        <button className="times">20 sec</button>
        <button className="times">30 sec</button>
      </div>

      {/* Time Remaining Section */}
      <div id="time-remaining-section">
        <div className="time-remaining-section-label">Time Remaining</div>
        <input type="text" id="time-remaining" disabled value={10} />
        <div className="time-remaining-section-label">seconds</div>
      </div>

      {/* Click Section */}
      <div id="click-section">
        <div className="click-elements" id="click-per-second">
          <span className="">Clicks per second</span>
          <div id="click-input-elements">
            <input type="text" disabled value={10} />
            <div className="label">cps</div>
          </div>
        </div>

        <div className="click-elements" id="total-clicks">
          <span className="">Clicks</span>
          <input type="text" disabled value={10} />
        </div>
      </div>

      {/* Button Section */}
      <div id="btn-section">
        <span>Click the + button to start:</span>
        <button id="plus-btn">+</button>
        <button id="reset-btn">X</button>
      </div>
    </div>
  );
};

export default ClickSpeed;
