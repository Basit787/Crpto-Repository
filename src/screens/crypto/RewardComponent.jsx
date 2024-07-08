import React, { useState, useEffect } from "react";
import "./RewardComponent.css";
import discordImg from "../../assets/discordimg.svg";
import { FaCheck } from "react-icons/fa";

const RewardComponent = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-09") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="rewards-card">
      <div className="rewarsMainComponent">
        <div className="rewardsComponent-heading">
          <p>Reward unlocks in</p>
          <hr className="dashed-separator" />
        </div>
        <div className="reward-container">
          <div className="timer">
            <h2>Reward unlocks in</h2>
            <div>
              <div className="countdown">
                {Object.keys(timeLeft).map((interval, index) => (
                  <div className="countdownValue">
                    {timeLeft[interval]}
                    <div>{interval}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rewardsComponent-moreInfo">
        <div className="rewardsComponent-moreInfoImg" />
        <div className="extramoreInfo">
          <div>
            <p>Exclusive Community</p>
          </div>
          <div className="discordtext">
            <img src={discordImg} />
            <p>Earndrop</p>
          </div>
        </div>
        <hr className="rewards-separator" />
        <div>
          <div className="rewardcompletedseparator">
            <p>Complete all Essential quests</p>
            <div className="rewardcomponent-completedicon">
              <FaCheck />
            </div>
          </div>
          <div className="rewardcompletedseparator">
            <p>Complete at least 1 Alpha Hub quest today</p>
            <div className="rewardcomponent-completedicon">
              <FaCheck />
            </div>
          </div>
        </div>
        <button className="rewardcomponentclaim-button">Claim Now</button>
      </div>
    </div>
  );
};

export default RewardComponent;
