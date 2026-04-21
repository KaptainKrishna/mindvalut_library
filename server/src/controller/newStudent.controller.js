const NewStudentModel = require("../model/newStudent.model");
const bcrypt = require("bcryptjs");

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

const loginStudent = async (req, res) => {
  try {
    const { email, password, memberid } = req.body;
    const user = await NewStudentModel.findOne({ email: email });

    if (!user) return res.status(404).json({ message: "User doesn`t exist" });

    const isLogin = await bcrypt.compare(password, user.password);

    if (!isLogin) return res.status(401).json({ message: "Invalid User" });
    res.status(200).json({ message: "Login successfull", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNewStudent,
  getNewStudent,
  loginStudent,
};
