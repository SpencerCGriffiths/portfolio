import Image from "next/image"
import style from "./ProjectCard.module.css"
import { UilGithub } from '@iconscout/react-unicons'

const ProjectCard = ({singlePro}) => { 

    let url = ""
    let urlGithub = singlePro.githubUrl

    if (singlePro.hostedUrl === "N/A") { 
        url = singlePro.githubUrl
    } else { 
        url = singlePro.hostedUrl
    }
return (
    <a href={url}>
    <article className={style.wholeCard}> 
    <Image
    src={`/${singlePro.image}.png`} // Path relative to the public folder
    alt="JavaScript Logo"
    width={587} // Desired width (can adjust as needed)
    height={330} // Desired height (can adjust as needed)
    className={style.cardImg}/>
    <h3 className={style.cardTitle}>{singlePro.title}</h3>
    <p className={style.cardDesc}>{singlePro.description}</p>
    <p className={style.cardGUrl}>
    <a href={urlGithub}>
    <UilGithub />
    Github Repo
    </a>
    </p>
    <section className={style.cardTechs}>{singlePro.technologies.map((tech) => { 
        return <p key={tech} className={style.cardSingleTech}>{tech}</p>
    })}</section>
    </article>
    </a>
)
}

export default ProjectCard