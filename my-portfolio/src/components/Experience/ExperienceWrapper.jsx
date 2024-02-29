import EducationWrapper from "./Education/EducationWrapper"
import WorkWrapper from "./Work/WorkWrapper"
import style from "./ExperienceWrapper.module.css"

const ExperienceWrapper = () => {
    return ( 
        <section className={style.wrapper}>
        <section className={style.titleWrapper1}>
        <h2 className={style.title}>- Education -</h2>
        </section>
        <EducationWrapper />
        <section className={style.titleWrapper2}>
        <h2 className={style.title}>- Experience -</h2>
        </section>
        <WorkWrapper />
        </section>
        
    )
}

export default ExperienceWrapper