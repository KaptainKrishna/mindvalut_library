const SeatAvailability = () => {
  return (
    <div className="bg-gray-100 h-screen w-full mt-20">
      <h1 className="text-center p-4">seat Availability</h1>
      <div className="space-x-5">
        <button className="bg-blue-500 text-white px-3 py-2 rounded">
          KarveNagar
        </button>
        <button className="bg-indigo-500 text-white px-3 py-2 rounded">
          Bhosari
        </button>
        <button className="bg-purple-500 text-white px-3 py-2 rounded">
          Talwade
        </button>
      </div>

      <div className="grid lg:grid-cols-9  md:grid-cols-5 gap-4 p-5">
        {Array(20)
          .fill("ram")
          .map((item, index) => (
            <div className="w-30 h-15 bg-green-400 rounded shadow"></div>
          ))}
      </div>
    </div>
  );
};

export default SeatAvailability;
