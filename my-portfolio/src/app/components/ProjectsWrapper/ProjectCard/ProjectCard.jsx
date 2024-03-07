"use client"

import Image from "next/image"
import style from "./ProjectCard.module.css"
import { UilGithub } from '@iconscout/react-unicons'

const ProjectCard = ({ singlePro }) => { 
    let url = singlePro.hostedUrl === "N/A" ? singlePro.githubUrl : singlePro.hostedUrl;
    let urlGithub = singlePro.githubUrl;

    const handleCardClick = () => {
        window.open(url, "_blank");
    };

    const handleInnerClick = (e) => {
        e.stopPropagation();
    };

    return (
        <article className={style.wholeCard} onClick={handleCardClick}> 
            <div className={style.cardContent}>
                <Image
                    src={`/${singlePro.image}.png`} // Path relative to the public folder
                    alt="JavaScript Logo"
                    width={587} // Desired width (can adjust as needed)
                    height={330} // Desired height (can adjust as needed)
                    className={style.cardImg}
                />
                <h3 className={style.cardTitle}>{singlePro.title}</h3>
                <p className={style.cardDesc}>{singlePro.description}</p>
                <div className={style.cardGUrl} onClick={handleInnerClick}>
                    <a href={urlGithub} onClick={handleInnerClick}>
                        <UilGithub size ={24} color = {'#000000'} />
                        Github Repo
                    </a>
                </div>
                <section className={style.cardTechs}>
                    {singlePro.technologies.map((tech) => ( 
                        <p key={tech} className={style.cardSingleTech}>{tech}</p>
                    ))}
                </section>
            </div>
        </article>
    )
}

export default ProjectCard
