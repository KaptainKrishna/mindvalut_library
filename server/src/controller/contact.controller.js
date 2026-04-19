const ContactModel = require("../model/contact.model");

const createContact = async (req, res) => {
  try {
    const user = await ContactModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const fetchContact = async (req, res) => {
  try {
    const user = await ContactModel.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const {id}=req.params;
    const user = await ContactModel.findByIdAndDelete(id);
    if(!user){
      return res.status(401).json({message:"Student not exists"})
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContact,
  fetchContact,deleteContact
};
