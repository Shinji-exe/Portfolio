import React from 'react'
import Layout from '../components/Layout'
import { useState,useEffect } from 'react'
import { useRef } from 'react'
import { LinkedIn } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { HtmlOutlined } from '@mui/icons-material'
import { Css } from '@mui/icons-material'
import { Javascript } from '@mui/icons-material'
import {} from "@mui/icons-material"
import transition from '../transistion'
import {motion} from "framer-motion"
import { Link, Route } from 'react-router-dom'
import headshot1 from "../images/Untitled design (1).jpg"
import "../style/Home.css"
import genass from "../images/GA.jpg"
import cityT from "../images/citytech_logo.jpg"
import vitamin from "../images/The_Vitamin_Shoppe_Logo.jpg"
import techCourse from "../images/CourseraTech.pdf"
import merits from "../images/Social-Share@2x-2.webp"
import TypeWriterEffect from "react-typewriter-effect"


function Home() {

  const [showMore, setShowMore] = useState(false) 
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const domRef1 = useRef()
  const domRef2 = useRef()
  const domRef3 = useRef()
  const domRef4 = useRef()
 

  useEffect(() => {
    document.title = "Timothy's Homepage"
  })

useEffect(() => {
  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        setVisible1(true);
        observer1.unobserve(entry.target)
      }
    })
  })

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        setVisible2(true);
        observer2.unobserve(entry.target);
      }
    });
  });

  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        setVisible3(true);
        observer3.unobserve(entry.target)
      }
    })
  })

  const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        setVisible4(true);
        observer4.unobserve(entry.target)
      }
    })
  })


  observer1.observe(domRef1.current);
  observer2.observe(domRef2.current);
  // observer3.observe(domRef3.current);
  observer4.observe(domRef4.current);


  return () => {
    observer1.disconnect();
    observer2.disconnect();
    // observer3.disconnect();
    observer4.disconnect();
  }
},[])


  const containerTransition = {
    // hidden: {opacity: 0},
    // visible: {opacity: 1, transition: {duration: 1}}
    hidden: {x: "-100vw"},
    visible: {x: 0, transition: {duration: 1, ease: [0.22, 1, 0.36, 1] } },
  }

  const containerTransitionOut = {
    hidden: {x: 0},
    visible: {x: "-100vw", transition: {duration: 1, ease: [0.22, 1, 0.36, 1] } },
  }

  const handleClick = () => {
    const element = document.getElementById('introduction');
    if(element){
element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }
  }

  const handleClick2 = () => {
    const element = document.getElementById("skillsection");
    if(element){
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }
  }

  const buttonDownload = () => {
    const pdfUrl = "TimothyLundyResume.pdf";
    const link = document.createElement('a')
    link.href = pdfUrl;
    link.download = 'TimothyLundyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const arrayOfStrings = ["Hello There, Stranger!", "What's Up, Stranger!", "How are you, Stranger!", "Greetings, Stranger!", "Welcome, Stranger!", "Howdy, Stranger!"];
  const randomArray = arrayOfStrings[Math.floor(Math.random() * arrayOfStrings.length)]

  const shortText = "I was originally an Emerging Media/Game Design major from 2017 to 2019, but due to Covid-19, I couldn't continue my studies and didn't finish to get my bachelor's. During Covid-19, I attended General Assembly to study software engineering for both client and server side. Later on, I attended Merit America to study IT Support and cybersecurity. My mindset is that we should learn all aspects of skills pertaining to certain fields. With technology on the rise, it seems like a very good idea to make yourself more flexible or a jack of all trades to tackle certain situations.";
  const fullText = "Currently, I am studying cybersecurity from IBM SkillsBuild and Google Coursera and other resources. I'm hooked on learning new and relevant fields of studies, and once I'm in, I just have to keep going.";

  return (
    
    <Layout>
     
<motion.div className='container' initial="hidden" animate="visible" variants={containerTransition}>

        <motion.div className='home'>
        <motion.div className='about'>
        <h2>Hi, My Name is Timothy Lundy</h2> 
        <div className='prompt'> 
        {/* <p>
          I'm a Full-Stack engineer and a IT Support Specialist that is driven to exceed expectations and skill set.
          </p>  */}
         <TypeWriterEffect
          textStyle={{
            fontFamily: 'Red Hat Display',
            color: '#3F3D56',
            fontWeight: 500,
            fontSize: '1.5em',
          }}
          startDelay={2000}
          cursorColor="#3F3D56"
          multiText={[
            'I am a Full-Stack Software Engineer',
            'an IT Support Specialist',
            'and an aspiring Cybersecurity Specialist',
            'I am eagerly committed to surpassing expectations and taking my learning journey to new heights.',
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
         />

     
           <Link to= "https://www.linkedin.com/in/timothylh01/"> <LinkedIn className='linkedin'/></Link>
           
           <Link to = "https://github.com/Shinji-exe" ><GitHub className='github'/></Link>

        <Link to="/contact"><Email className='email'/></Link> 
          </div>
          <button className='pandown' onClick={handleClick}>About Me</button>
         </motion.div>
        <motion.div className='skills' id='introduction' variants={containerTransition} initial="hidden" animate="visible"> 


        <div>
           <p className='paragraph1'>
            I'm Timothy Jordan Lundy - Hernandez(jeez that's a mouthful) I'm a <strong>Full-Stack Software Engineer</strong>, a <strong> IT Support Specialist</strong> and an aspiring <strong>Cybersecurity Analyst</strong></p>  
        </div>

        <div className='profilepic'>
          <img src={headshot1}/>
        </div>

        <div>
        <p className='paragraph2'>
          {showMore ? shortText + " " +fullText : shortText}
          <button className='btn' onClick={(e)=> {
            e.preventDefault();
           setShowMore(!showMore)}}>
             {showMore ? 'show less' : "Show more"}
             </button>
        </p>
        </div>


<div className={`fade-in ${visible1 ? 'fade-in-visible' : ''}`} ref={domRef1} id='sect1'>
  <div className='imageContainer'>
  <img src={cityT} alt=''/>
  </div>
  
  <div className='infodump'>
  <h2>CUNY</h2>
  <p className='paragraph3'>
     I attended New York City College of Technology to pursue a bachlors degree in Emerging Media with the focus of coding and game design. Learning to use game engines like Unity and Unreal to learning programs like Processing 3, Arduino with Java and electrical engineering
  </p>
  </div>
 
  {/* <p className='paragraph3'>
     I attended New York City College of Technology to pursue a bachlors degree in Emerging Media with the focus of coding and game design.
  </p> */}
</div>

<div className= {`fade-in ${visible2 ? 'fade-in-visible' : ''}`} ref={domRef2} id='sect2'>
  <img src={genass} alt=''/>
  <div className='infodump'>
  <h2>Coding Bootcamp</h2>
  <p className='paragraph3'>
     When Covid-19 came to be, schools and campuses were shut down. Laying around in bed feeling like I wouldn't amount to anything, I saw an advertisment about coding bootcamps like "Kenzie Academy", "Flatiron School" and obviously "General Assembly".
     General Assembly wasn't about game design, but software engineering with client/server side development. After a few months, I became Certified in Full Stack Software Engineering.
  </p>
  </div>
</div>


{/* <div className= {`fade-in ${visible3 ? 'fade-in-visible' : ''}`} ref={domRef3} id='sect3'>
  <img src={vitamin} alt=''/>
  <div className='infodump'>
  <h2>Health Enthusiast</h2>
  <p className='paragraph3'>
     I attended New York City College of Technology to pursue a bachlors degree in Emerging Media with the focus of coding and game design.
  </p>
  </div>
</div> */}


<div className= {`fade-in ${visible4 ? 'fade-in-visible' : ''}`} ref={domRef4} id='sect4'>
  <img src={merits} alt=''/>
  <div className='infodump'>
  <h2>Merit America</h2>
  <p className='paragraph3'>
     After working retail and consistantly looking for a position in the tech industry, I felt like I was missing something in terms of expanding my skillset. I was introduced to Merit America and their Google Coursea IT Support course. Learning Hardware and software as well as subnetting, cider notations and
     network security. I was happy to add that to my list of skills I can use to further my knowledge of Tech.
  </p>
  </div>

 
</div>


<button className='pandown' onClick={handleClick2}>My Skillset</button>

        <div id='skillsection'>
        <h1>Skills</h1>
        
        <ol className='skillsList'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              HTML5, JavaScript, CSS3, SCSS, ReactJS, MaterialUI
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB, PSQL </span>
          </li>
          <li className='item'>
            <h2>Other Languages/Software</h2>
            <span>ASCII, Microsoft Office365, Airtable, RESTful API</span>
          </li>
          <li className='item'>
            <h2>IT Support Specialist</h2>
            <span>Windows Powershell, Linux CLI, PC Assembly, Jira, Spiceworks, tcpdump</span>
          </li>
        </ol>
        </div>
        <button className='button' onClick={buttonDownload}>
Download CV
</button>

         </motion.div>
        </motion.div>
      
    </motion.div>
    
    </Layout>
      
  )
}

export default Home