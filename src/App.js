/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import './styles/base.sass'

import Project from './components/Projects'
import Contact from './components/Contack'
import Skills from './components/Skills'
import Menu from './components/Menu'
import Home from './components/Home'
import Work from './components/Work'

const App = () => {
  const [scroll, setScroll] = useState(0)

  const html = document.getElementsByTagName('html')[0]

  
  useEffect(()=>{
    const event = () => setScroll(html.scrollTop)
    
    window.addEventListener('scroll', event)
    
    return () => window.removeEventListener('scroll',event)
  },[])
  return (
    <div className="app-container">
      <Menu scroll={scroll}></Menu>
      <Home></Home>
      <Skills></Skills>
      <Work></Work>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
