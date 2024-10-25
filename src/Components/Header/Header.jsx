import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Header-Main">
        <div className="Header-Second">
          <div className="Header-Third">
            <h2>Beginnen Sie Ihre Verkaufsreise 👋 </h2>
            <p>
              Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.
            </p>
          </div>
          <div className="Header-Third">
            <FaQuestionCircle />
            <p>Reload</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
