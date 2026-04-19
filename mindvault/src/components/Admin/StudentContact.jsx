import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentContact = () => {
  useEffect(() => {
    getContactData();
  }, []);
  const [contactData, setContactData] = useState([]);

  const getContactData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/contact");
      setContactData(response.data);
    } catch (error) {
      console.log(error, "error while fetching contact data");
    }
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          {/* Table Head */}
          <thead className="bg-gradient-to-r from-rose-500 to-purple-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">S/No</th>
              <th className="px-4 py-3 text-left">Full Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Mobile No</th>
              <th className="px-4 py-3 text-left">Message</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {contactData.length > 0 ? (
              contactData.map((item, index) => (
                <tr
                  key={item._id || index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{item.fullname}</td>
                  <td className="px-4 py-3">{item.email}</td>
                  <td className="px-4 py-3">{item.mobile}</td>
                  <td className="px-4 py-3 max-w-[200px] truncate">
                    {item.message}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentContact;
