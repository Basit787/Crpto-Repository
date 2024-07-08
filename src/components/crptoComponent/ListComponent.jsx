import React from "react";
import img from "../../assets/mainScreenListImg1.png";
import "./ListComponent.css";
import { FaCheck } from "react-icons/fa";

const ListComponent = (props) => {
  const data = props.list;
  return (
    <div className="listComponent-mainCard">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div className="listComponent-container" key={index}>
            <img src={item.img} className="listcomponent-img" />
            <div className="listcomponent-textData">
              <h2>{item.text}</h2>
              <div className="dashed-separator" />
              <div className="listcomponentData-undertext">
                <h3>{item.tasks} tasks</h3>
                <div>
                  <div className="listcomponent-progressbar">
                    <div className="listcomponent-progress" />
                  </div>
                </div>
                <div className="listComponent-complete">
                  <FaCheck />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No data found</h1>
      )}
    </div>
  );
};

export default ListComponent;
