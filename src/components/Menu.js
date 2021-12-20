import React from "react";

import '../styles/menu.sass'
import { menuLinks } from "../data";

const Menu = ({scroll}) =>{
    console.log(scroll)
    return(
        <div className={`${scroll < 100 ? 'home' : ''} menu-container`}>
            {
                menuLinks.map(link=>
                    <div className='link' key={link}>
                        <a href={`#${link.toLowerCase()}`} className='text'>{link}</a>
                    </div>
                )
            }
        </div>
    )
}
export default Menu