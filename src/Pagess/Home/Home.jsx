import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Header/Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="Home-Main">
        <div className="Home-Main-Sidebar">
          <Sidebar />
        </div>
        <div className="Home-Main-Header-Banner">
          <Header />
          <Banner />
        </div>
      </div>
    </>
  );
};

export default Home;
