const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  title: String,
  location: String,
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  summary: String,
  skills: [String],
  education: [
    {
      school: String,
      degree: String,
      field: String,
      location: String,
      year: String
    }
  ],
  experience: [
    {
      company: String,
      title: String,
      location: String,
      duration: String,
      bullets: [String]
    }
  ],
  projects: [
    {
      name: String,
      description: String,
      tech: [String],
      github: String,
      live: String
    }
  ]
});

module.exports = mongoose.model('Profile', ProfileSchema);