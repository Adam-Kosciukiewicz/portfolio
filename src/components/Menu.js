import React from "react";

import '../styles/menu.sass'
import { menuLinks } from "../data";

const Menu = ({scroll}) =>{
    console.log(scroll)
    return(
        <div className={`${scroll < 500 ? 'home' : ''} menu-container`}>
            {
                menuLinks.map(link=>
                    <div className='link' key={link.name}>
                        <div className='text'>{link.name}</div>
                    </div>
                )
            }
        </div>
    )
}
export default Menu