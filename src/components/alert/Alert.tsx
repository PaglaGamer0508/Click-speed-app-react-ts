import React, { useEffect, useState } from "react";
import speedRanks from "./speedRanks";
import "./alert.scss";
import { GrPowerReset } from "react-icons/gr";

interface Speed {
  clickSpeedRank: number;
  toggleModal: () => void;
  handleResetClick: () => void;
}

const Alert: React.FC<Speed> = ({
  toggleModal,
  clickSpeedRank,
  handleResetClick,
}) => {
  const [rank, setRank] = useState<number>(0);

  const defineRank = (speed: number) => {
    if (speed >= 0 && speed < 6) {
      return 0;
    } else if (speed >= 6 && speed < 9) {
      return 1;
    } else if (speed >= 9 && speed < 12) {
      return 2;
    } else if (speed >= 12 && speed < 15) {
      return 3;
    } else if (speed >= 15) {
      return 4;
    }
    // Return a default rank if none of the conditions are met
    return 0;
  };

  const hanldeResetClick = () => {
    if (toggleModal) {
      toggleModal();
    }
    setRank(0);
    handleResetClick();
  };

  useEffect(() => {
    const useRank = defineRank(clickSpeedRank);
    setRank(useRank);
  }, []);

  return (
    <div id="alert-screen">
      <div id="alert-box">
        <div className="rank-section" id="rank-section-up">
          <div className="image">
            <img src={speedRanks[rank].image} alt="" />
          </div>
          <div id="description">
            <div>you click speed is: {clickSpeedRank} cps </div>
            <div>You are </div>
            <div>
              <span id={rank !== 0 ? "name" : "human"}>
                {speedRanks[rank].name}
              </span>
            </div>
          </div>
        </div>

        <hr />

        <div className="rank-section" id="rank-section-down">
          <div id="next-rank-text">
            {rank < 4 ? "Click faster to be" : ""}{" "}
            <span id="next-name">{speedRanks[rank + 1].name}</span>
          </div>
          <div className="image">
            <img src={speedRanks[rank + 1].image} alt="" />
          </div>
          <button onClick={hanldeResetClick}>
            Play Again <GrPowerReset size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
