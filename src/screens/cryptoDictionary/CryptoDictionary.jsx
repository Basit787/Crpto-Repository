import React from "react";
import "./CryptoDictionary.css";
import cryptoDictionaryImage from "../../assets/cryptoDictionary.svg";
import { FaBookOpen } from "react-icons/fa";

const CryptoDictionary = () => {
  return (
    <div className="crypto-dictionary-container">
      <h1 className="crypto-dictionary-title">Crypto Dictionary</h1>
      <p className="crypto-dictionary-subtitle">
        Your one-stop to catch up on all crypto terms
      </p>
      <div className="crypto-dictionary-image-container">
        <img
          src={cryptoDictionaryImage}
          alt="Crypto Dictionary"
          className="crypto-dictionary-image"
        />
        <div className="crypto-dictionary-text">
          <h2>Web3 + Degen Glossary</h2>
          <p>Your own crypto dictionary</p>
        </div>
        <div className="crypto-dictionary-icon">
          <FaBookOpen />
        </div>
      </div>
    </div>
  );
};

export default CryptoDictionary;
