import React, { useEffect, useState, useRef } from 'react'

import './styles/base.sass'

import PhoneMenu from './components/PhoneMenu'
import Contact from './components/Contack'
import Skills from './components/Skills'
import Menu from './components/Menu'
import Home from './components/Home'
import Work from './components/Work'

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scroll, setScroll] = useState(0)
  const contact = useRef()
  const skills = useRef()
  const home = useRef()
  const work = useRef()

  const html = document.getElementsByTagName('html')[0]

  
  useEffect(()=>{
    const event = () => setScroll(html.scrollTop)
    
    window.addEventListener('scroll', event)
    
    return () => window.removeEventListener('scroll',event)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

 
  return (
    <div className="app-container">
      <Menu 
          scroll={scroll}
          home={home} 
          skills={skills}
          work={work} 
          contact={contact}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
      ></Menu>
      {
        showMenu ? 
        <PhoneMenu
          home={home} 
          skills={skills}
          work={work} 
          contact={contact}
          setShowMenu={setShowMenu}
        ></PhoneMenu>
        :
        null
      }
      <>
        <Home forwardRef={home} next={skills}></Home>
        <Skills forwardRef={skills}></Skills>
        <Work forwardRef={work}></Work>
        <Contact forwardRef={contact}></Contact>
      </>
    </div>
  );
}

export default App;
