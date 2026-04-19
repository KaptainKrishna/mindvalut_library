import { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    fetchContactData();
  }, []);
  const contactModel = {
    fullname: "",
    email: "",
    mobile: "",
    message: "",
  };

  const [contactList, setContactList] = useState(contactModel);
  const [contactData, setContactData] = useState([]);
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setContactList({
      ...contactList,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/contact",
        contactList,
      );
      console.log(response.data);
      setContactData([...contactData, response.data]);
      setContactList(contactModel);
    } catch (error) {
      console.log(error, "error while saving contact");
    }
  };

  const fetchContactData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/contact");
      setContactData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error, "error while fetching contact");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-screen bg-gray-100 mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-3 px-6 flex flex-col gap-4 w-full sm:w-10/12 md:w-6/12 lg:w-4/12 rounded-md shadow-md mt-10 "
      >
        <div className="my-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 ">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base">
            We would love to hear from you!
          </p>
        </div>
        <input
          value={contactList.fullname}
          onChange={handleChange}
          type="text"
          name="fullname"
          placeholder="Enter Your Fullname"
          className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <input
          value={contactList.email}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Enter Your Email"
          className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <input
          value={contactList.mobile}
          onChange={handleChange}
          type="text"
          name="mobile"
          placeholder="Enter Your Mobile Number"
          className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <textarea
          value={contactList.message}
          onChange={handleChange}
          name="message"
          rows="4"
          placeholder="Message"
          className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        ></textarea>

        <button className="bg-blue-500 rounded text-white px-5 py-2 hover:bg-blue-600 transition">
          Submit
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default Contact;
