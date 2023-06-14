import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import speedRanks from "./speedRanks";
import "./alert.scss";
import { GrClose } from "react-icons/gr";

interface Speed {
  clickSpeedRank: number;
}

const Alert: React.FC<Speed> = ({ clickSpeedRank }) => {
  const modalContext = useContext(ModalContext);
  const { showModal, toggleModal } = modalContext || {};

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
  };

  useEffect(() => {
    const useRank = defineRank(clickSpeedRank);
    console.log(useRank);
    setRank(useRank);
    console.log(rank);
  }, [clickSpeedRank]);

  return (
    <div style={showModal ? { display: "grid" } : {}} id="alert-screen">
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
            Close <GrClose size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
