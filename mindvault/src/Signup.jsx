import React, { useState } from "react";

const Signup = () => {
  const handleChange = (e) => {
    alert();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your fullname (Admin)"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Contact</label>
          <input
            type="number"
            name="contact"
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Member ID</label>
          <input
            type="text"
            name="memberid"
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            onChange={handleChange}
            placeholder="Enter your confirm password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500"
          />
        </div>
        <button
          value={"Register"}
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded cursor-pointer hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
