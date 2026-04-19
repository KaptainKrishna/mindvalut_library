const { Schema, model } = require("mongoose");

const suggestionSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    memberid: {
      type: String,
      required: true,
    },
    seatno: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const SuggestionModel = model("Suggestion", suggestionSchema);

module.exports = SuggestionModel;
