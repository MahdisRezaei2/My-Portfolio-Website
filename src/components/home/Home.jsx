import React from "react";
import "./home.css";
import Me from "../../assests/profileMe.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} className="home__img" ></img>
        <h1 className="home__name">Mahdis Rezaei Tamijani</h1>
        <span className="home__education">
          Recently Graduated with Associate degree in Computer Sience from
          Langara College
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown/>
      </div>
    </section>
  );
};

export default Home;
