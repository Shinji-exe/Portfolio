import React from 'react'
import Layout from '../components/Layout'
import { useState,useEffect } from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import headshot from "../images/Timothy-Lundy-Headshot.jpg"
import headshot1 from "../images/Untitled design (1).jpg"
import genass from "../images/GA.jpg"
import cityT from "../images/City-Tech.jpg"
import vitamin from "../images/The_Vitamin_Shoppe_Logo.jpg"
import techCourse from "../images/CourseraTech.pdf"
import "../style/About.css"


function About() {
  const [showMore, setShowMore] = useState(false) 
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const domRef1 = useRef()
  const domRef2 = useRef()
 

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

  observer1.observe(domRef1.current);
  observer2.observe(domRef2.current);



  return () => {
    observer1.disconnect();
    observer2.disconnect();
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
         <div id='containers'>
       <div id='greets'>
        <h2>{randomArray}</h2>
        </div>

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

        <div className='random'>

        </div>

        <div className={`fade-in ${visible1 ? 'fade-in-visible' : ''}`} ref={domRef1}>
          <img src={cityT} alt=''/>
          <p className='paragraph3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit autem inventore illum nesciunt iusto reiciendis, atque a, veritatis eius, natus suscipit. Minus placeat ut culpa sint amet autem distinctio eos.
          </p>
        </div>

        <div className= {`fade-in ${visible2 ? 'fade-in-visible' : ''}`} ref={domRef2}>
          <img src={genass} alt=''/>
        <p className='paragraph3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum. Obcaecati eius nostrum praesentium quasi nulla veniam ut quisquam, facilis odit eos, exercitationem quod cupiditate nihil recusandae fugit? Ea, quasi!
          </p>
        </div>


        <div className= {`fade-in ${visible2 ? 'fade-in-visible' : ''}`} ref={domRef2}>
          <img src={vitamin} alt=''/>
        <p className='paragraph3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati provident labore dolor eum officiis, cupiditate sed impedit voluptates saepe quaerat perspiciatis sapiente est corrupti vero, laboriosam quae doloribus at!
          </p>
        </div>


        <div className= {`fade-in ${visible2 ? 'fade-in-visible' : ''}`} ref={domRef2}>
          <img src={techCourse} alt=''/>
        <p className='paragraph3'>
            
          </p>
        </div>

       <button className='button' onClick={buttonDownload}>
        Download CV
        </button>
        </div>
       </motion.div>
    </Layout>
   
  )
}

export default About