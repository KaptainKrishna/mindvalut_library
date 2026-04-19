const WaitingStudentModel = require("../model/waitingList.model");

const createWaitingStudent = async (req, res) => {
  try {
    const user = await WaitingStudentModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWaitingStudent = async (req, res) => {
  try {
    const user = await WaitingStudentModel.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWaitingStudent,
  getWaitingStudent,
};
