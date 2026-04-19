import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  const menus = [
    { icon: "ri-home-4-line", label: "Dashboard", link: "/admin/dashboard" },
    {
      icon: "ri-group-line",
      label: "Old Students",
      link: "/admin/oldstudents",
    },
    {
      icon: "ri-graduation-cap-line",
      label: "New Students",
      link: "/admin/newstudents",
    },
    {
      icon: "ri-phone-line",
      label: "Contact",
      link: "/admin/contact",
    },

    {
      icon: "ri-money-rupee-circle-line",
      label: "Payments",
      link: "/admin/payments",
    },
    {
      icon: "ri-timer-line",
      label: "Waiting List",
      link: "/admin/waitinglist",
    },
    {
      icon: "ri-armchair-line",
      label: "Seats Availability",
      link: "/admin/seats",
    },
    {
      icon: "ri-edit-2-line",
      label: "Suggestions",
      link: "/admin/suggestions",
    },
    {
      icon: "ri-message-3-line",
      label: "Complaints",
      link: "/admin/complaints",
    },
    { icon: "ri-star-line", label: "Rating", link: "/admin/rating" },
  ];
  return (
    <div className="bg-gray-100 flex mt-16 h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar */}
      <div className="bg-linear-to-b from-blue-500 to-cyan-400 w-72 p-4 flex flex-col gap-3 overflow-y-auto">
        {menus.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className="bg-white p-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition"
          >
            <i className={`${item.icon} mr-3`}></i>
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
