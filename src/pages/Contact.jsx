import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '../components/Layout'
import { motion } from 'framer-motion';
import "../style/Contact.css"


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_iu3cwoa', 'template_cjihh35', form.current, {
          publicKey: 'GXGZtvv4dvgK5oqEj',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log("Message Sent")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    useEffect(() => {
      document.title = "Contact Form"
    })

    const containerTransition = {
      // hidden: {opacity: 0},
      // visible: {opacity: 1, transition: {duration: 1}}
      hidden: {x: "-100vw"},
      visible: {x: 0, transition: {duration: 1, ease: [0.22, 1, 0.36, 1] } },
    }

  return (
    <Layout>
      <motion.div className='container' initial="hidden" animate="visible" variants={containerTransition}>
        <div className='base'>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </div>
        </motion.div>
    </Layout>
  )
}

export default Contact