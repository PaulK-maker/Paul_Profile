const mongoose = require('mongoose');
const Profile = require('./models/Profile');
require('dotenv').config();

const profileData = {
  name: "Paul Karanja",
  title: "Full Stack Software Engineer",
  location: "Portland, Oregon",
  email: "pkaranjaxn@gmail.com",
  phone: "515-525-3366",
  linkedin: "linkedin.com/in/Paul-M-Karanja",
  github: "github.com/PaulK-maker",
  summary: "Aspiring Software Engineer with a background in mechanical engineering, field service, and research. Recently graduated from Per Scholas Software Engineering program. Passionate about problem-solving, software development, and leveraging technology to drive innovation.",
  skills: [
    "HTML", "CSS", "JavaScript", "React",
    "Node.js", "Express", "MongoDB", "Python",
    "Git", "Scrum", "Product Management", "Tableau"
  ],
  education: [
    {
      school: "Per Scholas",
      degree: "Certificate",
      field: "Software Engineering",
      location: "Remote",
      year: "May 2025"
    },
    {
      school: "Iowa State University",
      degree: "Bachelor of Science",
      field: "Mechanical Engineering",
      location: "Ames, Iowa",
      year: "May 2020"
    },
    {
      school: "Dallas Data Science",
      degree: "Certification",
      field: "Data Science & Machine Learning",
      location: "Remote",
      year: "May 2024"
    }
  ],
  experience: [
    {
      company: "Tokyo Electron America / Intel Inc",
      title: "Field Service Engineer",
      location: "Hillsboro, Oregon",
      duration: "Jan 2021 - Dec 2023",
      bullets: [
        "Semiconductor equipment startup, sustaining, modification, repair and troubleshooting",
        "Read electrical and mechanical schematics",
        "Interpreted technical drawings"
      ]
    },
    {
      company: "Iowa State University - Computer Engineering Dept",
      title: "Research Assistant",
      location: "Ames, Iowa",
      duration: "Aug 2019 - May 2020",
      bullets: [
        "Utilized COMSOL Multiphysics (FEA) in geometric design and optimization of mechanical vibration dampers",
        "Developed and analyzed CFD (Computational Fluid Dynamics) models",
        "Conducted simulations of magnetorheological elastomers (MREs)",
        "Learned the program through self-guidance in 2 weeks and independently built a working simulation model"
      ]
    }
  ],
  projects: [
    {
      name: "Personal Profile App",
      description: "Full stack MERN application showcasing my skills, experience and education",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "github.com/PaulK-maker/paul-profile",
      live: ""
    }
  ]
};

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected...');

    // Clear existing data
    await Profile.deleteMany({});
    console.log('Cleared old profile data...');

    // Insert new data
    await Profile.create(profileData);
    console.log('✅ Profile seeded successfully!');

    mongoose.connection.close();
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
};

seedDB();