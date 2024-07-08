import React, { useState } from "react";
import img from "../../assets/mainScreenImg1.png";
import ListComponent from "./ListComponent";
import xpIcon from "../../assets/xp-icon.svg";
import "./CryptoComponent.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const CryptoComponent = (props) => {
  const [openList, setOpenList] = useState(false);

  const data = props.data;
  return (
    <div className="cryptoComponent-container">
      <div
        className="cryptoComponent-card"
        onClick={() => setOpenList(!openList)}
      >
        <div
          style={{ backgroundImage: `url(${data.img})` }}
          className="cryptoComponent-image"
        >
          <h2>{data.quests} Quests</h2>
        </div>

        <div className="cryptoComponent-textData">
          <div className="cryptoComponent-icon">
            {openList ? (
              <FaCaretUp className="icon" />
            ) : (
              <FaCaretDown className="icon" />
            )}
          </div>
          <div>
            <h2>{data.heading}</h2>
            <p>{data.description}</p>
            <div className="dashed-separator" />
            <div className="cryptoComponent-xpData">
              <img src={xpIcon} alt="xpIcon" />
              <p>{data.xp} Xps</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {openList && (
          <div className="cryptoComponent-lists">
            <ListComponent list={data.listData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoComponent;
