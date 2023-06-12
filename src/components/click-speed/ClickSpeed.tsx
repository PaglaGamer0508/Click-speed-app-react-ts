import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import { GrPowerReset } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";

const ClickSpeed: React.FC = () => {
  const [click, setClick] = useState(0);
  const [timer, setTimer] = useState(5);
  const [clickPerSec, setClickPerSec] = useState(0.0);
  const [favTimer, setFavTimer] = useState(5);
  const [highScore, setHighScore] = useState(0);
  const [disablePlusButton, setDisablePlusButton] = useState(false);
  const timeOutRef = useRef<number | undefined>();
  const intervalRef = useRef<number | undefined>();

  // ******************* All the useEffect goes here *************************

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
      setHighScore(parseFloat(storedHighScore));
    } else {
      localStorage.setItem("highScore", highScore.toString());
    }
    setFavTimer(timer);
  }, []);

  useEffect(() => {
    setClickPerSec(favTimer - timer !== 0 ? click / (favTimer - timer) : 0);
  }, [timer, click, favTimer]);

  useEffect(() => {
    if (!timer) {
      timeOutRef.current = setTimeout(() => {
        setDisablePlusButton(true);
        clearTimeout(timeOutRef.current);
        if (clickPerSec > highScore) {
          setHighScore(clickPerSec);
          localStorage.setItem("highScore", clickPerSec.toString());
        }
        setClickPerSec(clickPerSec);
      }, timer * 1000);

      setClickPerSec(click / favTimer);
    }
  }, [timer]);

  // ***************** All the functions goes below here **********************
  // This fuction is for preventing space bar click
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  // This is for starting the timer
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(intervalRef.current);
          return prevTimer;
        }
      });
    }, 1000);
  };

  const HandlePlusClick = () => {
    if (click === 0) {
      startTimer();
    }
    setClick((prevClick) => prevClick + 1);
  };

  const handleTimeClick = (seconds: number) => {
    setTimer(seconds);
    setFavTimer(seconds);
    setClick(0);
    clearInterval(intervalRef.current);
  };

  const handleResetClick = () => {
    setClick(0);
    setClickPerSec(0);
    setDisablePlusButton(false);
    setTimer(favTimer);
    clearInterval(intervalRef.current);
  };

  return (
    <div id="click-speed-container">
      {/* High Score section */}
      <div id="hight-score-section">
        <h3>High Score: {highScore} cps</h3>
      </div>

      {/* Time Section */}
      <div id="time-section">
        <button className="times" onClick={() => handleTimeClick(1)}>
          1 sec
        </button>
        <button className="times" onClick={() => handleTimeClick(5)}>
          5 sec
        </button>
        <button className="times" onClick={() => handleTimeClick(10)}>
          10 sec
        </button>
        <button className="times" onClick={() => handleTimeClick(15)}>
          15 sec
        </button>
        <button className="times" onClick={() => handleTimeClick(20)}>
          20 sec
        </button>
        <button className="times" onClick={() => handleTimeClick(30)}>
          30 sec
        </button>
      </div>

      {/* Time Remaining Section */}
      <div id="time-remaining-section">
        <div className="time-remaining-section-label">Time Remaining</div>
        <input type="text" id="time-remaining" disabled value={timer} />
        <div className="time-remaining-section-label">seconds</div>
      </div>

      {/* Click Section */}
      <div id="click-section">
        <div className="click-elements" id="click-per-second">
          <span className="">Clicks per second</span>
          <div id="click-input-elements">
            <input type="text" disabled value={clickPerSec.toFixed(2)} />
            <div className="label">cps</div>
          </div>
        </div>

        <div className="click-elements" id="total-clicks">
          <span className="">Clicks</span>
          <input type="text" disabled value={click} />
        </div>
      </div>

      {/* Button Section */}
      <div id="btn-section">
        <span>Click the + button to start:</span>
        <button
          id="plus-btn"
          onClick={HandlePlusClick}
          tabIndex={-1}
          disabled={disablePlusButton}
          onKeyDown={handleKeyDown}
          style={
            disablePlusButton ? { pointerEvents: "none", opacity: ".5" } : {}
          }
        >
          <AiOutlinePlus size={35} />
        </button>

        <button id="reset-btn" onClick={handleResetClick}>
          <GrPowerReset size={35} />
        </button>
      </div>
    </div>
  );
};

export default ClickSpeed;
