import { useState } from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const waitingModel = {
    branch: "",
    fullname: "",
    contact: "",
    date: "",
  };
  const [open, setOpen] = useState(false);
  const [waitingList, setWaitingList] = useState(waitingModel);
  const [waitingData, setWaitingData] = useState([]);
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setWaitingList({
      ...waitingList,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/waitingstudent",
        waitingList,
      );
      console.log(response.data);
      setWaitingData([...waitingData, waitingList]);
      setWaitingList(waitingModel);
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const menu = [
    {
      img: "images/locker.png",
      label: " Compartment With LOCKER Facility",
      info: "Individual study spaces designed for focus and privacy.",
    },
    {
      img: "images/peace.png",
      label: " Peaceful Ambience",
      info: "Quiet and serene environment for uninterrupted studying.",
    },
    {
      img: "images/wifi.png",
      label: " Free Wi-Fi",
      info: "High-speed internet access for research and study needs",
    },
    {
      img: "images/charging.png",
      label: "Independent Charging Socket",
      info: "Convenient power outlets for your electronic devices.",
    },
    {
      img: "images/newspaper.png",
      label: " News Paper",
      info: "Access to newspapers for staying updated with current affairs.",
    },
    {
      img: "images/seat.png",
      label: " Reserve Seat (On Demand)",
      info: "Option to reserve a seat for guaranteed availability.",
    },
    {
      img: "images/water.png",
      label: " Filter Water",
      info: "Complimentary filtered water for hydration needs.",
    },
    {
      img: "images/24-7.png",
      label: "24x7 Open",
      info: "Round-the-clock access for flexible study hours.",
    },
  ];

  const gallery = [
    {
      img: "images/mv1.jpg",
    },
    {
      img: "images/mv2.jpg",
    },
    {
      img: "images/mv3.jpg",
    },
    {
      img: "images/mv4.jpg",
    },
    {
      img: "images/mv5.jpg",
    },
    {
      img: "images/mv6.jpg",
    },
  ];
  return (
    <div>
      <div className="flex justify-between p-20">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-bold text-[rgb(28,60,135)]">
            Welcome to Mindvault Library
          </h1>
          <p className="text-xl">Never Stop Reading!!</p>
          <p className="text-xl">
            A place where you can read, learn, and grow. Join our waiting list
            <br />
            to get notified when we open our doors. Or contact us for more
            <br />
            information.
          </p>
          <div className="flex flex-col gap-4  sm:flex-row w-full sm:w-auto">
            <button
              onClick={() => setOpen(true)}
              className="px-7 py-3 bg-green-700 font-semibold text-white rounded-xl hover:cursor-pointer"
            >
              JOIN WAITING LIST
            </button>

            <NavLink
              to={"seat-availability"}
              className="px-7 py-3 bg-blue-600 font-semibold text-white text-center rounded-xl hover:cursor-pointer"
            >
              CHECK SEAT AVAILABILITY
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/hero.jpg"
            alt="hero img"
            className="transition-transform duration-300 hover:scale-110 "
          />
        </div>
      </div>
      <div className="bg-gray-100 p-5">
        <h1 className="md:text-4xl  text-2xl font-bold text-[rgb(28,60,135)] text-center p-8">
          Ambition Library Features
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {menu.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-5 text-center bg-white rounded-xl shadow-lg transform transition hover:scale-105"
            >
              <img
                src={item.img}
                alt="locker"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />

              <h1 className="text-lg sm:text-xl md:text-2xl text-[rgb(34,70,173)] font-semibold">
                {item.label}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-center text-3xl font-bold text-[rgb(44,61,116)] my-10">
          Inside Mindvault Library
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <img
              key={index}
              src={item.img}
              className="w-full h-60 object-cover"
            />
          ))}
        </div>
      </div>

      {/* waiting List */}

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4 z-50">
          <div className="w-full max-w-md bg-white p-4 sm:p-6 rounded-lg shadow-lg relative ">
            <h1 className="text-center font-semibold text-xl">
              Join Waiting List
            </h1>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black cursor-pointer"
            >
              <i className="ri-close-circle-line"></i>
            </button>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-4 sm:p-6 rounded-md"
            >
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Select Branch</label>
                <select
                  value={waitingList.branch}
                  onChange={handleChange}
                  name="branch"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select Branch</option>
                  <option value="branch1">Branch 1</option>
                  <option value="branch2">Branch 2</option>
                  <option value="branch3">Branch 3</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold">Fullname</label>
                <input
                  value={waitingList.fullname}
                  onChange={handleChange}
                  name="fullname"
                  type="text"
                  placeholder="Enter Your Fullname"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Contact </label>
                <input
                  value={waitingList.contact}
                  onChange={handleChange}
                  name="contact"
                  type="tel"
                  placeholder="Enter your Contact Number"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold">Date of Joining</label>
                <input
                  value={waitingList.date}
                  onChange={handleChange}
                  type="date"
                  name="date"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <button className="bg-blue-500 text-white px-3 py-2 rounded font-semibold hover:bg-blue-600 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
