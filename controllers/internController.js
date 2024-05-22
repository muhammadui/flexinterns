const Intern = require("../models/Intern");

// Get all interns
const getAllInterns = async (req, res) => {
  try {
    const interns = await Intern.find();
    res.status(200).json(interns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new intern
const createIntern = async (req, res) => {
  const {
    name,
    email,
    roleApplied,
    educationalLevel,
    skillsLevel,
    portfolio,
    skillsSet,
  } = req.body;
  const resume = req.file ? req.file.path : null;

  if (!resume) {
    return res.status(400).json({ message: "Resume upload is required" });
  }

  const intern = new Intern({
    name,
    email,
    roleApplied,
    educationalLevel,
    resume,
    skillsLevel,
    portfolio,
    skillsSet,
  });

  try {
    const newIntern = await intern.save();
    res.status(201).json(newIntern);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllInterns,
  createIntern,
};
