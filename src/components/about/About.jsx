import React from "react";
import "./about.css";
import Image from "../../assests/studio.png";
import AboutBox from "./AboutBox";

const PDF_FILE_URL = '../../../build/Mahdis-Rezaei-Tamijani-Resume.pdf'
const About = () => {
  const downloadFileAtURL= (url)=>{
       fetch(url).then(response=>response.blob()).then(blob=>{
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = 'Mahdis Rezaei Tamijani-Resume.pdf';
       const aTag = document.createElement('a');
       aTag.href = blobURL;
       aTag.setAttribute('download',fileName);
       document.body.appendChild(aTag);
       aTag.click();
       aTag.remove();
       })
       
  }
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" width={400} />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              🚀 As an Associate of Science in Computer Science, I've honed my
              skills in algorithm design, web development, and database
              management during my tenure at Langara College.
            </p>
            <button className="btn" onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>
              Download CV
            </button>

          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  Data Structures and Algorithm, Problem solving
                </h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage data__structures"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">DataBases</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage database"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
