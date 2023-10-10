import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projects</h2>

      <div className="work__filters">
        <span className="work__item">
          Full Calendar and Schedular React Web Application (Using React,
          JavaScript, Local Storage,Rest-ful APIs, MongoDB)
        </span>
        <span className="work__item">
          To-Do List Web Application (Using React, JavaScript, Redux, Local
          Storage)
        </span>
        <span className="work__item">
          Database Web Application for Real State Management (Using MySQL, PHP,
          HTML, CSS)
        </span>
        <span className="work__item">
          Fitness Goal Tracker Web Application (Using Agile software
          development)
        </span>
      </div>

      <div className="work__container grid"></div>
    </section>
  );
};

export default Portfolio;
