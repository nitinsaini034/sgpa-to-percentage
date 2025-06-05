"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorShell } from "@/components/CalculatorShell";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import type { AppLevelResult } from "@/app/page"; // Import AppLevelResult type
import Table from "@/components/calculators/Table";
import Table2 from "@/components/calculators/Table2";
import Table3 from "@/components/calculators/Table3";
import Image from "next/image";

interface CgpaToPercentageCalculatorProps {
  setAppLevelResult: (result: AppLevelResult | null) => void;
}

export function CgpaToPercentageCalculator({
  setAppLevelResult,
}: CgpaToPercentageCalculatorProps) {
  const [cgpa, setCgpa] = useState<string>("");
  const [maxScale, setMaxScale] = useState<string>("10.0");
  // const [percentage, setPercentage] = useState<number | null>(null); // Local state no longer directly drives shell
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cgpaValue = parseFloat(cgpa);
    const selectedMaxScaleValue = parseFloat(maxScale);

    if (isNaN(cgpaValue)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid number for CGPA.",
        variant: "destructive",
      });
      setAppLevelResult(null);
      return;
    }

    if (cgpaValue < 0) {
      toast({
        title: "Invalid CGPA",
        description: "CGPA cannot be negative.",
        variant: "destructive",
      });
      setAppLevelResult(null);
      return;
    }

    if (cgpaValue > selectedMaxScaleValue) {
      toast({
        title: "Invalid Input",
        description: `CGPA (${cgpaValue}) cannot be greater than selected Max GPA Scale (${selectedMaxScaleValue}).`,
        variant: "destructive",
      });
      setAppLevelResult(null);
      return;
    }

    let calculatedPercentage: number;

    if (maxScale === "10.0") {
      calculatedPercentage = cgpaValue * 9.5;
    } else if (maxScale === "5.0") {
      calculatedPercentage = (cgpaValue / 5) * 100;
    } else if (maxScale === "4.0") {
      calculatedPercentage = (cgpaValue / 4) * 100;
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
    // setPercentage(calculatedPercentage); // Update local state if needed for other logic
    setAppLevelResult({
      value: calculatedPercentage,
      label: "Your Percentage",
    });
  };

  const handleReset = () => {
    setCgpa("");
    setMaxScale("10.0");
    // setPercentage(null);
    setAppLevelResult(null);
  };

  const handleScaleButtonClick = (newScale: string) => {
    setMaxScale(newScale);
    setCgpa("");
    // setPercentage(null);
    setAppLevelResult(null);
  };

  return (
    <>
      <CalculatorShell
        title="CGPA to Percentage"
        description="Convert your CGPA (Cumulative Grade Point Average) to percentage. Select the maximum scale your CGPA is on."
        // result and resultLabel props are removed
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="cgpa">CGPA</Label>
            <Input
              id="cgpa"
              type="number"
              step="0.01"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              placeholder="e.g., 8.2 or 3.2"
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
        <h1 className="font-bold text-[20px] text-[#008080]">What is CGPA?</h1>
        <p className="mt-5">
          CGPA (Cumulative Grade Point Average) is a widely used metric for
          assessing academic performance across multiple semesters. It provides
          a consolidated score that represents a student's overall achievements,
          similar to how a gymnast's all-around score summarizes their entire
          performance.
        </p>
        <h1 className="font-bold text-[20px] text-[#008080] mt-5">
          Importance of CGPA
        </h1>
        <ul className="list-disc list-outside">
          <li className="mt-5">
            CGPA provides an overall view of a student's academic progress
            across multiple semesters, rather than focusing on individual
            subject scores.
          </li>
          <li className="mt-5">
            Many universities use CGPA as a key factor in admissions and
            recruitment.
          </li>
          <li className="mt-5">
            A good CGPA increases the chances of securing scholarships,
            internships, and research opportunities.{" "}
          </li>
          <li className="mt-5">
            It offers a uniform grading system used by many universities, making
            it easier to compare student performance across institutions.
          </li>
          <li className="mt-5">
            CGPA shows your consistency and dedication to your studies over
            time.
          </li>
        </ul>
        <Table />
        <Table2 />
        <Table3 />
        <h1 className="font-bold text-[20px] text-[#008080] mt-5">
          How to convert CGPA into Percentage?
        </h1>
        <div className="flex flex-col items-center justify-center mt-5">
          <Image
            src="/images/understand_cgpa.png"
            alt="How to convert SGPA into Percentage"
            width={600}
            height={200}
          />
        </div>
        <div className="mt-5 space-y-4">
          The conversion of CGPA to Percentage involves a specific formula. The most widely accepted formula for 10.0 grade scale is:
          <br />
           <div className="flex justify-center mt-3">
            <strong className="text-black text-[20px] border border-teal-400 shadow-lg rounded-md px-4 py-2 bg-white">
              Percentage = (CGPA x 9.5)
            </strong>
          </div>
          <p className="mt-5">
          Let's understand the conversion of CGPA to Percentage with the help of an example. Assume that your CGPA is 8.2 on a 10.0 scale.
          </p>
          <div className="mt-5 border-1 border-gray-400 rounded-xl shadow-md p-4 ">
            <div className="border-1 border-teal-400 hover:border-teal-500 rounded-2xl p-4 transition-all duration-300 transform shadow-md hover:shadow-xl active:shadow-xl focus:shadow-xl">
                <p>
                <strong className="text-[#008080] underline">Step 1:</strong> In
                the first step, we multiply the GCPA by 10:
              </p>
                <p className="mt-2">
                CGPA = 8.2 <br />
                8.2 x 9.5 = 77.9
              </p>
            </div>
            <div className="border-1 border-teal-400 hover:border-teal-500 rounded-2xl p-4 transition-all duration-300 transform shadow-md hover:shadow-xl active:shadow-xl focus:shadow-xl mt-5">
               <p>
                <strong className="text-[#008080] underline">Step 2:</strong> After multiplying, we get the result, this result is your final percentage.
              </p>
              <strong>
                <p className="mt-2">Final Percentage = 77.9%</p>
              </strong>
            </div>

          </div>
          

        </div>
      </section>
    </>
  );
}
