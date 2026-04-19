import React from 'react'

const Complaints = () => {
   const data = [
     {
       sno: "1",
       fullname: "ram shiralkar",
       memberid: "45784",
       seatno: "12",
       message: "lorem ipsum is best for healatha kjkljdfkljf  askjdkasfj",
     },
     {
       sno: "1",
       fullname: "ram shiralkar",
       memberid: "45784",
       seatno: "12",
       message: "lorem ipsum is best for healatha kjkljdfkljf  askjdkasfj",
     },
     {
       sno: "1",
       fullname: "ram shiralkar",
       memberid: "45784",
       seatno: "12",
       message: "lorem ipsum is best for healatha kjkljdfkljf  askjdkasfj",
     },
     {
       sno: "1",
       fullname: "ram shiralkar",
       memberid: "45784",
       seatno: "12",
       message: "lorem ipsum is best for healatha kjkljdfkljf  askjdkasfj",
     },
     {
       sno: "1",
       fullname: "ram shiralkar",
       memberid: "45784",
       seatno: "12",
       message: "lorem ipsum is best for healatha kjkljdfkljf  askjdkasfj",
     },
     {
       sno: "1",
       fullname: "ram shiralkar",
       memberid: "45784",
       seatno: "12",
       message: "lorem ipsum is best for healatha kjkljdfkljf  askjdkasfj",
     },
     {
       sno: "1",
       fullname: "ram shiralkar",
       memberid: "45784",
       seatno: "12",
       message: "lorem ipsum is best for healatha kjkljdfkljf  askjdkasfj",
     },
   ];
  return (
    <div>
      <div className="p-4">
        {/* Wrap table in horizontal scroll for small screens */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-red-500">
              <tr className="text-left">
                <th className="px-4 py-3 text-sm font-medium text-white">
                  S/No.
                </th>
                <th className="px-4 py-3 text-sm font-medium text-white">
                  Fullname
                </th>
                <th className="px-4 py-3 text-sm font-medium text-white">
                  Member ID
                </th>
                <th className="px-4 py-3 text-sm font-medium text-white">
                  Seat No.
                </th>
                <th className="px-4 py-3 text-sm font-medium text-white">
                  Message
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {data.map((row, idx) => (
                <tr
                  key={row._id ?? idx}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-4 py-3 align-top text-sm text-gray-700">
                    {idx + 1}
                  </td>

                  <td className="px-4 py-3 align-top text-sm text-gray-800">
                    <div className="font-medium">{row.fullname}</div>
                  </td>

                  <td className="px-4 py-3 align-top text-sm text-gray-700">
                    {row.memberid}
                  </td>

                  <td className="px-4 py-3 align-top text-sm text-gray-700">
                    {row.seatno}
                  </td>

                  <td className="px-4 py-3 align-top text-sm text-gray-700 max-w-xl">
                    {/* Make message wrap and show nicely */}
                    <div className="whitespace-pre-wrap wrap-break-words text-sm">
                      {row.message}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Complaints