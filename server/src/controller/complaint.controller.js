const ComplaintModel = require("../model/complaint.model");

const createComplaint = async (req, res) => {
  try {
    const user = await ComplaintModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createComplaint,
};
