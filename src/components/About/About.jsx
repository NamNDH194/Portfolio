import React from "react";
import frontEndIcon from "../../assets/images/front-end.png";
import backEndIcon from "../../assets/images/back-end.png";
import workingImage from "../../assets/images/workingImage.jpg";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={workingImage}
          alt="Back end icon"
          //   style={{ width: "300px", height: "382px" }}
          className={styles.workingImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={frontEndIcon}
              alt="Front end icon"
              style={{ width: "80px", height: "80px" }}
            />
            <div className={styles.aboutItemText}>
              <h3>Front-end</h3>
              <p>
                I have experience working with ReactJS, Material UI, Bootstrap,
                Axios
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={backEndIcon}
              alt="Back end icon"
              style={{ width: "80px", height: "80px" }}
            />
            <div className={styles.aboutItemText}>
              <h3>Back-end</h3>
              <p>
                I have experience working with Node.JS, ExpressJS, MongoDB,
                MySQL
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
