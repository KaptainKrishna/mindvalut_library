const { Schema, model } = require("mongoose");

const complaintSchema = new Schema(
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

const ComplaintModel = model("Complaint", complaintSchema);

module.exports = ComplaintModel;
