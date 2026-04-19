import Footer from "./Footer";

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
        <form className="bg-white py-5 px-6 flex flex-col gap-4 w-full sm:w-10/12 md:w-6/12 lg:w-4/12 rounded-md shadow-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center ">
            Login
          </h1>
          <select
            name="select"
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Select Your Role</option>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>

          <input
            type="text"
            name="member-id"
            placeholder="Member Id"
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <input
            type="number"
            name="contact"
            placeholder="Contact"
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

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
