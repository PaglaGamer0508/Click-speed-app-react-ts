import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { GrPowerReset } from "react-icons/gr";
import speedRanks from "./speedRanks";
import "./slyle.scss";

interface Speed {
  clickSpeedRank: number;
}

const Alert: React.FC<Speed> = ({ clickSpeedRank }) => {
  const modalContext = useContext(ModalContext);
  const { showModal } = modalContext || {};

  const [rank, setRank] = useState<undefined | number>(undefined);

  const defineRank = (speed: number) => {
    if (speed >= 0 && speed < 2) {
      return 0;
    }
    if (speed >= 3 && speed < 7) {
      return 1;
    }
    if (speed >= 7 && speed < 10) {
      return 2;
    }
    if (speed >= 10 && speed < 15) {
      return 3;
    }
    if (speed >= 15) {
      return 4;
    }
  };

  useEffect(() => {
    defineRank(clickSpeedRank);
    console.log(rank);
  }, []);

  return (
    <div style={showModal ? { display: "grid" } : {}} id="alert-scree">
      <div id="alert-box">
        <div className="rank-section" id="rank-section-up">
          <img src={""} alt="" />
          <span id="tag"></span>
        </div>
        <div className="rank-section" id="rank-section-down">
          <span id="next-rank-text">Click faster to reach the {}</span>
          <img src="" alt="" />
          <button>
            Retry
            <GrPowerReset size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
