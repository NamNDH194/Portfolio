import React from "react";
import { getImageUrl } from "../../ultils";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("gmail-icon.png")} alt="Gmail icon" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=namndh.sw@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            namndh.sw@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <div className={styles.backgoundImage}></div>
          <img src={getImageUrl("github-logo.png")} alt="Github icon" />
          <a
            href="https://github.com/NamNDH194"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/NamNDH194
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("phone-icon.png")} alt="Github icon" />
          <p>0968065775</p>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
