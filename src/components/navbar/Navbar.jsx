import React from "react";
import "./Navbar.css";
import navSvg from "../../assets/broadcast_or-04af786c.svg";
import logoSvg from "../../assets/intract_text.svg";

const Navbar = () => {
  const navMenuItem = [
    {
      name: "Compass",
      link: "#compass",
    },
    {
      name: "Explore",
      link: "#explore",
    },
    {
      name: "Academy",
      link: "#academy",
    },
    {
      name: "NFTs",
      link: "#nfts",
    },
    {
      name: "For Projects",
      link: "#for-projects",
    },
  ];
  return (
    <header className="App-header">
      <nav className="App-nav">
        <img src={logoSvg} alt="logo" />
        <ul className="App-nav-links">
          {navMenuItem.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="App-nav-actions">
          <input
            type="text"
            placeholder="Search for ecosystems, trending quests etc."
            className="search-bar"
          />
          <div className="svgDiv">
            <img src={navSvg} alt="navSvg" className="navSvg" />
          </div>
          <button className="App-signin-btn">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
