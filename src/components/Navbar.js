import React from 'react'
import "../style/Navbar.css"
import { Link, useLocation } from 'react-router-dom'
import { Reorder } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { useState, useEffect } from 'react'

function Navbar() {
  const [expanded, setExpanded] = useState(false)

  const location = useLocation()

useEffect(()=>{
setExpanded(false)
},[location])

  return (
    <div className='navbar' id={expanded ? "open" : 'close'}>

        <div className='toggleButton'>
          <button onClick={() => {
            setExpanded((prev) => !prev)
            }}> 
           {expanded ? <Close /> : <Reorder />}
            </button>
          </div>

          <div className='links'>
            <Link to='/' className='Home'>Home</Link>
            <Link to='/experience' className='exp'>Experience</Link>
            <Link to='/project' className='proj'>Project</Link>
            <Link to = '/contact' className='tact'>Contact</Link>
          </div>
{/* 
          <div className={`links ${expanded ? 'visible' : ''}`}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/experience'>Experience</Link>
          </div> */}
    </div>
  )
}

export default Navbar