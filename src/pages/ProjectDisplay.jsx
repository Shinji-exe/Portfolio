import React from 'react'
import { useParams } from 'react-router'
import { ProjectList } from '../helpers/ProjectList'
import "../style/ProjectDisplay.css"
import { GitHub } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import { ArrowBack } from '@mui/icons-material'
import { ArrowForward } from '@mui/icons-material'
import { ArrowCircleLeftRounded, ArrowCircleRightRounded} from '@mui/icons-material'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Layout from '../components/Layout'

function ProjectDisplay() {
    const {id} = useParams()
    const project = ProjectList[id]
    const [currentImage, setCurrentImage] = useState(0)
    const [hovered, setHovered] = useState(false)
    
    const containerTransition = {
      // hidden: {opacity: 0},
      // visible: {opacity: 1, transition: {duration: 1}}
      hidden: {x: "-100vw"},
      visible: {x: 0, transition: {duration: 1, ease: [0.22, 1, 0.36, 1] } },
    }
    
    
    if(!project){
      return (
        <div>
          No project found, but I'll add some soon!!!
        </div>
      )
    }

const nextImage = () => {
  setCurrentImage((prevInput) => 
  prevInput === project.image.length - 1 ? 0 : prevInput + 1
  )
}

const prevImage = () => {
  setCurrentImage((prevInput) => 
  prevInput === 0 ? project.image.length - 1 : prevInput - 1
  )
}

  return (
    <Layout>
      <motion.div className='container' initial="hidden" animate="visible" variants={containerTransition}>
    <div className='project'>
<h1>{project.name}</h1>

<div className='carousel'>
  <ArrowCircleLeftRounded className='icon' onClick={prevImage}/>
  
  <img src={project.image[currentImage]} alt={project.name}/>

  <ArrowCircleRightRounded className='icon' onClick={nextImage}/>
</div>

<p className='shrink'><strong>Skills:</strong> {project.skill}</p>
<div className='bottomDown'>
<ArrowCircleLeftRounded className='iconMini' onClick={prevImage}/>
<GitHub />
<ArrowCircleRightRounded className='iconMini' onClick={nextImage}/>
</div>
{/* <ArrowCircleLeftRounded className='iconMini' onClick={prevImage}/>
<GitHub />
<ArrowCircleRightRounded className='iconMini' onClick={nextImage}/> */}
<Link to = "/project">Back</Link>
    </div>
    </motion.div>
    </Layout>
   
  )
}

export default ProjectDisplay