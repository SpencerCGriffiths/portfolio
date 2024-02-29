import style from "./AdditionalSkills.module.css"

const AdditionalSkills = () => { 
    return (
<section className={style.additionalSkillsWrapper}>
        <article>
        <h2 className={style.title} data-aos="fade-left"> Testing, Methodologies and Additional Expertise</h2> 
        <ul className={style.unList}>
            <li className={style.li} data-aos="fade-left">Agile and SCRUM methodologies</li>
            <li className={style.li} data-aos="fade-left">Test Driven Development (TDD) with a test-first approach</li>
            <li className={style.li} data-aos="fade-left">Jest proficiency for unit testing & Supertest for API testing</li>
            <li className={style.li} data-aos="fade-left">Paired Programming & team collaboration</li>
            <li className={style.li} data-aos="fade-left">Strong communication & project documentation</li>
            <li className={style.li} data-aos="fade-left">utilising Software Development Lifecycle(SDL) for individual and group projects</li>
        </ul>
        </article>
</section>
)
}

export default AdditionalSkills