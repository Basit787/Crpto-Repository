import React from "react";
import "./CryptoDashboard.css";
import reelVideo from "../../assets/reel-video-ee824737.svg";

const CryptoDashboard = () => {
  const cards = [
    {
      image: require("../../assets/card1.png"),
      title: "How to plan your retirement with crypto?",
    },
    {
      image: require("../../assets/card2.png"),
      title: "Why are there limited Bitcoin?",
    },
    {
      image: require("../../assets/card3.png"),
      title: "How does Uniswap actually work?",
    },
    {
      image: require("../../assets/card4.png"),
      title: "How to spot crypto projects to invest in?",
    },
  ];
  return (
    <div className="cryptoDashboard">
      <div className="cryptoDashboardView">
        <h1>Top Crypto Creators and Projects to Follow</h1>
        <p>Answers to your crypto doubts, straight from the experts</p>
        <div className="cryptoDashboard-card-container">
          {cards.map((card, index) => (
            <div
              key={index}
              className="cryptoDashboard-card"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="cryptoDashboard-icon">
                <img src={reelVideo} />
              </div>
              <p>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default CryptoDashboard;
