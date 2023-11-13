import React from "react";


const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">4</h3>
                <span className="about__subtitle"> School Project </span>
            </div>
        </div>


        <div className="about__box">
            <i className="about__icon icon-graduation"></i>

            <div>
                <h3 className="about__title">77</h3>
                <span className="about__subtitle">Credits Completed at School</span>
            </div>
        </div>


        {/* <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">42</h3>
                <span className="about__subtitle">clients</span>
            </div>
        </div> */}
    </div>
  );
};

export default AboutBox;
