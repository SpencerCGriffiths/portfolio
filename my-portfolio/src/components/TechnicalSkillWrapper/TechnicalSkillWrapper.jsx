import FrontEndSkills from "@/components/FrontEndSkills/FrontEndSkills"
import BackEndSkills from "../BackEndSkills/BackEndSkills"
import AdditionalSkills from "../AdditionalSkills/AdditionalSkills"
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills"
import style from "./TechnicalSkillsWrapper.module.css"

const TechnicalSkillsWrapper = () => { 
    return ( 
        <section className={style.wrapper}>
            <section className={style.titleWrapper}>
                <h2 className={style.title}>- Technical Expertise -</h2>
            </section>
        <TechnicalSkills /> 
        <FrontEndSkills />
        <BackEndSkills /> 
        <AdditionalSkills /> 
        </section>
    )
}
export default TechnicalSkillsWrapper