import React from 'react'

function Table() {
  return (
    <div>
        <h1 className="font-bold text-[20px] text-[#008080] mt-8">
          CGPA to Percentage Conversion table
        </h1>
        <h1 className="font-bold text-[18px] text-black mt-5 text-center">CGPA To Percentage in 10 Grade Points
</h1>
      <div className="overflow-x-auto p-4">
      <table className="table-auto w-full border border-gray-300 border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-black px-4 py-2 text-center">CGPA(10 Grade)</th>
            <th className="border border-black px-4 py-2 text-center">Percentage in 10 Grade Scale </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border border-black px-4 py-2">10.0 CGPA</td>
            <td className="border border-black px-4 py-2">95% - 100%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">9.5 CGPA</td>
            <td className="border border-black px-4 py-2">90.25%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">9.0 CGPA</td>
            <td className="border border-black px-4 py-2">85.50%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">8.5 CGPA</td>
            <td className="border border-black px-4 py-2">80.75%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">8.0 CGPA</td>
            <td className="border border-black px-4 py-2">76%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">7.5 CGPA</td>
            <td className="border border-black px-4 py-2">71.25%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">7.0 CGPA</td>
            <td className="border border-black px-4 py-2">66.50%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">6.5 CGPA</td>
            <td className="border border-black px-4 py-2">61.75%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">6.0 CGPA</td>
            <td className="border border-black px-4 py-2">57%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">5.5 CGPA</td>
            <td className="border border-black px-4 py-2">52.25%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">5.0 CGPA</td>
            <td className="border border-black px-4 py-2">47.50%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">4.5 CGPA</td>
            <td className="border border-black px-4 py-2">42.75%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">4.0 CGPA</td>
            <td className="border border-black px-4 py-2">38%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">3.5 CGPA</td>
            <td className="border border-black px-4 py-2">33.25%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">3.0 CGPA</td>
            <td className="border border-black px-4 py-2">28.50%</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Table