import style from "./BackEndSkills.module.css"

const BackEndSkills = () => { 
    return (
        <article className={style.wrapper}>  
            <h2 className={style.title} data-aos="fade-right">Back-end Development</h2>
            <ul className={style.unList}> 
                <li data-aos="fade-right">SQL and PSQL for relational database interactions</li>
                <li data-aos="fade-right">MongoDB Atlas</li>
                <li data-aos="fade-right">NoSQL database management</li>
                <li data-aos="fade-right">Database seeding and migrations</li>
            </ul> 
        </article>
    )
}

export default BackEndSkills