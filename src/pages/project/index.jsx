import { useParams } from 'react-router-dom'

export default function Project() {
  const { projectId } = useParams()
  return <>{projectId}</>
}