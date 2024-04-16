import React from 'react'
import Layout from '../components/Layout'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useState,useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { School,Work } from '@mui/icons-material'
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import ApiIcon from '@mui/icons-material/Api';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faJediOrder } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faBacon } from '@fortawesome/free-solid-svg-icons'
import 'react-vertical-timeline-component/style.min.css'
import "../style/Experience.css"
import {motion} from "framer-motion"

function Experience() {

  
  const containerTransition = {
    // hidden: {opacity: 0},
    // visible: {opacity: 1, transition: {duration: 1}}
    hidden: {x: "-100vw"},
    visible: {x: 0, transition: {duration: 1, ease: [0.22, 1, 0.36, 1] } },
  }

  useEffect(() => {
    document.title = "Timothy's Experience"
  })


  return (
    <Layout>
      <motion.div className='container' initial="hidden" animate="visible" variants={containerTransition}>
<div className='experience'>

  <VerticalTimeline lineColor='#000000' >

  <VerticalTimelineElement 
    className='vertical-timeline-element--education' 
    contentStyle={{backgroundImage: "url(https://www.francislewishs.org/pics/FRALHS_LOGO.gif)", backgroundPosition: "right", backgroundRepeat: "no-repeat", backgroundSize: 'contain', color: "#000000", boxShadow: "0px -5px 2px 1px rgba(51, 153, 255, 0.8)" }}
    contentArrowStyle={{ borderRight: '7px solid rgb(0,0,0)'}}
    date='2016-2017' 
    iconStyle={{background: "#3399ff", color: "#fff"}} 
    icon={<School />}>

      <h3 className='vertical-timeline-element-title'>
        Francis Lewis High School
        </h3>

      <p>High School Diploma</p>

      

    </VerticalTimelineElement>


    <VerticalTimelineElement 
    className='vertical-timeline-element--education'

    
    // contentStyle={{background: "rgb(33,150,243)", borderColor: "rgb(0,150,243)"}}
    contentStyle={{backgroundImage: "url(https://products.advanced-online.com/CU7/Large/6-25-C79806A.jpg)", backgroundPosition: "right",  backgroundRepeat: "no-repeat", backgroundSize: "contain", color: "#000000", boxShadow: "0px -5px 2px 1px rgba(51, 153, 255, 0.8)"}}
    contentArrowStyle={{ borderRight: '7px solid rgb(0,0,0)'}}
    date='2017-2019' 
    iconStyle={{background: "#3399ff", color: "#fff", border: '#000000'}} 
    icon={<School />}>

      <h3 className='vertical-timeline-element-title'>
        New York City College of Technology
        </h3>

      <p>Majored in Emerging Media</p>

      <p><em>Studying of game design</em></p>

    </VerticalTimelineElement>

    <VerticalTimelineElement 
    className='vertical-timeline-element--education' 
    contentStyle={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain", color: "#000000", boxShadow: "0px -5px 2px 1px rgba(51, 153, 255, 0.8)"}}
    contentArrowStyle={{ borderRight: '7px solid rgb(0,0,0)'}}
    date='June/2021-September/2021' 
    iconStyle={{background: "#3399ff", color: "#fff"}} 
    icon={<School />}>

      <h3 className='vertical-timeline-element-title'>
        General Assembly
        </h3>
       
      <p>Certified in Full-Stack Software Engineering</p>

      <p><em>Studies of both client and server side development</em></p>

      <ul>
        <li>
        <p className='GAInfo'>Skill development includes Front-end development HTML,CSS,JavaScript,ReactJs and back-end development with
MongoDB, Express, bcrypt, JsonWebToken(JWT).</p>
        </li>
        <li>
        <p className='GAInfo'>Completed hands-on coursework covering Postman, Insomnia</p>
        </li>
      </ul>

      <span className='long'>
        <FontAwesomeIcon icon={faHtml5} style={{color: "#de9816"}}/> <FontAwesomeIcon icon={faCss3} style={{color: "#74c0fc"}}/> <FontAwesomeIcon icon={faJs} style={{color: "#dede16"}}/> <FontAwesomeIcon icon={faReact} style={{color: "#74c0fc"}}/>
         
        </span> 

    </VerticalTimelineElement>


    <VerticalTimelineElement 
    className='vertical-timeline-element--education' 
    contentStyle={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain", boxShadow: "0px -5px 2px 1px rgba(51, 153, 255, 0.8)"}}
    contentArrowStyle={{ borderRight: '7px solid rgb(0,0,0)'}}
    date='2021-2022' 
    iconStyle={{background: "#3399ff", color: "#fff"}} 
    icon={<Work />}>

      <h3 className='vertical-timeline-element-title'>
       The Vitamin Shoppe
        </h3>

      <p>Health Enthusiast</p>


  <ul>
  <li>
    <p className='GAInfo'>Created a forum on the website and a purchase history application so customers, especially frequent customers know what
they want and or need</p></li>

<li>
<p className='GAInfo'>Collaborated closely with the inventory management team to implement a more robust supply chain system</p>
</li>

<li>
<p className='GAInfo'>Introduced streamlined checkout processes, reducing waiting times for customers</p>
</li>
  </ul>


    </VerticalTimelineElement>

    <VerticalTimelineElement 
    className='vertical-timeline-element--education' 
    contentStyle={{backgroundImage: "url(https://meritamerica.org/wp-content/uploads/2023/11/Blog-Banners.jpg)", backgroundPosition: "right", backgroundRepeat: "no-repeat", backgroundSize:"contain", boxShadow: "0px -5px 2px 1px rgba(51, 153, 255, 0.8)"}}
    contentArrowStyle={{ borderRight: '7px solid rgb(0,0,0)'}}
    date='2023-2024' 
    iconStyle={{background: "#3399ff", color: "#fff", border: "black"}} 
    icon={<School />}>

      <h3 className='vertical-timeline-element-title'>
        Merit America/Google Coursea
        </h3>

      <p>Studies of IT Support</p>

      <p><em></em></p>

    </VerticalTimelineElement>
  </VerticalTimeline>
</div>

</motion.div>
    </Layout>
    
  )
}

export default Experience