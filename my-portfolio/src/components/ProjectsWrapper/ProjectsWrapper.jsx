import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsWrapper = async () => { 

    const getProjects = async () => { 
        try { 
            const res = await fetch('http://localhost:3000/api/project', 
            {cache: 'no-store', 
        });

        if (!res.ok) { 
            throw new Error("failed to fetch projects")
        }
    
        return res.json()
        } catch (error) {
            console.log("error loading projects", error)
        }
    }

    const {project} = await getProjects();

    return ( 
        <div> 
            <p>Projects</p>
            {project.map((singlePro) => { 
            return <ProjectCard singlePro = {singlePro} key = {singlePro._id}/> 
            })}
            </div>
    )
}

export default ProjectsWrapper
