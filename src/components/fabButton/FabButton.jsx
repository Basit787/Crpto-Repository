import React from "react";
import "./FabButton.css";
import fabIcon from "../../assets/message.svg";

const FabButton = () => {
  return (
    <div className="fab-button">
      <img src={fabIcon} />
    </div>
  );
};

export default FabButton;
