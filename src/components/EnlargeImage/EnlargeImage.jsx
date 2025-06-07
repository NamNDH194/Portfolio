import React from "react";
import styles from "./EnlargeImage.module.css";
import { getImageUrl } from "../../ultils";

function EnlargeImage({ path, handleEnlargeImage }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.test}
        onClick={() => handleEnlargeImage(false)}
      ></div>
      <img
        src={getImageUrl(path)}
        alt="My avatar image"
        className={
          path === "myAvatar.jpg" ? styles.imgAvatar : styles.otherImage
        }
        id={styles.imageTarget}
      />
    </div>
  );
}

export default EnlargeImage;
