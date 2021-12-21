import React, { useEffect } from 'react'
import Aos from 'aos'

import { contactData } from '../data'

import '../styles/contact.sass'
import 'aos/dist/aos.css'

const Contact = ({forwardRef}) =>{

    useEffect(()=>{
        Aos.init({
            duration:1000
        });
    },[])

    return(
        <div 
            className='contact-conatiner'
            data-aos='zoom-in'
            data-aos-anchor-placement="center-bottom"
            ref={forwardRef}
        >
            <div className='title'>Kontakt</div>

            <div className='row to-coppy' onClick={() => navigator.clipboard.writeText(contactData.email)}>
                <img src='./assets/email.svg' alt='icon'/>
                <div className='label'>{contactData.email}</div>
            </div>

            <div className='row to-coppy' onClick={() => navigator.clipboard.writeText(contactData.phone)}>
                <img src='./assets/phone.svg' alt='icon'/>
                <div className='label'>{contactData.phone}</div>
            </div>

            <div className='row' onClick={() => window.open(contactData.github, '_blank')}>
                <img src='./assets/github.png' alt='icon'/>
                <div className='label'>{contactData.github.split('//')[1]}</div>
            </div>

            <div className='button'>Obejrzyj moje CV</div>
        </div>
    )
}

export default Contact