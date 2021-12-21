import React, { useEffect } from 'react'
import Aos from 'aos'

import { employment } from '../data'

import '../styles/work.sass'
import 'aos/dist/aos.css'

const Work = ({forwardRef}) =>{
    useEffect(()=>{
        Aos.init({
            duration:1000
        });
    },[])
    return(
        <div 
            className='work-conatiner'
            data-aos='zoom-in'
            data-aos-anchor-placement="center-bottom"
            ref={forwardRef}
        >
            <div className='title'>Doświadczenie zawodowe</div>

            {
                employment.map(work=>
                    <div className='work-wrapper' key={work.name}>
                        <img alt='work' src={`./assets/${work.logo}`}/>
                        <div className='text'>
                            <div className='name'>{work.name}</div>
                            <div className='skills'>
                                {
                                   work.technologies.map(tech =>
                                    <div className='skill' key={tech}>{tech}</div>)
                                }
                            </div>
                            <div className='time'>{work.time}</div>
                            <div className='description'>{work.description}</div>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}

export default Work