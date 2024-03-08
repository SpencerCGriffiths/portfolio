import mongoose from "mongoose"

const workSchema = new mongoose.Schema({
  location: { 
    type: String,
    required: true, // This field is now required
  },
  role: { 
    type: String,
    required: true, // This field is now required
  },
  dateFrom: { 
    type: String,
    required: true, // This field is now required
  },
  dateTo: { 
    type: String,
    required: true, // This field is now required
  },
  description: { 
    type: [String], // Specifying that this is an array of strings
    required: true, // This field is now required
  }, 
  subRole: { 
    type: [String], // Specifying that this is an array of strings
    required: true, // This field is now required
  },
  index: { 
    type: [Number],
    required: true,
  }
});


const Work = mongoose.models.Work || mongoose.model('Work', workSchema);

export default Work;
