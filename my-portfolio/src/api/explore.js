import connectMongoDB from "../../libs/mongodb";
import Work from "../../models/work";
import Project from "../../models/project";

export default async function handler(req, res) {
    await connectMongoDB();
  
    if (req.method === 'GET') {
        // Fetch all work and project entries
        const jobs = await Work.find();
        const project = await Project.find();

        // Return combined data in the response
        return res.status(200).json({ jobs, project });
        
    } else if (req.method === 'POST') {
        // Handle POST requests optionally if needed
        return res.status(400).json({ message: "POST requests are not supported on this endpoint." });
    } else {
        // Return a 405 Method Not Allowed for other HTTP methods
        return res.setHeader('Allow', ['GET'])
                   .status(405)
                   .end(`Method ${req.method} Not Allowed`);
    }
}
