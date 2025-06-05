import React from 'react'

function Table3() {
  return (
    <div>
         <h1 className="font-bold text-[18px] text-black mt-5 text-center">CGPA To Percentage in 4.0 Grade Points
</h1>
      <div className="overflow-x-auto p-4">
      <table className="table-auto w-full border border-gray-300 border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-black px-4 py-2 text-center">CGPA(4.0 Grade)</th>
            <th className="border border-black px-4 py-2 text-center">Percentage in 4.0 Grade Scale
</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border border-black px-4 py-2">4.0 CGPA</td>
            <td className="border border-black px-4 py-2">100%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">3.5 CGPA</td>
            <td className="border border-black px-4 py-2">87.50%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">3.0 CGPA</td>
            <td className="border border-black px-4 py-2">75%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">2.5 CGPA</td>
            <td className="border border-black px-4 py-2">62.50%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">2.0 CGPA</td>
            <td className="border border-black px-4 py-2">50%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">1.5 CGPA</td>
            <td className="border border-black px-4 py-2">37.5%</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">1.0 CGPA</td>
            <td className="border border-black px-4 py-2">25%</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Table3