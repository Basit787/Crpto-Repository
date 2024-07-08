import React from "react";
import CryptoComponent from "../../components/crptoComponent/CryptoComponent";
import Rewards from "../../components/rewards/Rewards";
import "./Crypto.css";
import RewardComponent from "./RewardComponent";

const Crypto = () => {
  const cryptoData = {
    task1: {
      img: require("../../assets/mainScreenImg1.png"),
      quests: 6,
      heading: "Basics of Crypto",
      description: "The safest and easiest place to start your crypto journey!",
      xp: 1490,
      listData: [
        {
          img: require("../../assets/mainScreenListImg1.png"),
          text: "#1: But what is crypto and...",
          tasks: 11,
        },
        {
          img: require("../../assets/mainScreenListImg2.jpg"),
          text: "#2: Setting up your own web3...",
          tasks: 8,
        },
        {
          img: require("../../assets/mainScreenListImg3.jpg"),
          text: "#3: What the heck is a...",
          tasks: 8,
        },
        {
          img: require("../../assets/mainScreenListImg4.jpg"),
          text: "#4: Swapping and bridging...",
          tasks: 10,
        },
        {
          img: require("../../assets/mainScreenListImg5.jpg"),
          text: "#5: NFTs and why they’re...",
          tasks: 6,
        },
        {
          img: require("../../assets/mainScreenListImg6.jpg"),
          text: "#6: Doing quests and winni...",
          tasks: 8,
        },
      ],
    },
    reward1: {
      img: require("../../assets/reward1.png"),
      text: "Intract Certified: Learner NFT",
      description: "Your crypto black-belt certificate",
    },
    task2: {
      img: require("../../assets/cryptotask2.png"),
      quests: 4,
      heading: "Introduction to Airdrops",
      description: "Your best bet to make it big in crypto!",
      xp: 1040,
      listData: [
        {
          img: require("../../assets/cryptotask2list1.jpg"),
          text: "#1: What are airdrops, and...",
          tasks: 7,
        },
        {
          img: require("../../assets/cryptotask2list2.jpg"),
          text: "#2: Types of airdrops",
          tasks: 10,
        },
        {
          img: require("../../assets/cryptotask2list3.png"),
          text: "#3: How to earn huge $$$...",
          tasks: 11,
        },
        {
          img: require("../../assets/cryptotask2list4.jpg"),
          text: "#4: Things to keep in mind!",
          tasks: 10,
        },
      ],
    },
    reward2: {
      img: require("../../assets/rewars2.png"),
      text: "Intract Certified: Earner NFT",
      description: "Your proof of airdrop expertise",
    },
  };
  return (
    <div className="crypto-container">
      <div className="crypto-section">
        <div>
          <CryptoComponent data={cryptoData.task1} />
        </div>
        <div>
          <Rewards reward={cryptoData.reward1} />
        </div>
      </div>
      <div className="crypto-section next">
        <div>
          <Rewards reward={cryptoData.reward2} />
        </div>
        <div>
          <CryptoComponent data={cryptoData.task2} />
        </div>
      </div>
      <RewardComponent />
    </div>
  );
};

export default Crypto;
