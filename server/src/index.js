const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("DB Error:", err));

const express = require("express");
const app = express();

const cors = require("cors");
const {
  createWaitingStudent,
  getWaitingStudent,
  deleteWaitingStudent,
} = require("./controller/waitingList.controller");
const {
  createContact,
  fetchContact,
  deleteContact,
} = require("./controller/contact.controller");
const {
  createNewStudent,
  getNewStudent,
  loginStudent,
} = require("./controller/newStudent.controller");
const { createComplaint } = require("./controller/complaint.controller");
const { createSuggestion } = require("./controller/suggestion.controller");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/waitingstudent", createWaitingStudent);
app.get("/waitingstudent", getWaitingStudent);
app.delete("/waitingstudent/:id",deleteWaitingStudent)

app.post("/contact", createContact);
app.get("/contact", fetchContact);
app.delete("/contact/:id", deleteContact);

app.post("/newstudent", createNewStudent);
app.get("/newstudent", getNewStudent);
app.post("/login", loginStudent);

app.post("/complaint", createComplaint);
app.post("/suggestion", createSuggestion);

app.listen(process.env.PORT || 8080, () => {
  console.log(`port is running on ${process.env.PORT}`);
});
