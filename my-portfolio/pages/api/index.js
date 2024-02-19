import connectMongoDB from '../../libs/mongodb';
import Example from '../../models/example';

export default async function handler(req, res) {
    await connectMongoDB();
  
    if (req.method === 'POST') {
        const { name } = req.body;
        await Example.create({ name });
        return res.status(201).json({ message: "Created" });
    } else if (req.method === 'GET') {
        const example = await Example.find();
        return res.status(200).json({ example });
    } else {
        // Optionally handle other methods or return a 405 Method Not Allowed error
        return res.setHeader('Allow', ['GET', 'POST'])
                   .status(405)
                   .end(`Method ${req.method} Not Allowed`);
    }
}