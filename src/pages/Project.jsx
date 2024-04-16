import React from 'react'

import { useEffect } from 'react'

import Layout from '../components/Layout'

import ProjectItem from '../components/ProjectItem'

import { ProjectList } from '../helpers/ProjectList'

import {motion} from "framer-motion"

import "../style/Project.css"


function Project() {
    const containerTransition = {
        // hidden: {opacity: 0},
        // visible: {opacity: 1, transition: {duration: 1}}
        hidden: {x: "-100vw"},
        visible: {x: 0, transition: {duration: 1, ease: [0.22, 1, 0.36, 1] } },
      }

      useEffect(() => {
        document.title = "Timothy's Projects"
      })
      
  return (
    <Layout>
<motion.div className='container' initial="hidden" animate="visible" variants={containerTransition}>
 <div className='projects'>
    <h1>Projects</h1>
    <div className='projectList'>
{/* <ProjectItem name='Social Media Website' image={examp1}/>
<ProjectItem name= 'Ecommerce Website' image={store}/>
<ProjectItem name= "Split Landing Page"/> */}
{ProjectList.map((project, idx) => (
  <ProjectItem id={idx} name={project.name} image={project.image} />
))}
    </div>
</div>
</motion.div>
    </Layout>
   
  )
}

export default Project