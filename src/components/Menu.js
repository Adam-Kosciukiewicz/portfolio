import React, { useState, useEffect } from "react";

import '../styles/menu.sass'
import { menuLinks } from "../data";

const Menu = (props) => {

    const [current, setCurrent] = useState('home')
    useEffect(()=>{
        let refArray = Object.entries(props).filter(elem => typeof elem[1] === 'object')

        refArray.forEach(ref => {
            if (props.scroll < 300) {
                setCurrent('home')
            }else  if (refArray[refArray.length - 2][1].current.offsetTop <= props.scroll){
                setCurrent(refArray[refArray.length - 1][0])
            }else if ((Math.round(ref[1].current.offsetTop / 100) * 100) - 200 === Math.round(props.scroll / 100) * 100){
                setCurrent(ref[0])
            }
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.scroll])

    const handleClick = (to) => {
        props?.[to].current.scrollIntoView({
            behavior: 'smooth', block: 'center'
        })

        setCurrent(to)
    }

    return(
        <>
            <div className={`${props.scroll < 100 ? 'home' : ''} desktop-menu`}>
                {
                    menuLinks.map(link =>
                        <div 
                            className={`link ${current === link.scrollTo ? 'active' : ''}`} 
                            key={link.name} 
                            onClick={()=>handleClick(link.scrollTo)}
                            >
                            <div className='text'>{link.name}</div>
                        </div>
                    )
                }
            </div>
            <div 
                onClick={()=> props.setShowMenu(!props.showMenu)}
                className='phone-menu-button'
            >
                {props.showMenu ?
                    <img alt='icon' src='./assets/x.svg'/>
                    :
                    <img alt='icon' src='./assets/menu.svg'/>
                }
            </div>
        </>
    )
}
export default Menu