import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { formatNames, imgFilePath } from '../projects';
import { PROJECTS } from '../projects/projects';
import "./styles.css";


function pdfFilePath(id) {
  try {
    return require(`../../pdfs/${id}.pdf`);
  } catch (e) {
    return require(`../../pdfs/cassettes.pdf`);
  }
}


export default function Project() {
  const { projectId } = useParams()
  const defaultLayoutPluginInstance = defaultLayoutPlugin();


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
        <p className='abstract'>{project.description}</p>
      </div>
    </div>

    <div className='viewer-div'>
      <Viewer style={{ backgroundColor: 'blue' }}
        fileUrl={pdfFilePath(projectId)}
        plugins={[defaultLayoutPluginInstance]}
      />
    </div>
  </div>
}