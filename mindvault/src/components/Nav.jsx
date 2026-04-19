import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const menus = [
    { label: "Mindvault", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Profile", link: "/profile" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-8 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <div className="leading-tight text-indigo-600">
            <h1 className="font-bold text-2xl sm:text-lg">Mindvault Library</h1>
            <p className=" text-xl font-semibold sm:text-xs">
              ---Think. Learn. Evolve.---
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 items-center">
          {menus.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-md text-sm transition ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

         
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-indigo-600"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 bg-white rounded-lg shadow p-3">
          {menus.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm transition ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-indigo-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

        
        </div>
      </div>
    </div>
  );
};

export default Nav;
