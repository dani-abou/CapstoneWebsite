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
        {/* <img src={require(`../../images/projects/${projectKey}.png`)} alt={index} /> */}
        <img src={imgFilePath(projectKey)} alt={index} className="project-image" />
        <h2 style={{ textAlign: 'center' }}>{project.name}</h2>
        <h4 className="project-members">{formatNames(project.members)}</h4>
      </a>
    })}

  </div>
}