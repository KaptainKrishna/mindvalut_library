const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const newStudentSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    doj: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    stream: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      type: String,
      required: true,
    },
    memberid: {
      type: String,
      required: true,
      trim: true,
    },
    seatno: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "member"],
      default: "member",
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

newStudentSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    next(error);
  }
});

const NewStudentModel = model("NewStudent", newStudentSchema);

module.exports = NewStudentModel;
