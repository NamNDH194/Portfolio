import React from "react";
import { getImageUrl } from "../../ultils";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={project.title}
        className={styles.image}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      {/* <div className={styles.footer}> */}
      <ul className={styles.skills}>
        {project.skills.map((skill, index) => {
          return (
            <li key={index} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.containerLink}>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Demo
        </a>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ProjectCard;
