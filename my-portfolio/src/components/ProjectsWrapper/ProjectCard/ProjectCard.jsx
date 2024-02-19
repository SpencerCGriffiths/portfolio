import Image from "next/image"
import style from "./ProjectCard.module.css"

const ProjectCard = ({singlePro}) => { 

return (
    <article className={style.wholeCard}> 
    <Image
    src={`/${singlePro.image}.png`} // Path relative to the public folder
    alt="JavaScript Logo"
    width={587} // Desired width (can adjust as needed)
    height={330} // Desired height (can adjust as needed)
    className={style.cardImg}/>
    <h3 className={style.cardTitle}>{singlePro.title}</h3>
    <p className={style.cardDesc}>{singlePro.description}</p>
    <p className={style.cardGUrl}>{singlePro.githubUrl}</p>
    <section className={style.cardTechs}>{singlePro.technologies.map((tech) => { 
        return <p key={tech} className={style.cardSingleTech}>{tech}</p>
    })}</section>
    </article>
)
}

export default ProjectCard