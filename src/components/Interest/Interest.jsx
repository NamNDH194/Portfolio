import React from "react";
import { getImageUrl } from "../../ultils";
import styles from "./Interest.module.css";

function Interest({ handleEnlargeImage }) {
  return (
    <section className={styles.container} id="interest">
      <h2 className={styles.title}>Interest</h2>
      <div className={styles.content}>
        <h3 className={styles.introduce}>
          Like anyone else, I also have things that interest me.
        </h3>
        <ul className={styles.interestList}>
          <li className={styles.interestItem}>
            <img
              src={getImageUrl("watching-movie-icon.png")}
              alt="watching-movie-icon"
            />
            <p>
              I love watching movies. There are many types of films that I like,
              but movies with action scenes always catch my attention.
            </p>
          </li>
          <li className={styles.interestItem}>
            <img
              src={getImageUrl("listening-music-icon.png")}
              alt="listening-music-icon"
            />
            <p>
              I listen to music a lot. I think music is a part of my life. When
              I'm happy, I listen to it. When I'm upset, I listen to it. Even
              when I'm busy, I still listen to it. The type of music I love the
              most is Pop Ballad.
            </p>
          </li>
          <li id={styles.interestItemSport}>
            <div className={styles.interestItemSportMainContent}>
              <img
                src={getImageUrl("sports-icon.png")}
                alt="listening-music-icon"
              />
              <p>
                I love playing sports such as badminton, football, shuttlecock
                kicking, and more. However, the sports I love the most are
                football and badminton. Here are some pictures of me and my team
                who took part in a school tournament.
              </p>
            </div>

            <div id={styles.interestContainerImg}>
              <img
                src={getImageUrl("shool-tournament-1.jpg")}
                alt="shool-tournament-1 image"
                onClick={() =>
                  handleEnlargeImage(true, "shool-tournament-1.jpg")
                }
              />
              <img
                src={getImageUrl("shool-tournament-2.jpg")}
                alt="shool-tournament-2 image"
                onClick={() =>
                  handleEnlargeImage(true, "shool-tournament-2.jpg")
                }
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Interest;
