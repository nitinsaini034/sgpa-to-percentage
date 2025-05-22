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
      <section className="flex-1 overflow-auto md:px-12 lg:p-8 w-full max-w-5xl mx-auto mt-2">
        <h1 className="font-bold text-[25px] text-black">What is SGPA?</h1>
        <p className="mt-5 text-[20px]">
          SGPA, which stands for Semester Grade Point Average, reflects your
          academic performance during a particular semester. When you enroll in
          a course, it carries a specific credit value, and based on your marks,
          you receive a letter grade. SGPA essentially combines these elements
          to give you a clear summary of your accomplishments in that semester.
        </p>
        <h1 className="font-bold text-[25px] text-black mt-5">
          Importance of SGPA
        </h1>
        <ul className="list-disc list-outside">
          <li className="mt-5 text-[20px]">
            SGPA helps students check their academic performance on a semester
            basis.
          </li>
          <li className="mt-5 text-[20px]">
            By using SGPA, students identify their strengths and areas for
            improvement.
          </li>
          <li className="mt-5 text-[20px]">
            A strong SGPA can enhance a student's profile for internships, job
            placements, and admission to higher education programs.{" "}
          </li>
          <li className="mt-5 text-[20px]">
            Many institutions use SGPA to determine eligibility for addmission
            and scholarship purpose.
          </li>
          <li className="mt-5 text-[20px]">
            SGPS helps you compare yourself with other students.
          </li>
        </ul>
      </section>
      <section className="flex-1 overflow-auto md:px-12 lg:p-8 w-full max-w-5xl mx-auto">
        <h1 className="font-bold text-[25px] text-center text-[#008080]">
          How to convert SGPA into Percentage
        </h1>
        <div className="flex flex-col items-center justify-center mt-5">
          <Image
            src="./images/understand_sgpa.png"
            alt="How to convert SGPA into Percentage"
            width={600}
            height={200}
          />
        </div>
        <p className="mt-5 text-[20px] space-y-4">
          The process of converting SGPA to percentage is straightforward. SGPA
          is usually calculated on a 10.0 scale, and most universities follow a
          specific formula to convert it into a percentage. The most widely used
          formula is:
          <br />
          <strong className="flex justify-center text-[#008080] text-[23px] mt-3">
            Percentage = (SGPA x 10) - 7.5
          </strong>{" "}
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
            filling out academic forms and applications that require marks in
            percentage format.
          </div>
        </p>
        <h1 className="font-bold text-[25px] text-black mt-5">
          Why use Percentage instead of SGPA?
        </h1>
        <p className="mt-5 text-[20px]">
          While SGPA (Semester Grade Point Average) is a modern and efficient
          grading system widely used by universities, many institutions,
          organizations, and employers still prefer percentages to evaluate
          academic performance because percentages offer a clearer and more
          universally understood representation of a student's achievements. <br /> <br />
          Many forms and applications specifically ask for marks in percentage
          form when applying for jobs, internships, or higher studies.
          Government exams, scholarships, and several international universities
          also require academic scores in percentage format for eligibility and
          comparison purposes. Parents and students often find it easier to
          interpret percentages than grade points. <br /> <br /> For example, saying someone
          scored 82% is quite simpler than explaining what an SGPA of 8.7
          represents. In conclusion, while SGPA is useful within universities,
          percentages are preferred for external comparisons, making them more
          practical and widely accepted across different platforms.
        </p>
      </section>
    </>
  );
}
