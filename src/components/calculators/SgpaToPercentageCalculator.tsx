"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorShell } from "@/components/CalculatorShell";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import type { AppLevelResult } from "@/app/page"; // Import AppLevelResult type
import Image from "next/image";

interface SgpaToPercentageCalculatorProps {
  setAppLevelResult: (result: AppLevelResult | null) => void;
}

export function SgpaToPercentageCalculator({
  setAppLevelResult,
}: SgpaToPercentageCalculatorProps) {
  const [sgpa, setSgpa] = useState<string>("");
  const [maxScale, setMaxScale] = useState<string>("10.0");
  // const [percentage, setPercentage] = useState<number | null>(null); // Local state no longer directly drives shell
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const sgpaValue = parseFloat(sgpa);
    const selectedMaxScaleValue = parseFloat(maxScale);

    if (isNaN(sgpaValue)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid number for SGPA.",
        variant: "destructive",
      });
      setAppLevelResult(null);
      return;
    }

    if (sgpaValue < 0) {
      toast({
        title: "Invalid SGPA",
        description: "SGPA cannot be negative.",
        variant: "destructive",
      });
      setAppLevelResult(null);
      return;
    }

    if (sgpaValue > selectedMaxScaleValue) {
      toast({
        title: "Invalid Input",
        description: `SGPA (${sgpaValue}) cannot be greater than selected Max GPA Scale (${selectedMaxScaleValue}).`,
        variant: "destructive",
      });
      setAppLevelResult(null);
      return;
    }

    let calculatedPercentage: number;

    if (maxScale === "10.0") {
      calculatedPercentage = sgpaValue * 10 - 7.5;
    } else if (maxScale === "5.0") {
      calculatedPercentage = sgpaValue * 20 - 7.5;
    } else if (maxScale === "4.0") {
      calculatedPercentage = sgpaValue * 25 - 7.5;
    } else {
      toast({
        title: "Error",
        description: "Invalid GPA scale selected for calculation.",
        variant: "destructive",
      });
      setAppLevelResult(null);
      return;
    }

    calculatedPercentage = Math.max(0, Math.min(100, calculatedPercentage));
    // setPercentage(calculatedPercentage);
    setAppLevelResult({
      value: calculatedPercentage,
      label: "Your Percentage",
    });
  };

  const handleReset = () => {
    setSgpa("");
    setMaxScale("10.0");
    // setPercentage(null);
    setAppLevelResult(null);
  };

  const handleScaleButtonClick = (newScale: string) => {
    setMaxScale(newScale);
    setSgpa("");
    // setPercentage(null);
    setAppLevelResult(null);
  };

  const grades = [
    { letter: "O (Outstanding)", point: 10 },
    { letter: "A+ (Excellent)", point: 9 },
    { letter: "A (Very Good)", point: 8 },
    { letter: "B+ (Good)", point: 7 },
    { letter: "B (Average)", point: 6 },
    { letter: "C (Pass)", point: 5 },
    { letter: "F (Fail)", point: 0 },
    { letter: "AB (Absent)", point: 0 },
  ];

  const subjects = [
    { name: "Math", grade: "9", credit: 4 },
    { name: "Physics", grade: "8", credit: 3 },
    { name: "Hindi", grade: "6", credit: 2 },
    { name: "Chemistry", grade: "10", credit: 3 },
    { name: "English", grade: "7", credit: 2 },
  ];

  return (
    <>
      <CalculatorShell
        title="SGPA to Percentage"
        description="Convert your SGPA (Semester Grade Point Average) to percentage. Select the maximum scale your SGPA is on."
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="sgpa">SGPA</Label>
            <Input
              id="sgpa"
              type="number"
              step="0.01"
              value={sgpa}
              onChange={(e) => setSgpa(e.target.value)}
              placeholder="e.g., 8.5 or 3.5"
              className="border-2 border-black-200 focus:border-black-300 focus:ring-0"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Select Max GPA Scale:</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={maxScale === "4.0" ? "default" : "secondary"}
                onClick={() => handleScaleButtonClick("4.0")}
                className={cn(
                  "flex-grow sm:flex-grow-0",
                  maxScale === "4.0" && "shadow-md"
                )}
              >
                4.0 Scale
              </Button>
              <Button
                type="button"
                variant={maxScale === "5.0" ? "default" : "secondary"}
                onClick={() => handleScaleButtonClick("5.0")}
                className={cn(
                  "flex-grow sm:flex-grow-0",
                  maxScale === "5.0" && "shadow-md"
                )}
              >
                5.0 Scale
              </Button>
              <Button
                type="button"
                variant={maxScale === "10.0" ? "default" : "secondary"}
                onClick={() => handleScaleButtonClick("10.0")}
                className={cn(
                  "flex-grow sm:flex-grow-0",
                  maxScale === "10.0" && "shadow-md"
                )}
              >
                10.0 Scale
              </Button>
            </div>
          </div>

          <div className="flex space-x-2 pt-2">
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Calculate
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="w-full"
            >
              Reset
            </Button>
          </div>
        </form>
      </CalculatorShell>
      <br />
      <hr className="mt-8" />
      <section className="flex-1 overflow-auto md:px-12 lg:p-8 w-full max-w-5xl mx-auto mt-2 text-[18px]">
        <h1 className="font-bold text-[20px] text-[#008080]">What is SGPA?</h1>
        <p className="mt-5 ">
          SGPA, which stands for Semester Grade Point Average, reflects your
          academic performance during a particular semester. When you enroll in
          a course, it carries a specific credit value, and based on your marks,
          you receive a letter grade. SGPA essentially combines these elements
          to give you a clear summary of your accomplishments in that semester.
        </p>
        <h1 className="font-bold text-[20px] text-[#008080] mt-5">
          Importance of SGPA
        </h1>
        <ul className="list-disc list-outside">
          <li className="mt-5">
            SGPA helps students check their academic performance on a semester
            basis.
          </li>
          <li className="mt-5">
            By using SGPA, students identify their strengths and areas for
            improvement.
          </li>
          <li className="mt-5">
            A strong SGPA can enhance a student's profile for internships, job
            placements, and admission to higher education programs.{" "}
          </li>
          <li className="mt-5">
            Many institutions use SGPA to determine eligibility for addmission
            and scholarship purpose.
          </li>
          <li className="mt-5">
            SGPS helps you compare yourself with other students.
          </li>
        </ul>

        <h1 className="font-bold text-[20px] text-[#008080] mt-5">
          How to calculate SGPA?
        </h1>
        <p className="mt-5">
          To calculate your SGPA, you need two important pieces of information
          for each subject: the grade you received (converted into a grade
          point) and the credit assigned to that subject based on its academic
          weight.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-5 items-center justify-center">
          <div className="border-2 border-teal-400 rounded-xl p-6 bg-[#c0f8f86f] text-center shadow-md hover:shadow-xl active:shadow-xl focus:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-105 focus:scale-105 w-[90%] md:w-[45%]">
            <h2 className="text-black font-bold text-[20px] mb-3">
              Grade Point
            </h2>
            <p className="text-gray-700">
              A Grade Point is a numerical value assigned to a letter grade you
              receive in a subject. It helps convert qualitative grades (like A,
              B, C) into quantitative scores for calculating SGPA and CGPA.
            </p>
          </div>

          <div className="border-2 border-teal-400 rounded-xl p-6 bg-[#c0f8f86f] text-center shadow-md hover:shadow-xl active:shadow-xl focus:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-105 focus:scale-105 w-[90%] md:w-[45%]">
            <h2 className="text-black font-bold text-[20px] mb-3">Credit</h2>
            <p className="text-gray-700">
              In a college or university, a credit (or credit hour) represents
              the amount of workload or learning time assigned to a subject.
              It's used to measure how much effort a course requires over the
              semester.
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          {/* Grade Point Table */}
          <h2 className="text-xl font-bold mt-5 text-[#008080]">
            Common Grade Point Table
          </h2>
          <table className="min-w-full  border rounded-2xl shadow-md text-center mt-5">
            <thead className="bg-[#008080] text-white">
              <tr className="border border-gray-300">
                <th className="px-6 py-3 font-medium border border-black">
                  Letter Grade
                </th>
                <th className="px-6 py-3 font-medium border border-black">
                  Grade Point (GP)
                </th>
              </tr>
            </thead>

            <tbody>
              {grades.map((grade, index) => (
                <tr key={index} className="hover:bg-gray-200">
                  <td className="px-6 py-3 border">{grade.letter}</td>
                  <td className="px-6 py-3 border">{grade.point}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-red-500 text-sm mt-5">
            ⚠️ Note: This scale can vary slightly between universities, so it's
            always best to check your university’s grading policy.
          </p>
          {/* Example */}
          <p className="mt-5">
            <strong className="text-[#008080]">Example: </strong> Let's
            understand how to calculates SGPA with the help of an example.
            Suppose you have the following grades and credits for your subjects:
          </p>
          <table className="min-w-full border rounded-lg shadow-md text-center mt-5">
            <thead className="bg-[#008080] text-white">
              <tr className="border border-gray-300">
                <th className="px-6 py-3 border border-gray-300">Subject</th>
                <th className="px-6 py-3 border border-gray-300">Grade (GP)</th>
                <th className="px-6 py-3 border border-gray-300">Credit</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-6 py-3 border border-gray-300">
                    {subject.name}
                  </td>
                  <td className="px-6 py-3 border border-gray-300">
                    {subject.grade}
                  </td>
                  <td className="px-6 py-3 border border-gray-300">
                    {subject.credit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-5 border-1 border-gray-400 rounded-xl shadow-md p-4 ">
            <div className="border-1 border-teal-400 hover:border-teal-500 rounded-2xl p-4 transition-all duration-300 transform shadow-md hover:shadow-xl active:shadow-xl focus:shadow-xl">
              <p>
                <strong className="text-[#008080] underline">Step 1:</strong> In
                the first step, we need to multiply the credit point of each
                subject by its grade:
              </p>
              <p className="mt-2">
                Math: 9 x 4 = 36 <br /> Physics: 8 x 3 = 24 <br /> Hindi: 6 x 2
                = 12 <br /> Chemistry: 8 x 3 = 24 <br /> English: 8 x 2 = 16
              </p>
            </div>
            <div className="border-1 border-teal-400 hover:border-teal-500 rounded-2xl p-4 transition-all duration-300 transform shadow-md hover:shadow-xl active:shadow-xl focus:shadow-xl mt-5">
              <p>
                <strong className="text-[#008080] underline">Step 2:</strong> In
                the second step, add the multiplication result of the first
                step:
              </p>
              <p className="mt-2">36 + 24 + 12 + 24 + 16 = 112</p>
            </div>
            <div className="border-1 border-teal-400 hover:border-teal-500 rounded-2xl p-4 transition-all duration-300 transform shadow-md hover:shadow-xl active:shadow-xl focus:shadow-xl mt-5">
              <p>
                <strong className="text-[#008080] underline">Step 3:</strong> In
                the third step, add the credit points of all subjects:
              </p>
              <p className="mt-2">4 + 3 + 2 + 3 + 2 = 14</p>
            </div>
            <div className="border-1 border-teal-400 hover:border-teal-500 rounded-2xl p-4 transition-all duration-300 transform shadow-md hover:shadow-xl active:shadow-xl focus:shadow-xl mt-5">
              <p>
                <strong className="text-[#008080] underline">Step 4:</strong>{" "}
                Finally, divide the total from Step 2 by the total from Step 3
                to get your SGPA:
              </p>
              <p className="mt-2">
                SGPA = Total of Step 2 / Total of Step 3 = 112 / 14 = 8.0
              </p>
            </div>
            <div className="border-1 border-teal-400 hover:border-teal-500 rounded-2xl p-4 transition-all duration-300 transform shadow-md hover:shadow-xl active:shadow-xl focus:shadow-xl mt-5">
              <p>
                <strong className="text-[#008080] underline">Step 5:</strong>{" "}
                After completing all four steps, you get your SGPA i.e 8.0
              </p>
            </div>
          </div>
        </div>
        <p className="mt-5">After calculating the SGPA for the semester, we now clearly understand the process of converting it to a percentage using the standard formula, which helps us evaluate our academic performance in a more universally accepted format.</p>
        <h1 className="font-bold text-[20px] text-[#008080] mt-5">
          How to convert SGPA into Percentage?
        </h1>
        <div className="flex flex-col items-center justify-center mt-5">
          <Image
            src="/images/understand_sgpa.png"
            alt="How to convert SGPA into Percentage"
            width={600}
            height={200}
          />
        </div>
        <p className="mt-5 space-y-4">
          The process of converting SGPA to percentage is straightforward. SGPA
          is usually calculated on a 10.0 scale, and most universities follow a
          specific formula to convert it into a percentage. The most widely used
          formula is:
          <br />
          <div className="flex justify-center mt-3">
            <strong className="text-black text-[20px] border border-teal-400 shadow-lg rounded-md px-4 py-2 bg-white">
              Percentage = (SGPA x 10) - 7.5
            </strong>
          </div>
          <br />
          Now, we need to follow some steps to convert SGPA into percentage.
          <div className="mt-0">
            <strong className="text-[#008080] ">Step 1: </strong>Multiply your
            SGPA by 10. For example, if your SGPA is 8.5, then 8.5 x 10 = 85.{" "}
            <br />
            <strong className="text-[#008080] ">Step 2: </strong>In the next
            step, we substract 7.5 <br /> <br />
            In conclusion, converting SGPA to percentage is a simple process but
            must be done accurately. Knowing your exact percentage helps when
            percentage format.
          </div>
        </p>
        <h1 className="font-bold text-[20px] text-[#008080]  mt-5">
          Why use Percentage instead of SGPA?
        </h1>
        <p className="mt-5">
          While SGPA (Semester Grade Point Average) is a modern and efficient
          grading system widely used by universities, many institutions,
          organizations, and employers still prefer percentages to evaluate
          academic performance because percentages offer a clearer and more
          universally understood representation of a student's achievements.{" "}
          <br /> <br />
          Many forms and applications specifically ask for marks in percentage
          form when applying for jobs, internships, or higher studies.
          Government exams, scholarships, and several international universities
          also require academic scores in percentage format for eligibility and
          comparison purposes. Parents and students often find it easier to
          interpret percentages than grade points. <br /> <br /> For example,
          saying someone scored 82% is quite simpler than explaining what an
          SGPA of 8.7 represents. In conclusion, while SGPA is useful within
          universities, percentages are preferred for external comparisons,
          making them more practical and widely accepted across different
          platforms.
        </p>
      </section>
    </>
  );
}
