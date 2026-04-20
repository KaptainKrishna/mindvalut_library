import Footer from "./Footer";

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
        <form className="bg-white py-5 px-6 flex flex-col gap-4 w-full sm:w-10/12 md:w-6/12 lg:w-4/12 rounded-md shadow-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center ">
            Login
          </h1>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Select Your Role
            </label>
            <select name="branch" className="input">
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
              // onChange={handleChange}
              // value={newStudent.email}
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
              // onChange={handleChange}
              // value={newStudent.email}
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
              // onChange={handleChange}
              // value={newStudent.email}
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
