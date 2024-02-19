import FrontEndSkills from "@/components/FrontEndSkills/FrontEndSkills"
import BackEndSkills from "../BackEndSkills/BackEndSkills"
import AdditionalSkills from "../AdditionalSkills/AdditionalSkills"
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills"

const TechnicalSkillsWrapper = () => { 
    return ( 
        <>
        <TechnicalSkills /> 
        <FrontEndSkills />
        <BackEndSkills /> 
        <AdditionalSkills /> 
        </>
    )
}
export default TechnicalSkillsWrapper