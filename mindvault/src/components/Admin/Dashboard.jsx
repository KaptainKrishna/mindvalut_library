import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const pathname = location.pathname
    .split("/")
    .filter(Boolean)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" > ");

  const menu = [
    {
      color: "bg-gradient-to-r from-indigo-500 to-purple-600",
      label: "Old Students",
      icon: <i className="ri-group-line text-2xl font-semibold"></i>,
      // data: oldStudents.length,
    },
    {
      color: "bg-gradient-to-br from-green-500 to-teal-400",
      label: "New Students",
      icon: <i className="ri-graduation-cap-fill text-2xl font-semibold"></i>,
      // data: newStudents.length,
    },
    {
      color: "bg-gradient-to-r from-pink-500 to-yellow-500",
      label: "Contacts",
      icon: <i className="ri-contacts-book-fill text-2xl font-semibold"></i>,
      // data: contacts.length,
    },
    {
      color: "bg-gradient-to-r from-green-300 to-green-500",
      label: "Payments",
      icon: (
        <i className="ri-money-rupee-circle-line text-2xl font-semibold"></i>
      ),
    },
    {
      color: " bg-gradient-to-r from-amber-400 to-orange-600",
      label: "Waiting List",
      icon: <i className="ri-timer-line text-2xl font-semibold"></i>,
      // data: waitingList.length,
    },
    {
      color: "bg-gradient-to-r from-green-300 to-blue-500",
      label: "Seat Available",
      icon: <i className="ri-sofa-fill text-2xl font-semibold"></i>,
    },
    {
      color: "bg-gradient-to-r from-sky-500 to-indigo-500",
      label: "Suggestions",
      icon: <i className="ri-article-fill text-2xl font-semibold"></i>,
      // data: suggestions.length,
    },
    {
      color: "bg-gradient-to-r from-red-400 to-red-600",
      label: "Complaints",
      icon: <i className="ri-inbox-archive-fill text-2xl font-semibold"></i>,
      // data: complaints.length,
    },
  ];
  return (
    <div>
      <h1 className="text-md font-semibold text-gray-600 mt-2">{pathname}</h1>
      <div className="flex flex-wrap gap-5 mt-10 ml-5 ">
        {menu.map((item, index) => (
          <div
            key={index}
            className={`w-55 h-25 p-4 rounded-lg ${item.color} flex gap-3 items-center`}
          >
            <div className="w-15 h-15 bg-white rounded-full flex justify-center items-center">
              {item.icon}
            </div>
            <div className="text-white">
              <h1 className="text-lg font-semibold">{item.label}</h1>
              <p className="text-center font-semibold">458</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
