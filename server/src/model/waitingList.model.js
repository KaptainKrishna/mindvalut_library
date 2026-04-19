const { Schema, model } = require("mongoose");

const waitingStudentSchema = new Schema(
  {
    branch: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const WaitingStudentModel = model("WaitingStudent", waitingStudentSchema);
module.exports = WaitingStudentModel;
