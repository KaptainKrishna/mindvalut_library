import { toast } from "react-toastify";
import { useState } from "react";
import Footer from "./Footer";
import axios from "axios";

const Profile = () => {
  const profileModel = {
    role: "",
    email: "",
    password: "",
    memberid: "",
  };
  const [loginProfile, setLoginProfile] = useState(profileModel);

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setLoginProfile({
      ...loginProfile,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:8080/login",
        loginProfile,
      );
      setLoginProfile(profileModel);
      toast.success("Login successful");
      console.log(response.data);
    } catch (error) {
      console.log("error while logined", error);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white py-5 px-6 flex flex-col gap-4 w-full sm:w-10/12 md:w-6/12 lg:w-4/12 rounded-md shadow-md"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center ">
            Login
          </h1>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Select Your Role
            </label>
            <select value={loginProfile.role} onChange={handleChange} name="role" className="input">
              <option value="">Select Your Role</option>
              <option value="admin">Admin</option>
              <option value="member">Member</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              onChange={handleChange}
              value={loginProfile.email}
              name="email"
              type="email"
              className="input"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Member Id
            </label>
            <input
              onChange={handleChange}
              value={loginProfile.memberid}
              name="memberid"
              type="text"
              className="input"
              placeholder="Enter Your Member Id"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              onChange={handleChange}
              value={loginProfile.password}
              name="password"
              type="password"
              className="input"
              placeholder="Enter Your Password"
            />
          </div>

          <button className="bg-blue-500 rounded text-white px-5 py-2 hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
