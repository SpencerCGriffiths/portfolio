import ContactWrapper from "../Contact/ContactWrapper"
import ExperienceWrapper from "../Experience/ExperienceWrapper"
import PersonalIntro from "../PersonalIntro/PersonalIntro"
import ProjectsWrapper from "../ProjectsWrapper/ProjectsWrapper"
import TechnicalSkillsWrapper from "../TechnicalSkillWrapper/TechnicalSkillWrapper"
import style from "./MainBody.module.css"
const MainBody = () => {

    return (
        <div className={style.MainContent}>
            {/* <PersonalIntro />  */}
            <TechnicalSkillsWrapper />
            <ProjectsWrapper /> 
            <ExperienceWrapper /> 
            <ContactWrapper />
        </div>
    )
}

export default MainBody