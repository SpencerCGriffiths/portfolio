import { getProjects } from "../../../libs/methods";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsWrapper = async () => { 

   const projects = await getProjects()
   console.log(projects, "porjects in project wrapper")

        return ( 
            <div> 
                <p>Projects</p>
                {projects && projects.map((singlePro) => { 
                return <ProjectCard singlePro = {singlePro} key = {singlePro._id}/> }
                )}
                </div>
        )
}

export default ProjectsWrapper
