import React from "react";
import "./App.css";
import MainBody from "./screens/body/MainBody";
import FabButton from "./components/fabButton/FabButton";
import Footer from "./components/footer/Footer";
import CryptoDictionary from "./screens/cryptoDictionary/CryptoDictionary";
import CryptoDashboard from "./screens/cryptoDashboard/CryptoDashboard";
import EssentialAlphaButton from "./components/essentialButton/EssentialAlphaButton";
import Navbar from "./components/navbar/Navbar";
import Crypto from "./screens/crypto/Crypto";

const App = () => {
  return (
    <>
      <>
        <Navbar />
        <MainBody />
        <Crypto />
        <CryptoDashboard />
        <CryptoDictionary />
        <EssentialAlphaButton />
        <hr className="separator" />
      </>
      <Footer />
      <FabButton />
    </>
  );
};

export default App;
