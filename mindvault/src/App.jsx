import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import SeatAvailability from "./components/SeatAvailabality";
import Error from "./components/Error";
import Dashboard from "./components/Admin/Dashboard";
import Layout from "./components/Admin/Layout";
import WaitingList from "./components/Admin/WaitingList";
import Payments from "./components/Admin/Payments";
import NewStudents from "./components/Admin/NewStudents";
import OldStudents from "./components/Admin/OldStudents";
import Complaints from "./components/Admin/Complaints";
import Suggestions from "./components/Admin/Suggestions";
import StudentContact from "./components/Admin/StudentContact";
import Rating from "./components/Admin/Rating";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/seat-availability" element={<SeatAvailability />} />
        <Route path="admin/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="waitinglist" element={<WaitingList />} />
          <Route path="payments" element={<Payments />} />
          <Route path="newstudents" element={<NewStudents />} />
          <Route path="oldstudents" element={<OldStudents />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="suggestions" element={<Suggestions />} />
          <Route path="contact" element={<StudentContact />} />
          <Route path="rating" element={<Rating />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;
