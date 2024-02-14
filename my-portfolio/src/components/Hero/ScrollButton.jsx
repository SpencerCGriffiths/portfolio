'use client'

import style from "./Hero.module.css"


const ScrollButton = () => { 

    const scroll = () => { 
        window.scrollBy({ 
            top: 100, // Adjust this value to control the scroll distance
            left: 0, 
            behavior: 'smooth' 
          });
    }
    
    return ( 
        <button className={style.scrollContainer} onClick={()=>{scroll()}}>
            <span className={style.scrollLine}></span>
        </button>
    )
}

export default ScrollButton