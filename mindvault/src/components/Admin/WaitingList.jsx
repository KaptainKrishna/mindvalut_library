import { useState, useEffect } from "react";
import axios from "axios";

const WaitingList = () => {
  const [waitingList, setWaitingList] = useState([]);
  useEffect(() => {
    handleList();
  }, []);

  const handleList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/waitingstudent");
      setWaitingList(response.data);
    } catch (error) {
      console.log(error, "fetching error");
    }
  };
  return (
    <div>
      <h1 className="text-xl font-semibold p-5"> Waiting List </h1>
      <div className="p-5">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto ">
          <table className="w-full border">
            <thead className="bg-indigo-500 text-white">
              <tr>
                <th className="p-3">S/NO</th>
                <th className="p-3">Full Name</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Joining Date</th>
                <th className="p-3">Branch</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {waitingList.map((item, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="p-3">{index + 1} </td>
                  <td className="p-3">{item.fullname}</td>
                  <td className="p-3">{item.contact}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.branch}</td>
                  <td className="p-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition hover:cursor-pointer">
                        Add Student
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition hover:cursor-pointer">
                        Remove Student
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {waitingList.map((item, index) => (
            <div className="p-4 rounded-lg shadow bg-white">
              <p>
                <b>S/NO:</b> {index + 1}
              </p>
              <p>
                <b>Name:</b> {item.fullname}
              </p>
              <p>
                <b>Contact:</b> {item.contact}
              </p>
              <p>
                <b>Joining Date:</b> {item.date}
              </p>
              <p>
                <b>Branch:</b> {item.branch}
              </p>
              <p>
                <b>Action:</b>
                <div className="flex flex-col sm:flex-row gap-2 py-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition hover:cursor-pointer">
                    Add Student
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition hover:cursor-pointer">
                    Remove Student
                  </button>
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaitingList;
