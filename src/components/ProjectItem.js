import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProjectItem({image, name, project, id}) {
  const navigate = useNavigate();
  
  return (
    <div className='projectItem'>
      
        <div style={{backgroundImage: `url(${image})` }} className='bgImage' />
        <h1>{name}</h1>
     <button onClick={() => {
      navigate('/project/' + id)
     }}>View</button>
    </div>
  )
}

export default ProjectItem