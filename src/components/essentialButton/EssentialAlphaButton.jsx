import React, { useState } from "react";
import "./EssentialAlpha.css";

const EssentialAlphaButton = () => {
  const [isEssentials, setIsEssentials] = useState(true);

  const toggle = () => {
    setIsEssentials(!isEssentials);
  };
  return (
    <div className="EssentialAlphaButton">
      <div className="EssentialAlphaButton-container">
        <div className="toggle-switch" onClick={toggle}>
          <div className={`toggle-option ${isEssentials && "active"}`}>
            Essentials
          </div>
          <div className={`toggle-option ${!isEssentials && "active"}`}>
            Alpha Hub
          </div>
        </div>
      </div>
      <div className="emptyDiv" />
    </div>
  );
};

export default EssentialAlphaButton;
