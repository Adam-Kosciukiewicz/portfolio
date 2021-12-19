import React, { useRef } from 'react'

import './styles/base.sass'

import Project from './components/Projects'
import Contact from './components/Contack'
import Skills from './components/Skills'
import Menu from './components/Menu'
import Home from './components/Home'
import Work from './components/Work'

const App = () => {
  const AppRef = useRef(App)
  //const [scroll, setScroll] = useState(0)

  return (
    <div 
      onScroll={()=> console.log(AppRef.current.scrollTop)}//setScroll(AppRef.current.scrollTop)
      className="app-container" 
      ref={AppRef} 
    >
      <Menu></Menu>
      <Home></Home>
      <Skills></Skills>
      <Work></Work>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
