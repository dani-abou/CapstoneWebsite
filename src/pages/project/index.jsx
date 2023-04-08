import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { formatNames, imgFilePath } from '../projects'
import { PROJECTS } from '../projects/projects'
import "./styles.css"


export default function Project() {
  const { projectId } = useParams()

  const project = useMemo(() => PROJECTS[projectId], [projectId])
  return <div>
    <br />
    <br />
    <h1 style={{ textAlign: 'center' }}>{project.name}</h1>
    <h4 className="project-members">{formatNames(project.members)}</h4>
    <div className='page-flex'>

      <img src={imgFilePath(projectId)} alt={projectId} className="project-img" />
      <div>
        <br />
        <p style={{ textAlign: 'justify' }}>{project.description}</p>
      </div>
    </div>
  </div>
}