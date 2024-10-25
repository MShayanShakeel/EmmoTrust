import React, { useState } from "react";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import Logo from "../../../images/Logo.png";
import Profile from "../../../images/Profile.png";
import GoogleImage from "../../../images/GoogleImage.jpg";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const listItems = [
    {
      title: "Immobilienlexikon",
      description: "Immobilienwissen für alle Fälle.",
    },
    {
      title: "Preisschätzung",
      description: "Den Wert Ihres Hauses schätzen lassen.",
    },
    {
      title: "Checklisten",
      description: "Praktische Checklisten für jeden Schritt.",
    },
    {
      title: "Ratgeber",
      description: "Immobilien-Expertenrat für Eigentümer.",
    },
    {
      title: "Mandatsnavigator",
      description: "Verständlich zum Verkaufsabschluss.",
    },
    {
      title: "Wohntraumfinder",
      description: "Zum Traumheim mit KI-Unterstützung.",
    },
  ];
  return (
    <>
      <div className="Sidebar-Main">
        <div>
          <div className="Header-Icon">
            <HiMiniWrenchScrewdriver /> <p>NACHTMODUS</p>
          </div>
          <div className="Header-Logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="List-Main">
            <ul>
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="List-Content">
                    <span className="List-content-Second">
                      <HiMiniWrenchScrewdriver />{" "}
                      <span>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </span>
                    </span>
                    <p>KI</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* temp End  */}
          <div>
            <div className="Profile-Main">
              <img src={Profile} alt="Profile" />
              <h2>Immotrust AG </h2>
              <h3>Vertrauensvolle</h3>
              <p>Immobilienberatung seit 2008.</p>
              <button>Carlos Kuk-Eigentumer</button>
            </div>
            <div className="List-Content">
              <span className="rating-icnos">
                <img src={GoogleImage} alt="GoogleImage" /> <p>Bewertungen</p>
              </span>
              <span className="rating-icnos">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
            <p style={{ textAlign: "center" }}>
              4,6 VON BASIEREND AUF 245 BEWERTUNGEN
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
