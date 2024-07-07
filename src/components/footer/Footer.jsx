import React from "react";
import "./Footer.css"; // Assuming you have some CSS to style your components
import { FaTwitter, FaDiscord, FaTelegram, FaSpotify } from "react-icons/fa";

const Footer = () => {
  const footerData = {
    footerHeading: "intract.",
    footerDescription:
      "We are your personal guide for exploring web3 projects & earning 100x rewards",
    socialLinks: [
      {
        heading: "Intract",
        data: ["Explore Quests", "Communities", "Alpha Hub"],
      },
      {
        heading: "EARN",
        data: ["Refer & Earn", "Leaderboard", "Achievements"],
      },
      {
        heading: "ABOUT",
        data: [
          "Product Roadmap",
          "Affiliate Program",
          "Sign up Program",
          "Growth Community",
          "Blogs",
        ],
      },
      {
        heading: "SUPPORT",
        data: [
          "Help Center",
          "Create your quest",
          "Terms of Service",
          "Privacy Policy",
          "Community Guidelines",
        ],
      },
    ],
    disclaimer: {
      disclaimerText: "Discalimer",
      disclaimerDescription:
        "Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.",
    },
    socialIcon: [
      {
        name: <FaTwitter />,
        color: "rgb(51, 81, 253)",
      },
      {
        name: <FaDiscord />,
        color: "rgb(42, 157, 177)",
      },
      {
        name: <FaTelegram />,
        color: "rgb(0, 119, 255)",
      },
      {
        name: <FaSpotify />,
        color: "rgb(0, 255, 47)",
      },
    ],
  };
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <div className="Footer-logo">
          <h2>{footerData.footerHeading}</h2>
          <p>{footerData.footerDescription}</p>
        </div>
        <div className="Footer-links">
          {footerData.socialLinks.map((item, index) => (
            <div className="Footer-column" key={index}>
              <h3>{item.heading}</h3>
              <ul>
                {item.data.map((data, index) => (
                  <li key={index}>
                    <a href={`#${data}`}>{data}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="separator" />
      <div className="Footer-disclaimer">
        <p>
          <span>{footerData.disclaimer.disclaimerText}</span>:
          {footerData.disclaimer.disclaimerDescription}
        </p>
      </div>
      <hr className="separator" />
      <div className="Footer-created-by">
        <p>
          CREATED BY <a href="https://intract.com">INTRACT</a>
        </p>
        <div className="Footer-social-icons">
          {footerData.socialIcon.map((icons, index) => (
            <div className="social-icon">
              <a
                href={`#${icons}`}
                key={index}
                style={{
                  color: icons.color,
                  margin: 10,
                  fontSize: 20,
                  backgroundColor: "rgba(98, 98, 98, 0.599)",
                  padding: 8,
                  borderRadius: 4,
                }}
              >
                {icons.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
