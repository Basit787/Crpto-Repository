import React from "react";
import "./Rewards.css";
import { FaCheck, FaLock } from "react-icons/fa";

const Rewards = (props) => {
  const data = props.reward;
  return (
    <div className="rewards-container">
      <div className="rewards-completed">
        <FaCheck />
      </div>
      <div>
        <img src={data.img} className="rewards-img" />
        <div className="rewards-lock-div">
          <div className="rewards-lock">
            <FaLock />
          </div>
        </div>
      </div>
      <div className="rewards-textData">
        <h2>{data.text}</h2>
        <p>{data.description}</p>
      </div>
      <div className="rewards-claimBtn">claim</div>
    </div>
  );
};

export default Rewards;
