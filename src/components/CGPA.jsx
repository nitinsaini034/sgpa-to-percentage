import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function CGPA() {
    const [cgpa, setcgpa] = useState('');
    const [percentage, setpercentage] = useState('');
    const [gradeScale, setgradeScale] = useState(10.0);

    const calculatepercen = () => {
        if (isNaN(cgpa) || cgpa <= 0) {
            setpercentage('Please enter a valid cgpaa');
            return;
        }

        let calculatedpercen = 0;
        if (gradeScale === 4) {
            if (cgpa > 4) {
                setpercentage('Invalid CGPA for 4.0 Grade Scale');
                return;
            }
            else {
                calculatedpercen = (cgpa / 4) * 100;
            }
        }
        else if (gradeScale === 5) {
            if (cgpa > 5) {
                setpercentage('Invalid CGPA for 5.0 Grade Scale');
                return;
            }
            else {
                calculatedpercen = (cgpa / 5) * 100;
            }
        }
        else if (gradeScale === 10) {
            if (cgpa > 10) {
                setpercentage('Invalid CGPA for 10.0 Grade Scale');
                return;
            }
            else {
                calculatedpercen = cgpa * 9.5;
            }
        }
        setpercentage(calculatedpercen.toFixed(2) + '%');
    };

    const resetFields = () => {
        setcgpa('');
        setpercentage('');
    };
    return (
        <div className='bg-[#fff] w-full h-auto mt-22'>
            <div className='max-w-full md:max-w-3xl p-3 md:p-5 mx-auto'>
                <h1 className='text-3xl sm:text-2xl md:text-5xl text-[#01161e] font-bold text-center'>CGPA TO PERCENTAGE CALCULATOR</h1>
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
                        <input type="number" value={cgpa} onChange={(e) => setcgpa(e.target.value)} className='border mx-auto block mt-5 w-full h-16 text-2xl pl-5 rounded-2xl' placeholder='Enter your cgpa' />

                        <input type="text" value={percentage} className='border mx-auto block mt-5 w-full h-16 text-2xl pl-5 rounded-2xl' placeholder='Your percentage' readOnly />

                        <div className='flex flex-col md:flex-row justify-center mt-5'>
                            <button onClick={calculatepercen} className='border rounded-2xl p-3
                            mt-4 md:mt-0 md:ml-4
                             bg-green-600 text-white cursor-pointer'>Calculate</button>
                            <button onClick={resetFields} className='border rounded-2xl p-3 mt-4 md:mt-0 md:ml-4 bg-red-600 text-white cursor-pointer'>Reset</button>
                        </div>
                    </div>
                </div>
                <hr className='w-full mt-10' />
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
                    <NavLink to="/percentage-to-cgpa">
                        <button className="border rounded-3xl px-4 py-2 bg-[#598392] text-white cursor-pointer">
                            % To CGPA
                        </button>
                    </NavLink>
                </div>
                <hr className='w-full mt-10' />
                <div className='mt-5 mx-auto'>
                    <h1 className='mt-5 text-[#01161e] font-bold text-2xl'>Why convert CGPA into Percentage ? </h1>

                    <h2 className='mt-3 text-[18px]'>Many colleges or universities require academic records in percentage format. Most companies, as well as the government or public sector, require a minimum percentage for eligibility. If your college provides a CGPA, you'll need to convert it to a percentage. <br /> <br />Scholarship programs often list percentage cut-offs for eligibility. Even if your performance is in CGPA, you'll have to convert it into a percentage to apply for scholarships. <br /> Percentage is a universally understood metric.  A percentage offers clear, quantifiable information that avoids confusion. </h2>

                    <h1 className='mt-5 text-[#01161e] font-bold text-2xl'>How to convert CGPA into Percentage ?</h1>

                    <h2 className='mt-3 text-[18px]'>The conversion of CGPA to Percentage involves a specific formula. The most widely accepted formula for 10.0 grade scale is: <br /> <div className='mx-auto mt-5 border text-center rounded-2xl p-3 w-auto text-[20px] font-bold shadow shadow-blue-900'>Percentage = (CGPA x 9.5)</div> <br /> Let's understand the conversion of CGPA to Percentage with the help of an example. Assume that your CGPA is 8.1. Then multiply CGPA with 9.5, in this case the CGPA is 8.1, so 8.1 x 9.5 = 76.95. So your percentage is 76.95%. 
                    <br /> <br /> 
                    If your university use 5.0 scale, then the formula will be <b>Percentage = (CGPA / 5) x 100.</b> For example, assume your CGPA is 4.2, then first divide CGPA by 5. In this case 4.2 / 5 = 0.84 then multiply by 100. In this case 0.84 x 100 = 84, So your percentage in 5.0 grade scale is 84%. <br /> <br />
                    If your university use 4.0 scale, then the formula will be <b>Percentage = (CGPA / 4) x 100.</b> For example, assume your CGPA is 3.8, then first divide CGPA by 4. In this case 3.8 / 4 = 0.95 then multiply by 100. In this case 0.95 x 100 = 95, So your percentage in 4.0 grade scale is 95%.   </h2>

                </div>
            </div>

        </div>
    )
}

export default CGPA