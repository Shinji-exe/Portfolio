import React from'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import Project from './pages/Project';
import ProjectDisplay from './pages/ProjectDisplay';
import Contact from './pages/Contact';

function App() {
  return (
  
    <AnimatePresence mode='wait'>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/experience' element={<Experience/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/project/:id' element={<ProjectDisplay/>} />
    <Route path='/contact' element={<Contact/>} />
   </Routes>
   </AnimatePresence>
  );
}

export default App;
