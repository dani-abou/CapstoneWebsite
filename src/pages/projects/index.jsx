import { PROJECTS } from "./projects";
import "./styles.css";

export function formatNames(names) {
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`
  else return `${names[0]}, ${names[1]}, and ${names[2]}`
}

export function imgFilePath(id) {
  try {
    return require(`../../images/projects/${id}.jpg`);
  } catch (e) {
    return require(`../../images/projects/dog.jpg`);

  }
}

export default function Projects() {
  return <div className="projects-grid">
    {Object.keys(PROJECTS).map((projectKey, index) => {
      const project = PROJECTS[projectKey];
      return <a href={`project/${projectKey}`} className="project" key={index}>
        <img src={imgFilePath(projectKey)} alt={index} className="project-image" />
        <div className="contents">
          <h2 className="project-name">{project.name}</h2>
          <h4 className="projectMembers">{formatNames(project.members)}</h4>
        </div>
      </a>
    })}

  </div>
}