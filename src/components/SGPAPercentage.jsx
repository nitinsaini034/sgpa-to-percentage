import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaAngleDoubleRight } from "react-icons/fa";
import Navbar from './Navbar';


function SGPAPercentage() {
  const [sgpa, setsgpa] = useState('');
  const [Percen, setPercen] = useState('');
  const [grade, setgrade] = useState(10.0);

  const sgpatopercentage = () => {
    if (isNaN(sgpa) || sgpa <= 0) {
      setPercen('Please enter a valid sgpa');
      return;
    }
    let calculatedPercen = 0;
    if (grade === 4) {
      if (sgpa > 4) {
        setPercen('Invalid sgpa for 4.0 grade scale');
        return;
      }
      else {
        calculatedPercen = (sgpa * 25) - 7.5;
      }
    }
    else if (grade === 5) {
      if (sgpa > 5) {
        setPercen('Invalid sgpa for 5.0 grade scale');
        return;
      }
      else {
        calculatedPercen = (sgpa * 20) - 7.5;
      }
    }
    else if (grade === 10) {
      if (sgpa > 10) {
        setPercen('Invalid sgpa for 10.0 grade scale');
        return;
      }
      else {
        calculatedPercen = (sgpa * 10) - 7.5;
      }
    }
    setPercen(calculatedPercen.toFixed(2) + '%');
  }

  const reset = () => {
    setsgpa('');
    setPercen('');
  }

  return (
    <div className='bg-[#fff] w-full h-auto mt-22'>
      <div className='max-w-3xl mx-auto p-5'>
        <h1 className="text-3xl md:text-5xl text-[#01161e] font-bold text-center">
          SGPA To Percentage Calculator
        </h1>
        <h2 className="text-[22px] md:text-[29px] text-[#124559] mt-3 text-center">
          Fast & Accurate SGPA to Percentage Converter
        </h2>
        <div className='h-auto mt-5 w-full border-3 p-5 mx-auto rounded-2xl'>
          <div className='flex justify-center'>
            <button
              onClick={() => setgrade(4)}
              className={`border ml-4 md:ml-16 rounded-2xl p-3 ${grade === 4 ? 'bg-[#598392] text-white' : ''}`}>4.0 Grade Scale
            </button>
            <button
              onClick={() => setgrade(5)}
              className={`border ml-4 md:ml-16 rounded-2xl p-3 ${grade === 5 ? 'bg-[#598392] text-white' : ''}`}>5.0 Grade Scale
            </button>
            <button
              onClick={() => setgrade(10)}
              className={`border ml-4 md:ml-16 rounded-2xl p-3 ${grade === 10 ? 'bg-[#598392] text-white' : ''}`}>10.0 Grade Scale
            </button>
          </div>
          <input type="number" value={sgpa} onChange={(e) => setsgpa(e.target.value)} className='border mx-auto block mt-5 w-full h-16 text-2xl pl-5 rounded-2xl' placeholder='Enter your sgpa' />

          <input type="text" value={Percen} className='border mx-auto block mt-5 w-full h-16 text-2xl pl-5 rounded-2xl' placeholder='Your percentage' readOnly />

          <div className='flex flex-col md:flex-row justify-center mt-5'>
            <button onClick={sgpatopercentage} className='border rounded-2xl p-3 mt-4 md:mt-0 md:ml-4 bg-green-600 text-white cursor-pointer'>Calculate</button>
            <button onClick={reset} className='border rounded-2xl p-3 mt-4 md:mt-0 md:ml-4 bg-red-600 text-white cursor-pointer'>Reset</button>
          </div>
        </div>
        <hr className='w-full mt-10' />
        <h1 className='text-center mt-5 text-[#01161e] font-bold text-3xl'>Other Calculators</h1>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          <NavLink to="/percentage-to-cgpa">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              % To CGPA
            </button>
          </NavLink>
          <NavLink to="/sgpa-to-cgpa">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              SGPA To CGPA
            </button>
          </NavLink>
          <NavLink to="/marks-calculator">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              Marks % Calculator
            </button>
          </NavLink>
          <NavLink to="/cgpa-to-percentage">
            <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
              CGPA To %
            </button>
          </NavLink>
        </div>
        <hr className='w-full mt-10' />
        <section className='mt-5 mx-auto'>
          <h1 className='mt-5 text-[#01161e] font-bold text-2xl'>What is SGPA ?</h1>
          <h2 className='mt-3 text-[18px]' >SGPA, which stands for Semester Grade Point Average, reflects your academic performance during a particular semester. When you enroll in a course, it carries a specific credit value, and based on your marks, you receive a letter grade. SGPA essentially combines these elements to give you a clear summary of your accomplishments in that semester.</h2>
          <h1 className='mt-5 text-[#01161e] font-bold text-2xl'>Importance of SGPA</h1>
          <h2 className='mt-3 text-[18px]'>1. SGPA helps students check their academic performance on a semester basis. <br /> 2. By using SGPA, students identify their strengths and areas for improvement. <br /> 3. A strong SGPA can enhance a student's profile for internships, job placements, and admission to higher education programs. <br /> 4. Many institutions use SGPA to determine eligibility for addmission and scholarship purpose.
          </h2>
          <h1 className='mt-5 text-[#01161e] font-bold text-2xl'>How to convert SGPA to Percentage ?</h1>
          <h2 className='mt-3 text-[18px]'>The conversion of SGPA to Percentage involves a specific formula. The most widely accepted formula for 10.0 grade scale is: <br /> <div className='mx-auto mt-5 border text-center rounded-2xl p-3 w-auto text-[20px] font-bold shadow shadow-blue-900'>Percentage = (SGPA x 10) - 7.5</div> <br /> Let's undestand the conversion of SGPA to Percentage with the help of an example. Assume that your SGPA is 8.7. First multiply SGPA with 10, in this case the SGPA is 8.7, so 8.7 x 10 = 87. Second substract 7.5 from the multipication result, so that 87 - 7.5 = 79.5 So your Percenatage is 79.5%. If your university use 5.0 grading system, then the formula will be <b>   Percentage = (SGPA x 20) - 7.5 </b> and for 4.0 garding scale, the formula become <b>Percentage = (SGPA x 25) - 7.5 </b> </h2>
        </section>
        <hr className='mt-10' />
        <section className='mt-10 mx-auto'>
          <h1 className='mt-5 text-[#01161e] font-bold text-3xl text-center' >FAQ</h1>
          <div className='mt-10'>
            <div>
              <h1 className='bg-[#aec3b0] text-2xl font-bold p-2 flex rounded-xl'> <FaAngleDoubleRight />
                How is SGPA different from a percentage?</h1>
              <h2 className='mt-5 text-[20px]'>SGPA is calculated based on credit-weighted grade points earned in a semester. On the other hand Percentage is a direct measure of marks obtained out of the total marks, expressed as a percentage.</h2>
            </div>
            <div className='mt-5'>
              <h1 className='bg-[#aec3b0] text-2xl font-bold p-2 flex rounded-xl'> <FaAngleDoubleRight />
                How do different universities convert SGPA to percentage?</h1>
              <h2 className='mt-5 text-[20px]'>Different universities follow their own conversion formulas to convert SGPA to Percentage, as grading systems vary globally. Here are some common methods used by universities: Percentage = (SGPA x 10) - 7.5</h2>
            </div>
            <div className='mt-5'>
              <h1 className='bg-[#aec3b0] text-2xl font-bold p-2 flex rounded-xl'> <FaAngleDoubleRight />
                Is SGPA converted to percentage important for job applications?</h1>
              <h2 className='mt-5 text-[20px]'>Yes, converting SGPA to percentage can be important for job applications, but it depends on the company and industry.</h2>
            </div>
            <div className='mt-5'>
              <h1 className='bg-[#aec3b0] text-2xl font-bold p-2 flex rounded-xl'> <FaAngleDoubleRight />
                Does SGPA matter for higher studies like Master’s programs?</h1>
              <h2 className='mt-5 text-[20px]'>Yes, SGPA matters for higher studies like Master’s programs, but its importance depends on the university and country you're applying to.</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SGPAPercentage
