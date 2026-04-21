import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const NewStudents = () => {
  const location = useLocation();
  const pathname = location.pathname
    .split("/")
    .filter(Boolean)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" > ");

  useEffect(() => {
    getNewStudent();
  }, []);

  const newStudentModel = {
    fullname: "",
    email: "",
    contact: "",
    password: "",
    dob: "",
    doj: "",
    address: "",
    branch: "",
    stream: "",
    seatno: "",
    memberid: "",
    gender: "",
  };

  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState("animate__backInRight");
  const [newStudent, setNewStudent] = useState(newStudentModel);
  const [newStudentData, setNewStudentData] = useState([]);

  const openForm = () => {
    setAnimate("animate__backInRight");
    setOpen(true);
  };

  const closeForm = () => {
    setAnimate("animate__backOutRight");
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:8080/newstudent",
        newStudent,
      );
      setNewStudentData([...newStudentData, response.data]);
      setNewStudent(newStudentModel);
      setOpen(false);
    } catch (error) {
      console.log(error, "error in new student registration");
    }
  };

  const getNewStudent = async () => {
    try {
      const response = await axios.get("http://localhost:8080/newstudent");
      console.log(response.data);
      setNewStudentData(response.data);
    } catch (error) {
      console.log(error, "error while getting new student ");
    }
  };

  return (
    <div className="min-h-screen relative">
      <h1 className="text-md font-semibold text-gray-700 mt-2">{pathname}</h1>
      <button
        onClick={openForm}
        className="bg-linear-to-r from-indigo-500 to-purple-600 text-white px-3 py-2 rounded font-semibold hover:cursor-pointer ml-4 mt-5 "
      >
        Add New Student
      </button>

      <div className="p-4">
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border border-gray-200 text-sm">
            {/* Table Head */}
            <thead className="bg-linear-to-r from-indigo-500 to-purple-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">S/NO.</th>
                <th className="px-4 py-3 text-left">Full Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Contact</th>
                <th className="px-4 py-3 text-left">DOB</th>
                <th className="px-4 py-3 text-left">DOJ</th>
                <th className="px-4 py-3 text-left">Address</th>
                <th className="px-4 py-3 text-left">Gender</th>
                <th className="px-4 py-3 text-left">Stream</th>
                <th className="px-4 py-3 text-left">Branch</th>
                <th className="px-4 py-3 text-left">Member ID</th>
                <th className="px-4 py-3 text-left">Seat No</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {newStudentData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-3">{index + 1} </td>
                  <td className="px-4 py-3">{item.fullname}</td>
                  <td className="px-4 py-3">{item.email}</td>
                  <td className="px-4 py-3">{item.contact}</td>
                  <td className="px-4 py-3">{item.dob}</td>
                  <td className="px-4 py-3">{item.doj}</td>
                  <td className="px-4 py-3 truncate max-w-37.5">
                    {item.address}
                  </td>
                  <td className="px-4 py-3">{item.gender}</td>
                  <td className="px-4 py-3">{item.stream}</td>
                  <td className="px-4 py-3">{item.branch}</td>
                  <td className="px-4 py-3">{item.memberid}</td>
                  <td className="px-4 py-3">{item.seatno}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {open && (
          <div
            className={`absolute w-full min-h-screen top-0 right-0 max-w-5xl bg-white shadow-xl rounded-2xl p-6 animate__animated ${animate}`}
          >
            <button onClick={closeForm}>
              <i className="ri-close-circle-line text-lg absolute top-3 right-4 text-indigo-600 hover:cursor-pointer"></i>
            </button>
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
              Member Registration
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 "
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  onChange={handleChange}
                  value={newStudent.fullname}
                  name="fullname"
                  type="text"
                  className="input"
                  placeholder="Enter full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  value={newStudent.email}
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Enter email"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Contact
                </label>
                <input
                  onChange={handleChange}
                  value={newStudent.contact}
                  name="contact"
                  type="text"
                  className="input"
                  placeholder="Enter contact"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  value={newStudent.password}
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Enter password"
                />
              </div>

              {/* DOB */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  onChange={handleChange}
                  value={newStudent.dob}
                  name="dob"
                  type="date"
                  className="input"
                />
              </div>

              {/* DOJ */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Date of Joining
                </label>
                <input
                  value={newStudent.doj}
                  onChange={handleChange}
                  name="doj"
                  type="date"
                  className="input"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  onChange={handleChange}
                  value={newStudent.gender}
                  name="gender"
                  className="input"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Stream */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Stream
                </label>
                <input
                  value={newStudent.stream}
                  onChange={handleChange}
                  name="stream"
                  type="text"
                  className="input"
                  placeholder="Enter stream"
                />
              </div>

              {/* Branch */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Branch
                </label>
                <select
                  onChange={handleChange}
                  value={newStudent.branch}
                  name="branch"
                  className="input"
                >
                  <option value="">Select Branch</option>
                  <option value="karvenagar">Karvenagar</option>
                  <option value="kothrud">Kothrud</option>
                  <option value="hadapsar">Hadapsar</option>
                  <option value="shivajinagar">Shivajinagar</option>
                </select>
              </div>

              {/* Member ID */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Member ID
                </label>
                <input
                  onChange={handleChange}
                  value={newStudent.memberid}
                  name="memberid"
                  type="text"
                  className="input"
                  placeholder="Enter member ID"
                />
              </div>

              {/* Seat No */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Seat No
                </label>
                <input
                  onChange={handleChange}
                  value={newStudent.seatno}
                  name="seatno"
                  type="text"
                  className="input"
                  placeholder="Enter seat no"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Your Role
                </label>
                <select name="role" className="input">
                  <option value="">Select Your Role</option>
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                </select>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  onChange={handleChange}
                  value={newStudent.address}
                  name="address"
                  rows="3"
                  className="input"
                  placeholder="Enter address"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition shadow">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewStudents;
