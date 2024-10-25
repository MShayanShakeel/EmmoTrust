import React from "react";
import "./Banner.css";
import FirstPortion from "../../../../images/FirstPortion.png";
import SecondPortion from "../../../../images/SecondPortion.png";
import ThirdPortion from "../../../../images/ThirdPortion.png";
import FifthPortion from "../../../../images/FifthPortion.png";
import NinthPortion from "../../../../images/NinthPortion.png";
import EightPortion from "../../../../images/EightPortion.png";

const Banner = () => {
  return (
    <div className="grid-container">
      <div className="grid-item First-Portion">
        <img src={FirstPortion} alt="FirstPortion" />
      </div>
      <div className="grid-item Second-Portion">
        {" "}
        <img src={SecondPortion} alt="SecondPortion" />
      </div>
      <div className="grid-item Third-Portion">
        {" "}
        <img src={ThirdPortion} alt="ThirdPortion" />
      </div>
      <div className="grid-item Fouth-Portion">
        <h2>Insert Textblock</h2>
      </div>
      <div className="grid-item Sixth-Portion">
        <h1>Insert Random Video</h1>
        <button>NESTING</button>
      </div>
      <div className="grid-item Fifth-Portion">
        <img src={FifthPortion} alt="FifthPortion" />
      </div>
      <div className="grid-item Nineth-Portion">
        <img src={NinthPortion} alt="NinthPortion" />
      </div>
      <div className="grid-item Seven-Portion">
        <h1>Insert Random Quote</h1>
      </div>
      <div className="grid-item Eight-Portion">
        <img src={EightPortion} alt="EightPortion" />
      </div>
    </div>
  );
};

export default Banner;
