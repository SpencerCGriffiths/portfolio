import style from "./Hero.module.css"
import ScrollButton from "./ScrollButton"

const Hero = () => { 


    return (  
        <div className={style.hero}>
            <h1 className={style.name}>SPENCER</h1>
            <div className={style.captureText}> A passion for software engineering derived from an enjoyment of problem-solving. Enjoying my ability to implement strategies and approaches to build new systems.</div>
            <ScrollButton />
        </div>
    )
}

export default Hero