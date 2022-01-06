import React from "react";

import '../styles/home.sass'

const Home = ({forwardRef, next}) => {
    return(
        <div className='home-container' ref={forwardRef}>
            <div className='fast-access'>
                <img 
                    onClick={()=> window.open('https://github.com/Adam-Kosciukiewicz','_blank')}
                    src='./assets/github.png' 
                    alt='icon' 
                />
                <img 
                    onClick={()=> window.open('./assets/cv.pdf','_blank')}
                    src='./assets/resume.svg' 
                    alt='icon' 
                />
            </div>
            <div className='content'>
                <div className='title'>Junior Front-End Developer</div>
                <div className='sub-title'>Adam Kościukiewicz</div>
                <div className='fast-access-mobile'>
                    <img alt='icon' src='./assets/github.png'></img>
                    <img alt='icon' src='./assets/resume.svg'></img>
                </div>
                <div 
                    onClick={() => next.current.scrollIntoView({ block: 'center', behavior: 'smooth' })}
                    className='button'
                >
                    <img alt='button' src='./assets/arrow.svg'></img>
                </div>
            </div>
        </div>
    )
}
export default Home