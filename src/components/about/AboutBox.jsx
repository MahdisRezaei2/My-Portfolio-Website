import React from "react";


const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Project Completed</span>
            </div>
        </div>


        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">5670</h3>
                <span className="about__subtitle">Cup of coffee</span>
            </div>
        </div>


        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">42</h3>
                <span className="about__subtitle">clients</span>
            </div>
        </div>
    </div>
  );
};

export default AboutBox;
