
"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorShell } from "@/components/CalculatorShell";
import { useDynamicList } from "@/hooks/useDynamicList";
import type { MarksItem } from "./types";
import { PlusCircle, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { AppLevelResult } from "@/app/page"; // Import AppLevelResult type

const createDefaultMarksItem = (): Omit<MarksItem, "id"> => ({ subject: "", marksObtained: "", totalMarks: "" });

interface TotalMarksCalculatorProps {
  setAppLevelResult: (result: AppLevelResult | null) => void;
}

export function TotalMarksCalculator({ setAppLevelResult }: TotalMarksCalculatorProps) {
  const { items: marksItems, addItem, removeItem, updateItem, resetItems } = useDynamicList<MarksItem>(createDefaultMarksItem);
  // const [totalPercentage, setTotalPercentage] = useState<number | null>(null); // Local state no longer directly drives shell
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let sumMarksObtained = 0;
    let sumTotalMarks = 0;

    for (const item of marksItems) {
      const marksObtained = parseFloat(item.marksObtained);
      const totalMarks = parseFloat(item.totalMarks);

      if (isNaN(marksObtained) || isNaN(totalMarks) || totalMarks <= 0 || marksObtained < 0 || marksObtained > totalMarks) {
         toast({ title: "Invalid Input", description: `Please check inputs for subject: ${item.subject || 'Unnamed Subject'}. Ensure marks are valid numbers, total marks positive, and obtained marks not exceeding total.`, variant: "destructive" });
        setAppLevelResult(null);
        return;
      }
      sumMarksObtained += marksObtained;
      sumTotalMarks += totalMarks;
    }

    if (sumTotalMarks === 0) {
      toast({ title: "No Total Marks", description: "Sum of total marks cannot be zero.", variant: "destructive" });
      setAppLevelResult(null);
      return;
    }
    
    const calculatedPercentage = (sumMarksObtained / sumTotalMarks) * 100;
    // setTotalPercentage(Math.max(0, Math.min(100, calculatedPercentage)));
    setAppLevelResult({ value: Math.max(0, Math.min(100, calculatedPercentage)), label: "Overall Percentage",  });
  };
  
  const handleReset = () => {
    resetItems();
    // setTotalPercentage(null);
    setAppLevelResult(null);
  };

  return (
    <CalculatorShell
      title="Total Marks to Percentage"
      description="Calculate your overall percentage from marks obtained and total marks in various subjects."
      // result and resultLabel props are removed
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {marksItems.map((item, index) => (
          <div key={item.id} className="p-4 border rounded-md space-y-3 bg-card shadow-sm relative">
            <Label className="text-sm font-medium text-muted-foreground">Subject {index + 1}</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1">
                <Label htmlFor={`subjectName-${item.id}`} >Subject Name (Optional)</Label>
                <Input
                  id={`subjectName-${item.id}`}
                  type="text"
                  value={item.subject}
                  onChange={(e) => updateItem(item.id, { subject: e.target.value })}
                  placeholder="e.g., Physics"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor={`marksObtained-${item.id}`}>Marks Obtained *</Label>
                <Input
                  id={`marksObtained-${item.id}`}
                  type="number"
                  step="0.1"
                  min="0"
                  value={item.marksObtained}
                  onChange={(e) => updateItem(item.id, { marksObtained: e.target.value })}
                  placeholder="e.g., 75"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor={`totalMarks-${item.id}`} >Total Marks *</Label>
                <Input
                  id={`totalMarks-${item.id}`}
                  type="number"
                  step="0.1"
                  min="0.1"
                  value={item.totalMarks}
                  onChange={(e) => updateItem(item.id, { totalMarks: e.target.value })}
                  placeholder="e.g., 100"
                  required
                />
              </div>
            </div>
            {marksItems.length > 1 && (
               <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-destructive hover:bg-destructive/10"
                onClick={() => removeItem(item.id)}
                aria-label="Remove subject"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}

        <Button type="button" variant="outline" onClick={addItem} className="w-full flex items-center gap-2">
          <PlusCircle className="h-4 w-4" /> Add Subject
        </Button>
        
        <div className="flex space-x-2 pt-4">
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Calculate Percentage</Button>
          <Button type="button" variant="outline" onClick={handleReset} className="w-full">Reset</Button>
        </div>
      </form>
    </CalculatorShell>
  );
}
