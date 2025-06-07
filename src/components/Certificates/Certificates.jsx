import React from "react";
import { getImageUrl } from "../../ultils";
import styles from "./Certificates.module.css";

function Certificates() {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
        <div
          className={styles.certificateItem}
          onMouseOver={() => {
            document.querySelector("#codingIcon").classList.add(styles.shaking);
          }}
          onMouseLeave={() => {
            document
              .querySelector("#codingIcon")
              .classList.remove(styles.shaking);
          }}
        >
          <div className={styles.certificateImgContiner}>
            <img
              src={getImageUrl("coding-icon.png")}
              alt="coding icon"
              id="codingIcon"
            />
          </div>

          <h3>Web Design for Everybody: Basics of Web Development & Coding</h3>

          <div className={styles.certificateContent}>
            <p>
              This is a course about learning to Design and Create Websites.
              Build a responsive web using HTML5, CSS3 and JavaScript.
            </p>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/8A8QGFXGPBS9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificateButton}
            >
              Certificate
            </a>
          </div>
        </div>
        <div
          className={styles.certificateItem}
          onMouseOver={() => {
            document
              .querySelector("#englishIcon")
              .classList.add(styles.shaking);
          }}
          onMouseLeave={() => {
            document
              .querySelector("#englishIcon")
              .classList.remove(styles.shaking);
          }}
        >
          <div className={styles.certificateImgContiner}>
            <img
              src={getImageUrl("english-icon.png")}
              alt="coding icon"
              id="englishIcon"
            />
          </div>

          <h3>Academic English: Writing</h3>
          <div className={styles.certificateContent}>
            <p>
              This is a course about learning writing skills in English. It
              helps learners gain a deeper understanding of grammar, essay
              writing, and research in English.
            </p>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/WMUGSM9YSEXD"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificateButton}
            >
              Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
