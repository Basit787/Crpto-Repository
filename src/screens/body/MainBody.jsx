import React from "react";
import "./MainBody.css";
import logo from "../../assets/academy-animated-logo.gif";

const MainBody = () => {
  return (
    <div className="body-div">
      <div className="main-body-text-data">
        <img src={logo} alt="logo" className="body-logo" />
        <p className="body-text">
          <span className="body-text-span">Intract users</span> have together
          made more than <span className="body-text-span">$100 million</span>
          in web3. Join them and{" "}
          <span className="body-text-span">learn how to earn crypto!</span>
              </p>
              <button className="body-btn">Get Started</button>
      </div>
    </div>
  );
};

export default MainBody;
