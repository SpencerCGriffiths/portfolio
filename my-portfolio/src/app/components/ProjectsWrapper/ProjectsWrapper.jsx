import { getProjects } from "@/libs/methods";
import ProjectCard from "./ProjectCard/ProjectCard";
import style from "./ProjectsWrapper.module.css"

const ProjectsWrapper = async () => { 

   const projects = await getProjects()

        return ( 
            <section className={style.wrapper}> 
                <section className={style.titleWrapper}>
                <h2 className={style.title}>- Projects -</h2>
                </section>
                <section className={style.projects}>
                {projects && projects.map((singlePro) => { 
                return <ProjectCard singlePro = {singlePro} key = {singlePro._id}/> }
                )}
                </section>
            </section>
        )
}

export default ProjectsWrapper
