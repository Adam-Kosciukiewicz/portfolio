import React from "react";

import '../styles/home.sass'

const Home = ({forwardRef, next}) => {
    return(
        <div className='home-container' ref={forwardRef}>
            <div className='fast-access'>
                <img alt='icon' src='./assets/github.png'></img>
                <img alt='icon' src='./assets/resume.svg'></img>
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