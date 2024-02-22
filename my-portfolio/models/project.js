import mongoose from 'mongoose';


const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // This field is now required
  },
  description: { 
    type: String,
    required: true, // This field is now required
  },
  image: { 
    type: String,
    required: true, // This field is now required
  },
  hostedUrl: { 
    type: String,
    required: true, // This field is now required
  },
  githubUrl: { 
    type: String,
    required: true, // This field is now required
  },
  technologies: { 
    type: [String], // Specifying that this is an array of strings
    required: true, // This field is now required
  }
});

console.log(mongoose.models, "project model 1")

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

console.log(mongoose.models, "project model 2")

export default Project;
