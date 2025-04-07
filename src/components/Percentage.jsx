import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

function Percentage() {
  const [percentage, setpercentage] = useState('');
  const [cgpa, setcgpa] = useState('');
  const [gradeScale, setgradeScale] = useState(10.0);

  const calculatecgpa = () => {

    let calculatedcgpa = 0;

    if (isNaN(percentage) || percentage <= 0 || percentage > 100) {
      setcgpa('Please enter a valid percentage');
      return;
    }

    if (gradeScale === 4) {
      calculatedcgpa = percentage / 25;
    }
    else if (gradeScale === 5) {
      calculatedcgpa = percentage / 20;
    }
    else if (gradeScale === 10) {
      if (percentage > 95) {
        calculatedcgpa = 10;
      } else {
        calculatedcgpa = percentage / 9.5;
      }
    }

    setcgpa(calculatedcgpa.toFixed(2));
  };

  const resetFields = () => {
    setcgpa('');
    setpercentage('');
  };
  return (
    <div className='bg-[#fff] w-full h-auto mt-22'>
      <div className=' max-w-3xl mx-auto p-5'>
        <h1 className='text-3xl md:text-5xl  text-[#01161e] font-bold text-center'>PERCENTAGE TO CGPA CALCULATOR</h1>
        <div className='mt-5 md:mt-10'>
          <div className='h-auto mt-5 w-full border-3 p-5 mx-auto rounded-2xl'>
            <div className='flex justify-center'>
              <button
                onClick={() => setgradeScale(4)}
                className={`border ml-4 md:ml-16 rounded-2xl p-3 ${gradeScale === 4 ? 'bg-[#598392] text-white' : ''}`}>4.0 Grade Scale
              </button>
              <button
                onClick={() => setgradeScale(5)}
                className={`border ml-4 md:ml-16 rounded-2xl p-3 ${gradeScale === 5 ? 'bg-[#598392] text-white' : ''}`}>5.0 Grade Scale
              </button>
              <button
                onClick={() => setgradeScale(10)}
                className={`border ml-4 md:ml-16 rounded-2xl p-3 ${gradeScale === 10 ? 'bg-[#598392] text-white' : ''}`}>10.0 Grade Scale
              </button>
            </div>
            <input type="number" value={percentage} onChange={(e) => setpercentage(e.target.value)} className='border mx-auto block mt-5 w-full h-16 text-2xl pl-5 rounded-2xl' placeholder='Enter your percentage' />

            <input type="text" value={cgpa} className='border mx-auto block mt-5 w-full h-16 text-2xl pl-5 rounded-2xl' placeholder='Your cgpa' readOnly />

            <div className='flex flex-col md:flex-row justify-center mt-5'>
              <button onClick={calculatecgpa} className='border rounded-2xl p-3 bg-green-600 text-white cursor-pointer'>Calculate</button>
              <button onClick={resetFields} className='border rounded-2xl p-3 mt-4 md:mt-0 md:ml-4 bg-red-600 text-white cursor-pointer'>Reset</button>
            </div>
          </div>
        </div>
        <hr className='mt-10' />
        <h1 className='text-center mt-5 text-[#01161e] font-bold text-3xl'>Other Calculators</h1>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          <NavLink to="/sgpa-to-cgpa">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              SGPA To CGPA
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              SGPA To Percentage
            </button>
          </NavLink>
          <NavLink to="/marks-calculator">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              Marks % Calculator
            </button>
          </NavLink>
          <NavLink to="/cgpa-to-percentage">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              CGPA To Percentage
            </button>
          </NavLink>
        </div>
        <hr className='w-full mt-10' />
        <div className='mt-5 mx-auto'>
          <h1 className='mt-5 text-[#01161e] font-bold text-2xl'>How to convert Percentage into CGPA ?</h1>

          <h2 className='mt-3 text-[18px]'>The conversion of Percentage to CGPA involves a specific formula. The most widely accepted formula for 10.0 grade scale is: <br /> <div className='mx-auto mt-5 border text-center rounded-2xl p-3 w-auto text-[20px] font-bold shadow shadow-blue-900'>CGPA = (Percentage / 9.5)</div> <br /> Let's understand the conversion of Percentage to CGPA with the help of an example. Assume that your percentage is 78%. Then multiply divide percentage by 9.5, in this case percentage is 78%, so 78 / 9.5 = 8.21. So your CGPA is 8.21. <br /> <br />
          If your university use 5.0 grading scale, then the formula will be <b>CGPA = (Percentage / 20).</b> For example, assume your percentage is 67%, then first divide percentage  by 20. In this case 67 / 20 = 3.35. So your CGPA in 5.0 grade scale is 3.35. 
          <br /> <br />
          If your university use 4.0 grading scale, then the formula will be <b>CGPA = (Percentage / 25).</b> For example, assume your percentage is 88%, then first divide percentage by 25. In this case 88 / 25 = 3.52. So your CGPA in 4.0 grade scale is 3.52.  </h2>
        </div>
      </div>
    </div>
  )
}

export default Percentage