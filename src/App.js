/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'

import './styles/base.sass'

import Menu from './components/Menu'
import Home from './components/Home'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contack'
import Resume from './components/Resume'
import Project from './components/Projects'

const App = () => {
  const AppRef = useRef(App)
  const [scroll, setScroll] = useState(0)
  const [resume, setResume] = useState(false)

  return (
    <div 
      onScroll={()=> console.log(AppRef.current.scrollTop)}//setScroll(AppRef.current.scrollTop)
      className="app-container" 
      ref={AppRef} 
    >
      {
        resume ?
        <Resume/>
        :
        <>
          <Menu scroll={scroll}></Menu>
          <Home></Home>
          <Skills></Skills>
          <Work></Work>
          <Project></Project>
          <Contact setResume={setResume}></Contact>
        </>
      }
    </div>
  );
}

export default App;
