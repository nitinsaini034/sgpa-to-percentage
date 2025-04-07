import React, { useState } from 'react';
import Navbar from './Navbar';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Footer from './Footer';
import { NavLink } from 'react-router-dom'


function Marks() {
  const [marks, setmarks] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [percen, setpercen] = useState('');
  const [percen2, setpercen2] = useState('');
  const [subjects, setSubjects] = useState([{ id: 1, scored_marks: '', total_marks: '' }, { id: 2, scored_marks: '', total_marks: '' }]);

  const Percentage = () => {
    if (marks === '' || marks <= 0) {
      setmarks('Please enter a valid marks');
      return;
    }
    if (totalMarks === '' || totalMarks <= 0) {
      setTotalMarks('Please enter a valid total marks');
      return;
    }
    else {
      if (parseFloat(marks) > parseFloat(totalMarks)) {
        alert('Scored marks cannot be greater than total marks');
        return;
      }
      else {
        let calculatedpercen = (marks / totalMarks) * 100;
        setpercen(calculatedpercen.toFixed(2) + '%');
      }

    }
  }

  const MarksPercentage = () => {
    let totalScored = 0;
    let totalMax = 0;

    subjects.forEach(sub => {
      if (sub.scored_marks && sub.total_marks) {
        if (parseFloat(sub.scored_marks) > parseFloat(sub.total_marks)) {
          alert(`Scored marks cannot be greater than total marks for Subject ${sub.id}`);
          return;
        }
        totalScored += parseFloat(sub.scored_marks);
        totalMax += parseFloat(sub.total_marks);
      }
    });

    if (totalMax > 0) {
      setpercen2(((totalScored / totalMax) * 100).toFixed(2) + '%');
    } else {
      setpercen2('Invalid input');
    }
  };

  const Reset = () => {
    setmarks('');
    setTotalMarks('');
    setpercen('');
  }

  const Reset2 = () => {
    setpercen2('');
    setSubjects([{ id: 1, scored_marks: '', total_marks: '' }, { id: 2, scored_marks: '', total_marks: '' }]);
  }

  const AddSubject = () => {
    setSubjects([...subjects, { id: subjects.length + 1, scored_marks: '', total_marks: '' }]);
  };

  const RemoveSubject = (id) => {
    if (subjects.length > 2) {
      setSubjects(subjects.filter(sub => sub.id !== id));
    }
  };

  return (
    <div className='bg-[#fff] w-full h-auto mt-22'>
      <section className='max-w-full md:max-w-3xl p-3 md:p-5 mx-auto'>
        <h1 className='text-3xl sm:text-2xl md:text-5xl text-[#01161e] font-bold text-center'>Marks Percentage Calculator</h1>
        <div className='mt-5 md:mt-10'>
          <div className='mt-3 md:mt-5 border-3 p-3 md:p-5 rounded-2xl h-auto w-full mx-auto'>
            <h1 className='text-xl md:text-2xl font-bold'>Method 1 : Enter Total Marks and Scored Marks </h1>
            <h1 className='text-xl md:text-2xl font-bold mt-5 md:mt-10 text-center'>Your Percentage : {`${!percen ? '__' : percen}`} </h1>

            <div className='mt-10 flex flex-col md:flex-row items-start md:items-center'>
              <label htmlFor="" className='text-base md:text-[22px] font-bold mb-2 md:mb-0 md:mr-3'>Marks Scored:</label>
              <input type="number" value={marks} onChange={(e) => setmarks(e.target.value)} 
                placeholder='Enter scored marks' 
                className='border p-2 md:p-3 rounded-2xl w-full md:w-[400px] text-base md:text-lg' />
            </div>

            <div className='mt-5 flex flex-col md:flex-row items-start md:items-center'>
              <label htmlFor="" className='text-base md:text-[22px] font-bold mb-2 md:mb-0 md:mr-3'>Out of marks:</label>
              <input type="number" value={totalMarks} onChange={(e) => setTotalMarks(e.target.value)} 
                placeholder='Enter total marks' 
                className='border p-2 md:p-3 rounded-2xl w-full md:w-[405px] text-base md:text-lg mt-2 md:mt-0' />
            </div>

            <div className='p-3 md:p-5 flex flex-col sm:flex-row justify-center gap-3'>
              <button className='border p-2 rounded-lg bg-green-600 text-white text-sm md:text-base' onClick={Percentage}>Calculate</button>
              <button className='border p-2 rounded-lg bg-red-600 text-white text-sm md:text-base' onClick={Reset}>Reset</button>
            </div>
          </div>

          <div className='mt-5 md:mt-10 border p-3 md:p-5 rounded-2xl border-black h-auto w-full mx-auto'>
            <h1 className='text-xl md:text-2xl font-bold'>Method 2 : Enter individual Subjects Marks </h1>
            <h1 className='text-xl md:text-2xl font-bold mt-5 md:mt-10 text-center'>Your Percentage : {`${!percen2 ? '__' : percen2}`} </h1>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 mt-5 md:mt-10 text-sm md:text-base">
              <thead>
                <tr className="border">
                  <th className="py-2 px-2 md:px-4 border-r">Subjects</th>
                  <th className="py-2 px-2 md:px-4 border-r">Scored Marks</th>
                  <th className="py-2 px-2 md:px-4 border-r">Total Marks</th>
                  <th className="py-2 px-2 md:px-4 border-r">Delete</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((sub) => (
                  <tr key={sub.id} className="text-center border">
                    <td className="py-2 px-2 md:px-4 border-r border-black">Subject {sub.id}</td>
                    <td className="py-2 px-2 md:px-4 border-r border-black">
                      <input type="number" value={sub.scored_marks} placeholder='Scored' 
                        onChange={(e) => setSubjects(subjects.map(s => s.id === sub.id ? { ...s, scored_marks: e.target.value } : s))} 
                        className="text-center w-full max-w-[100px] p-1" />
                    </td>
                    <td className="py-2 px-2 md:px-4 border-r border-black">
                      <input type="number" value={sub.total_marks} placeholder='Total' 
                        onChange={(e) => setSubjects(subjects.map(s => s.id === sub.id ? { ...s, total_marks: e.target.value } : s))} 
                        className="text-center w-full max-w-[100px] p-1" />
                    </td>
                    <td className="py-2 px-2 md:px-4 border-r border-black">
                      {subjects.length > 2 && (<MdOutlineDeleteOutline className='cursor-pointer text-red-500 mx-auto' onClick={() => RemoveSubject(sub.id)} />)}
                    </td>
                  </tr>
                ))}
                <tr className="text-center border font-bold">
                  <td className="py-2 px-2 md:px-4 border-r border-black">Total</td>
                  <td className="py-2 px-2 md:px-4 border-r border-black">{subjects.reduce((acc, sub) => acc + (parseFloat(sub.scored_marks) || 0), 0)}</td>
                  <td className="py-2 px-2 md:px-4 border-r border-black">{subjects.reduce((acc, sub) => acc + (parseFloat(sub.total_marks) || 0), 0)}</td>
                  <td className="py-2 px-2 md:px-4 border-r border-black"></td>
                </tr>
              </tbody>
            </table>
            </div>
            <div className='p-3 md:p-5 mt-2 flex flex-col sm:flex-row justify-center gap-3'>
              <button className='border p-2 rounded-lg bg-[#07085b] text-white text-sm md:text-base' onClick={AddSubject}>Add Subject</button>
              <button className='border p-2 rounded-lg bg-green-600 text-white text-sm md:text-base' onClick={MarksPercentage}>Calculate</button>
              <button className='border p-2 rounded-lg bg-red-600 text-white text-sm md:text-base' onClick={Reset2}>Reset</button>
            </div>
          </div>
        </div>
        <hr className='mt-5 md:mt-10' />
        <h1 className='text-center mt-3 md:mt-5 text-[#01161e] font-bold text-2xl md:text-4xl'>Other Calculators</h1>
        <div className="flex flex-wrap justify-center gap-3 mt-3 md:mt-5">
          <NavLink to="/sgpa-to-cgpa">
            <button className="border rounded-3xl px-3 py-1 md:px-4 md:py-2 bg-[#598392] text-white cursor-pointer text-sm md:text-base">
              SGPA To CGPA
            </button>
          </NavLink>
          <NavLink to="/percentage-to-cgpa">
            <button className="border rounded-3xl px-3 py-1 md:px-4 md:py-2 bg-[#598392] text-white cursor-pointer text-sm md:text-base">
              % To CGPA
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="border rounded-3xl px-3 py-1 md:px-4 md:py-2 bg-[#598392] text-white cursor-pointer text-sm md:text-base">
              SGPA To %
            </button>
          </NavLink>
          <NavLink to="/cgpa-to-percentage">
            <button className="border rounded-3xl px-3 py-1 md:px-4 md:py-2 bg-[#598392] text-white cursor-pointer text-sm md:text-base">
              CGPA To %
            </button>
          </NavLink>
        </div>
        <hr className='mt-5 md:mt-10' />
      </section>
      <section className='max-w-full md:max-w-3xl p-3 md:p-5 mx-auto'>
        <h1 className='mt-3 md:mt-5 text-[#01161e] font-bold text-xl md:text-3xl'>Understanding Marks Percentage Calculator</h1>
        <h2 className='mt-3 md:mt-5 text-sm md:text-base'>
          This marks percentage calculator gives two methods to calculate percentages. Let's understand how these methods work with the help of an example: <br />
          <strong>Method 1: Enter Total Marks and Scored Marks</strong> <br /> 
          In this method, you just need to enter the scored marks and total marks in the basic percentage formula: <br />  
          <div className='mx-auto mt-3 md:mt-5 border rounded-2xl p-3 md:p-5 w-full max-w-md text-lg md:text-xl font-bold shadow shadow-blue-900'>
            Percentage = (Scored Marks / Total Marks) x 100
          </div> <br /> 
          Let's assume you scored 415 marks out of 600, so first divide scored marks from total marks. In this case 415/600 = 0.69. Second multiply the result of the division by 100, so in this case 0.69 x 100 = 69. So your percentage is 69%. <br /> 
          <strong>Method 2: Enter individual Subjects Marks</strong> <br /> 
          In this method, first, you must know how many subjects you have. The formula is same as the method 1. Let's understand with the help of an example: <br /> 
          Let's assume you have 5 subjects like: Math, English, Physics, Chemistry, and, Biology, and their marks are 87, 80, 78, 69, and, 85 respectively and these marks are out of 100. SO first add all the subject marks (87+80+78+69+85) = 399. Now divide scored marks from total marks (399/500) = 0.79. Now multiply the result with 100 0.79 x 100 = 79. So in this example your percentage is 79%.  
        </h2>
      </section>
    </div>
  );
}

export default Marks;
