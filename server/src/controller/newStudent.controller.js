const NewStudentModel = require("../model/newStudent.model");

const createNewStudent = async (req, res) => {
  try {
    const user = await NewStudentModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getNewStudent = async (req, res) => {
  try {
    const user = await NewStudentModel.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNewStudent,
  getNewStudent,
};
