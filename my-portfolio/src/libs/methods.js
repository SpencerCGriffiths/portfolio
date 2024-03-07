"use server"

import Project from "../models/project";
import Work from "../models/work";
import connectMongoDB from "./mongodb";

export const getProjects = async () => { 
    try{
        await connectMongoDB(); // Ensure connection is established
        const projects = await Project.find();
        const modifiedProjects = projects.map((project) => {
            let newPro = {...project.toObject(), _id: project._id.toString()};
            return newPro;
        });
        return modifiedProjects
    } catch(error) { 
        console.error("Error in Methods- Get Projects:", error);
    }
};

export const getJobs = async () => { 
    try {
        const jobs = await Work.find()
        const modifiedJobs = jobs.map((job) => {
            let newJob = {...job.toObject(), _id: job._id.toString()};
            return newJob;
        });
        return modifiedJobs
    } catch (error) { 
        console.error("Error in Methods - get Jobs:", error)
    }
}

