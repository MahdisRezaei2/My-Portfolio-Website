import React from "react";
import "./skills.css";
import Image1 from "../../assests/problem-solving-2.png";
import Image2 from "../../assests/database-2.png";
import Image3 from "../../assests/webdesign-2.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Problem solving and algorithm",
    description:
      "During my study at Langara College I took Data Structures and Algorithm l and ll courses, which helped me to learn data structures concepts, adavance my knowledge and improve my problem-solving skills ",
  },
  {
    id: 2,
    image: Image2,
    title: "database",
    description: "During my study at Langara College, I leanrt the concept of database, how to write advace queires, normalization and relational algebra. I know how to work with MySQL and MSSQL ",
  },
  {
    id: 3,
    image: Image3,
    title: "web design",
    description: "I took Wed Development, Web programming and Full-Stack Web Development courses during my study, which gave me the knowledge of how to build a responsive, user-interctive website and working on the Backend and Frontend.",
  },
];
//Problem solving- knowledge of Algorithm and Data Structue concepts
// Full-stack web development , working on front-end and back-end of websites
// Database- Writing complecated queries. Working with MySQL, MSSQL, SQL
// Proficient in HTML, CSS, JavaScript, Java, C++, Azure, Git, AWS services, etc.
const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container grid">
        {data.map(({ id, title, image, description }) => {
          return (
            <div className="skills__card" key={id}>
              <img src={image} alt="" className="skills__img" />

              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
