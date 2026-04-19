import React from "react";

const OldStudents = () => {
  return (
    <div>
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
              <tr className="border-b hover:bg-gray-100 transition">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">Ram Shiralkar</td>
                <td className="px-4 py-3">ram@gmail.com</td>
                <td className="px-4 py-3">1234567890</td>
                <td className="px-4 py-3">01/01/2000</td>
                <td className="px-4 py-3">01/06/2024</td>
                <td className="px-4 py-3 truncate max-w-37.5">
                  Karvenagar, Pune
                </td>
                <td className="px-4 py-3">Male</td>
                <td className="px-4 py-3">BSc</td>
                <td className="px-4 py-3">Karvenagar</td>
                <td className="px-4 py-3">M123</td>
                <td className="px-4 py-3">A1</td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OldStudents;
