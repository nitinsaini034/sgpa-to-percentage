"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorShell } from "@/components/CalculatorShell";
import { useDynamicList } from "@/hooks/useDynamicList";
import type { SgpaItem } from "./types";
import { PlusCircle, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { AppLevelResult } from "@/app/page"; // Import AppLevelResult type

const createDefaultSgpaItem = (): Omit<SgpaItem, "id"> => ({
  sgpa: "",
  credits: "",
});

interface SgpaToCgpaCalculatorProps {
  setAppLevelResult: (result: AppLevelResult | null) => void;
}

export function SgpaToCgpaCalculator({
  setAppLevelResult,
}: SgpaToCgpaCalculatorProps) {
  const {
    items: sgpaItems,
    addItem,
    removeItem,
    updateItem,
    resetItems,
  } = useDynamicList<SgpaItem>(createDefaultSgpaItem, 2);
  // const [cgpa, setCgpa] = useState<number | null>(null); // Local state no longer directly drives shell
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let totalWeightedSgpa = 0;
    let totalCredits = 0;

    for (const item of sgpaItems) {
      const sgpa = parseFloat(item.sgpa);
      const credits = parseFloat(item.credits);

      if (isNaN(sgpa) || isNaN(credits) || credits <= 0 || sgpa < 0) {
        toast({
          title: "Invalid Input",
          description: `Please check inputs for Semester ${
            sgpaItems.indexOf(item) + 1
          }. Ensure SGPA (non-negative) and Credits (positive) are valid numbers.`,
          variant: "destructive",
        });
        setAppLevelResult(null);
        return;
      }
      totalWeightedSgpa += sgpa * credits;
      totalCredits += credits;
    }

    if (totalCredits === 0) {
      toast({
        title: "No Credits",
        description:
          "Total credits cannot be zero. Please add semester data with credits.",
        variant: "destructive",
      });
      setAppLevelResult(null);
      return;
    }

    const calculatedCgpa = totalWeightedSgpa / totalCredits;
    // setCgpa(calculatedCgpa);
    setAppLevelResult({ value: calculatedCgpa, label: "Calculated CGPA" });
  };

  const handleReset = () => {
    resetItems();
    // setCgpa(null);
    setAppLevelResult(null);
  };

  return (
    <>
      <CalculatorShell
        title="SGPA to CGPA Calculator"
        description="Calculate your Cumulative Grade Point Average (CGPA) from your Semester GPAs (SGPAs) and corresponding semester credits."
        // result and resultLabel props are removed
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {sgpaItems.map((item, index) => (
            <div
              key={item.id}
              className="p-4 border rounded-md space-y-3 bg-card shadow-sm relative"
            >
              <Label className="text-sm font-medium text-muted-foreground">
                Semester {index + 1}
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor={`sgpa-${item.id}`}>
                    SGPA *
                  </Label>
                  <Input
                    id={`sgpa-${item.id}`}
                    type="number"
                    step="0.01"
                    min="0"
                    value={item.sgpa}
                    onChange={(e) =>
                      updateItem(item.id, { sgpa: e.target.value })
                    }
                    placeholder="Enter your SGPA"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`credits-${item.id}`}>
                    Total Credits in Semester *
                  </Label>
                  <Input
                    id={`credits-${item.id}`}
                    type="number"
                    step="0.5"
                    min="0.5"
                    value={item.credits}
                    onChange={(e) =>
                      updateItem(item.id, { credits: e.target.value })
                    }
                    placeholder="e.g., 24"
                    required
                  />
                </div>
              </div>
              {sgpaItems.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-destructive hover:bg-destructive/10"
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove semester"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={addItem}
            className="w-full flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" /> Add Semester
          </Button>

          <div className="flex space-x-2 pt-4">
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Calculate CGPA
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
      <hr className="mt-8" />
      <section className="flex-1 overflow-auto md:px-12 lg:p-8 w-full max-w-5xl mx-auto mt-2 text-[18px]">
       <h1 className="font-bold text-[20px] text-[#008080]">Difference between CGPA and SGPA</h1>
       <table className="border border-gray-500 text-[20px] mt-5">
            <thead>
              <tr>
                <th className="text-center font-semibold border border-gray-500">
                  Aspect
                </th>
                <th className="text-center font-semibold border border-gray-500">
                  CGPA
                </th>
                <th className="text-center font-semibold border border-gray-500">
                  SGPA
                </th>
              </tr>
            </thead>
            <tbody className="border border-gray-500 p-2 text-center text-[18px]">
              <tr>
                <td className="border border-gray-500 p-2">Definition</td>
                <td className="border border-gray-500 p-2">
                  Cumulative Grade Point Average across all semesters.
                </td>
                <td className="border border-gray-500 p-2">
                  Grade Point Average for a specific semester.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Calculation</td>
                <td className="border border-gray-500 p-2">
                  Calculated by averaging the SGPA of all semesters.
                </td>
                <td className="border border-gray-500 p-2">
                  Calculated based on grades and credits for courses in a
                  semester.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Usage</td>
                <td className="border border-gray-500 p-2">
                  Used to assess overall academic performance.
                </td>
                <td className="border border-gray-500 p-2">
                  Used to assess performance in a specific semester.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">
                  Calculation basics
                </td>
                <td className="border border-gray-500 p-2">
                  Total grade points / total credit hours (single term/course)
                </td>
                <td className="border border-gray-500 p-2">
                  Total points earned in a semester / total credits in that
                  semester
                </td>
              </tr>
            </tbody>
          </table>
      </section>
    </>
  );
}
