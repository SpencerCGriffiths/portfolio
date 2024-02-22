import connectMongoDB from "../../libs/mongodb";
import Work from "../../models/work";

export default async function handler(req, res) {
    await connectMongoDB();
  
    if (req.method === 'POST') {
        const { location, role, dateFrom, dateTo, description } = req.body;
        await Work.create({ location, role, dateFrom, dateTo, description });
        return res.status(201).json({ message: "Created" });
    } else if (req.method === 'GET') {
        const jobs = await Work.find();
        return res.status(200).json({ jobs });
    } else {
        // Optionally handle other methods or return a 405 Method Not Allowed error
        return res.setHeader('Allow', ['GET', 'POST'])
                   .status(405)
                   .end(`Method ${req.method} Not Allowed`);
    }
}