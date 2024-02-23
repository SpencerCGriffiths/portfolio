import connectMongoDB from "../../libs/mongodb";
import Project from "../../models/project";

export default async function handler(req, res) {
    await connectMongoDB();
  
    if (req.method === 'POST') {
        const { name } = req.body;
        await Project.create({ name });
        return res.status(201).json({ message: "Created" });
    } else if (req.method === 'GET') {
        const project = await Project.find();
        return res.status(200).json({ project });
    } else {
        // Optionally handle other methods or return a 405 Method Not Allowed error
        return res.setHeader('Allow', ['GET', 'POST'])
                   .status(405)
                   .end(`Method ${req.method} Not Allowed`);
    }
}