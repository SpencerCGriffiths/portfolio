import PersonalIntro from "../PersonalIntro/PersonalIntro"
import Projects from "../Projects/Projects"
import TechnicalSkillsWrapper from "../TechnicalSkillWrapper/TechnicalSkillWrapper"
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills"
import style from "./MainBody.module.css"
const MainBody = () => {

    return (
        <div className={style.MainContent}>
            {/* <PersonalIntro />  */}
            <TechnicalSkills />
            <TechnicalSkillsWrapper />
            <Projects /> 
        </div>
    )
}

export default MainBody