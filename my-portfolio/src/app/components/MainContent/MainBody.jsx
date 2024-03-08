import ExperienceWrapper from "../Experience/ExperienceWrapper"
import ProjectsWrapper from "../ProjectsWrapper/ProjectsWrapper"
import TechnicalSkillsWrapper from "../TechnicalSkillWrapper/TechnicalSkillWrapper"
import style from "./MainBody.module.css"
const MainBody = () => {

    return (
        <div className={style.MainContent}>
            <TechnicalSkillsWrapper />
            <ProjectsWrapper /> 
            <ExperienceWrapper /> 
        </div>
        
    )
}

export default MainBody