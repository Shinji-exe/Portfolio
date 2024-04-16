import React from 'react'
import { Instagram } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import "../style/Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
        {/* <Instagram /> */}
        <Link to = "https://github.com/Shinji-exe" ><GitHub className='github'/></Link>
        <Link to= "https://www.linkedin.com/in/timothylh01/"> <LinkedIn className='linkedin'/></Link>
    </div>
    <p> &copy; 2024 </p>
    </div>
  )
}

export default Footer