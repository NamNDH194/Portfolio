import React, { useEffect, useState } from "react";
import styles from "./Introduce.module.css";
import myAvatar from "../../assets/images/myAvatar.jpg";

function Introduce({ handleEnlargeImage }) {
  return (
    <section className={styles.container} id="introduce">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello there, welcome to look at my profile. I'm
          <span className={styles.name}> Nam</span>
        </h1>
        <div className={styles.description}>
          <p>
            I'm a web developer. I have a passion for coding and developing
            software that brings value to everyone.
          </p>
          <p>I am good at teamwork, friendly and responsible person</p>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=namndh.sw@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={myAvatar}
        alt="Avatar"
        className={styles.avtarImg}
        onClick={() => handleEnlargeImage(true, "myAvatar.jpg")}
      />
    </section>
  );
}

export default Introduce;
