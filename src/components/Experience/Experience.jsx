import React from "react";
import { skillDatas } from "../../data/skill";
import { historyDatas } from "../../data/history";
import { getImageUrl } from "../../ultils";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skillDatas.map((skill, index) => {
            return (
              <div key={index} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  {skill.title === "Github" || skill.title === "Javascript" ? (
                    <div
                      className={styles.backgroundImage}
                      style={
                        skill.title === "Github"
                          ? {
                              width: "74.2px",
                              height: "74.2px",
                              borderRadius: "50%",
                            }
                          : { width: "55px", height: "64px" }
                      }
                    ></div>
                  ) : (
                    ""
                  )}
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {historyDatas.map((history, index) => {
            return (
              <li key={index} className={styles.historyItem}>
                <img src={getImageUrl(history.imageSrc)} alt="" />
                <div className={styles.historyItemDetails}>
                  <h3>{`${history.role}, ${history.organisation}`}</h3>
                  <p>{`${history.startDate} - ${history.endDate}`}</p>
                  <p>{history.experience}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
