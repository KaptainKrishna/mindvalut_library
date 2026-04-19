const SuggestionModel = require("../model/suggestion.model");

const createSuggestion = async (req, res) => {
  try {
    const user = await SuggestionModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSuggestion,
};
