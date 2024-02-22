"use server"

import Project from "../models/project"
import Work from "../models/work"
import connectMongoDB from "./mongodb";

export const getProjects = async () => { 
    try{
        await connectMongoDB(); // Ensure connection is established
        const projects = await Project.find();
        const modifiedProjects = projects.map((project) => {
        let modifiedProject = { ...project, _id: project._id.toString()};
        // If you're working directly with MongoDB objects, you might need to convert the project to a plain object first
        // let modifiedProject = { ...project.toObject(), _id: project._id.toString() };
        return modifiedProject;}) 
    } catch(error) { 
        console.error("Error in Methods- Get Projects:", error);
    }
};

export const getJobs = async () => { 
    try { 
        const jobs = await Work.find()
        return jobs
    } catch (error) { 
        console.error("Error in Methods - get Jobs:", error)
    }
}

