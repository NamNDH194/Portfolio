import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
