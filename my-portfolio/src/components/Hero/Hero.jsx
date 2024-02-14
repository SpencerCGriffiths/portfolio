import style from "./Hero.module.css"
import ScrollButton from "./ScrollButton"

const Hero = () => { 


    return (  
        <div className={style.hero}>
            <h1 className={style.name}>SPENCER</h1>
            <div className={style.captureText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <ScrollButton />
        </div>
    )
}

export default Hero