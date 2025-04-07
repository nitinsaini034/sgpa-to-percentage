import React, { useState } from 'react';
import Navbar from './Navbar';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FcRight } from "react-icons/fc";
import { NavLink } from 'react-router-dom'


import Footer from './Footer';

function SCGP() {
  const [semesters, setSemesters] = useState([{ id: 1, value: '' }, { id: 2, value: '' }]);
  const [cgpa, setCgpa] = useState(null);
  const [gradeScale, setGradeScale] = useState('');

  const AddSemester = () => {
    setSemesters([...semesters, { id: semesters.length + 1, value: '' }]);
  };

  const RemoveSemester = (id) => {
    if (semesters.length > 2) {
      setSemesters(semesters.filter(sem => sem.id !== id));
    }
  };

  const handleInputChange = (id, value) => {
    const maxGrade = parseFloat(gradeScale) || 10;
    if (value === '' || (parseFloat(value) <= maxGrade && parseFloat(value) >= 0)) {
      setSemesters(semesters.map(sem => sem.id === id ? { ...sem, value: value } : sem));
    }
  };

  const Calculate = () => {
    if (!gradeScale) {
      alert('Please select a grade scale before calculating.');
      return;
    }
    const validSgpas = semesters.map(sem => parseFloat(sem.value)).filter(val => !isNaN(val));
    if (validSgpas.length > 0) {
      const calculatedCgpa = validSgpas.reduce((acc, val) => acc + val, 0) / validSgpas.length;
      setCgpa(calculatedCgpa.toFixed(2));
    } else {
      setCgpa(null);
    }
  };

  const Reset = () => {
    setSemesters([{ id: 1, value: '' }, { id: 2, value: '' }]);
    setCgpa(null);
    setGradeScale('');
  }

  return (
    <div className='bg-[#fff] w-[585px] md:w-full h-auto mt-22'>
      <div className='max-w-full md:max-w-3xl p-3 md:p-5 mx-auto'>
        <h1 className='text-3xl sm:text-2xl md:text-5xl text-[#01161e] font-bold text-center'>SGPA TO CGPA CALCULATOR</h1>
        <div className='mt-5 md:mt-10'>
          <div className='h-auto mt-5 w-full border-3 p-5 mx-auto rounded-2xl'>
            <div className='mt-3 sm:mt-5 text-center'>
              <label className='text-base sm:text-lg md:text-2xl font-bold'>Select Grade Scale:</label>
              <select
                className='border p-2 rounded-lg w-[200px] text-base sm:text-xl mt-1 sm:mt-0'
                value={gradeScale}
                onChange={(e) => setGradeScale(e.target.value)}
              >
                <option value=''>Select</option>
                <option value='4.0'>4.0</option>
                <option value='5.0'>5.0</option>
                <option value='10.0'>10.0</option>
              </select>
            </div>
            <h1 className='text-xl md:text-2xl font-bold mt-5 md:mt-5 text-center'>Your CGPA: {cgpa !== null ? cgpa : '0'}</h1>

            {semesters.map((sem) => (
              <div
                key={sem.id}
                className='mt-5 sm:mt-10 flex flex-col items-start gap-3'
              >
                <div className='flex flex-col sm:flex-row items-center gap-3 w-full'>
                  <label
                    htmlFor=''
                    className='text-base md:text-[22px] font-bold min-w-[120px]'
                  >
                    Semester {sem.id}:
                  </label>

                  <div className='flex items-center gap-2 w-full'>
                    <input
                      type='number'
                      className='border p-2 sm:p-3 rounded-2xl w-full md:w-[500px] text-base md:text-lg'
                      placeholder={`Enter SGPA for semester ${sem.id}`}
                      value={sem.value}
                      onChange={(e) => handleInputChange(sem.id, e.target.value)}
                    />
                    {semesters.length > 2 && (
                      <MdOutlineDeleteOutline
                        className='cursor-pointer text-red-500 text-xl min-w-[24px]'
                        onClick={() => RemoveSemester(sem.id)}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}


            <div className='p-2 sm:p-3 md:p-5 mt-2 flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-5'>
              <button className='border p-2 rounded-lg bg-[#07085b] text-white text-sm md:text-base w-full sm:w-auto' onClick={AddSemester}>Add Semester</button>
              <button className='border p-2 rounded-lg bg-green-600 text-white text-sm md:text-base w-full sm:w-auto' onClick={Calculate}>Calculate</button>
              <button className='border p-2 rounded-lg bg-red-600 text-white text-sm md:text-base w-full sm:w-auto' onClick={Reset}>Reset</button>
            </div>
          </div>
        </div>
        <hr className='mt-5 sm:mt-10' />
        <h1 className='text-center mt-3 sm:mt-5 text-[#01161e] font-bold text-2xl sm:text-3xl'>Other Calculators</h1>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 mt-3 sm:mt-5">
          <NavLink to="/percentage-to-cgpa">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              % To CGPA
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              SGPA To %
            </button>
          </NavLink>
          <NavLink to="/marks-calculator">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              Marks %
            </button>
          </NavLink>
          <NavLink to="/cgpa-to-percentage">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              CGPA To %
            </button>
          </NavLink>
        </div>
        <hr className='mt-10' />

        <div className='max-w-full md:max-w-3xl p-3 md:p-5 mx-auto'>
          <h1 className='mt-3 md:mt-5 text-[#01161e] font-bold text-xl md:text-3xl'>What is CGPA ?</h1>
          <h2 className='mt-3 md:mt-5 text-sm md:text-base'>CGPA (Cumulative Grade Point Average) is a widely used metric for assessing academic performance across multiple semesters. It provides a consolidated score that represents a student's overall achievements, similar to how a gymnast's all-around score summarizes their entire performance.</h2>
          <h1 className='mt-5 text-[#01161e] font-bold text-2xl'>Importance of CGPA</h1>
          <ul className='text-[18px] mt-3'>
            <li><h2>1. CGPA provides an overall view of a student's academic progress across multiple semesters, rather than focusing on individual subject scores.</h2></li>
            <li><h2>2. Many universities use CGPA as a key factor in admissions and recruitment.</h2></li>
            <li><h2>3. A good CGPA increases the chances of securing scholarships, internships, and research opportunities.</h2></li>
            <li><h2>4. It offers a uniform grading system used by many universities, making it easier to compare student performance across institutions.</h2></li>
          </ul>

          <h1 className='mt-5 text-[#01161e] font-bold text-2xl'>How to convert CGPA from SGPA ?</h1>
          <h2 className='mt-3 md:mt-5 text-sm md:text-base'>To calculate CGPA from SGPA, you have to follow some steps: </h2>
          <div className='mt-5 text-[18px] space-y-2'>
            <p className='flex items-center'>1. First you have to know all the credit points for each subject. </p>
            <p className='flex items-center'>2. Now multiply the credit points with subject marks. </p>
            <p className='flex items-center'>3. Add the result of multiplication for each subject. </p>
            <p className='flex items-center'>4. Add the credit points for each subjects.</p>
            <p className='flex items-center'>5. Now divide the sum of the multiplication by sum of credit points.</p>
          </div>
          <h2 className='mt-3 md:mt-5 text-sm md:text-base'> Let's understand more with the help of an example: <br />
            Suppose you have 5 subjects like: Math, English, Physics, Chemistry, and, Biology, and their grade are 8, 6, 7, 8 and, 7 respectively and the credit points are 4, 5, 3, 2, and 4. So first multiply subjects marks with their credit points, (8 x 4, 6 x 5, 7 x 3, 8 x 2, 7 x 4 ) = (32, 30, 21, 16, 14). Now add all the results (32+30+21+16+14) = 113 <br /> Now divide the sum of the result by the sum of credit points, 113/18 = 6.2, so your SGPA is 6.2 <br /> Now our next step is to caonert SGPA into CGPA, for this we just need a simple SGPA to CGPA formla: <br />
            <div className='mx-auto mt-5 border rounded-2xl p-5 w-140 text-[25px] font-bold shadow shadow-blue-900'>CGPA = (SGPA / Total number of semester)</div> </h2>
          <h2 className='mt-3 md:mt-5 text-sm md:text-base'>Now let's understand how to convert SGPA into CGPA with the help of an example. Suppose a student successfully cleared his two semesters.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SCGP;
