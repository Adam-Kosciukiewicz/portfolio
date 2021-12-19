import React, { useEffect } from 'react'
import Aos from 'aos'

import { skills } from '../data'

import '../styles/skills.sass'
import 'aos/dist/aos.css'

const Skills = () =>{
    useEffect(()=>{
        Aos.init({
            duration:1000
        });
    },[])
    return(
        <div className='skills-container'>
            <div className='description' data-aos='fade-up'>
                <div className='title'>Umiejętości</div>
                <div className='text'>
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                </div>
            </div>
            <div className='skills-wrapper'>
                {
                    skills.map(skill=>
                    <div key={skill} className='skill' data-aos='fade-up'>
                        <img alt='skill' src={`./assets/${skill}.png`} />
                        <div className='label'>{skill}</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Skills