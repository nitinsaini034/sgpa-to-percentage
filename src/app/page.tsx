
"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Added Card imports
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"; // Added DialogClose
import { Button } from "@/components/ui/button"; // Added Button for DialogClose
import { X } from "lucide-react"; // Added X for DialogClose
import { motion, AnimatePresence } from "framer-motion";
import {
  Percent,
  Sigma,
  TrendingUp,
  LineChart,
} from "lucide-react";

import type { CalculatorId, CalculatorInfo } from "@/components/calculators/types";
import { SgpaToPercentageCalculator } from "@/components/calculators/SgpaToPercentageCalculator";
import { CgpaToPercentageCalculator } from "@/components/calculators/CgpaToPercentageCalculator";
import { TotalMarksCalculator } from "@/components/calculators/TotalMarksCalculator";
// If the file exports default, use:
import {SgpaToCgpaCalculator} from "@/components/calculators/SgpaToCgpaCalculator";
// If the file exports a different named export, use the correct name:
// import { CorrectExportName } from "@/components/calculators/SgpaToCgpaCalculator";

const academicCalculatorList: CalculatorInfo[] = [
  { id: 'sgpaToPercentage', name: "SGPA to Percentage", description: "Convert SGPA to percentage.", icon: Percent },
  { id: 'cgpaToPercentage', name: "CGPA to Percentage", description: "Convert CGPA to percentage.", icon: LineChart },
  { id: 'sgpaToCgpa', name: "SGPA to CGPA", description: "Calculate CGPA from SGPAs.", icon: TrendingUp },
  { id: 'totalMarks', name: "Total Marks", description: "Calculate percentage from total marks.", icon: Sigma },
];

export interface AppLevelResult {
  value: number | string | null;
  label: string;
  // key property removed to prevent hydration/update issues
}

export default function HomePage() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorId>(academicCalculatorList.length > 0 ? academicCalculatorList[0].id : '' as CalculatorId);
  const [appLevelResult, setAppLevelResult] = useState<AppLevelResult | null>(null);
  const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);

  const handleCalculatorChange = (value: string) => {
    setActiveCalculator(value as CalculatorId);
    setAppLevelResult(null); // Clear result when individual calculator changes
    setIsResultDialogOpen(false); // Close dialog when calculator changes
  };
  
  const handleSetAppLevelResult = (result: AppLevelResult | null) => {
    setAppLevelResult(result);
    if (result && result.value !== null) {
      setIsResultDialogOpen(true);
    } else {
      setIsResultDialogOpen(false);
    }
  };

  const renderCalculator = () => {
    const commonProps = { setAppLevelResult: handleSetAppLevelResult };
    switch (activeCalculator) {
      case 'sgpaToPercentage':
        return <SgpaToPercentageCalculator {...commonProps} />;
      case 'cgpaToPercentage':
        return <CgpaToPercentageCalculator {...commonProps} />;
      case 'totalMarks':
        return <TotalMarksCalculator {...commonProps} />;
      case 'sgpaToCgpa':
        return <SgpaToCgpaCalculator {...commonProps} />;
      default:
        if (academicCalculatorList.length === 0) {
          return <p className="text-center text-muted-foreground mt-8">No calculators available.</p>;
        }
        return <p className="text-center text-muted-foreground mt-8">Please select a calculator.</p>;
    }
  };

  return (
    <div className="flex flex-1 flex-col w-full bg-background">
      {/* Individual Calculator Tabs - Rendered based on academicCalculatorList */}
      <nav className="flex flex-col items-center border-b bg-background/95 p-2 sm:p-3 shadow-sm sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {academicCalculatorList.length > 0 && (
          <Tabs
            value={activeCalculator}
            onValueChange={handleCalculatorChange}
            className="w-full max-w-5xl"
          >
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-1 h-auto bg-muted rounded-lg">
              {academicCalculatorList.map((calc) => (
                <TabsTrigger
                  key={calc.id}
                  value={calc.id}
                  className="flex flex-col items-center justify-center gap-1.5 p-3 h-auto data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-md hover:bg-card/90 rounded-md transition-all text-xs sm:text-sm"
                  aria-label={calc.name}
                >
                  <calc.icon className="h-5 w-5 sm:h-6 sm:w-6 mb-0.5 sm:mb-1" />
                  <span className="text-center leading-tight">{calc.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
         {academicCalculatorList.length === 0 && (
           <p className="text-center text-muted-foreground mt-2">No academic calculators available.</p>
         )}
      </nav>

      {/* App Level Result Dialog */}
      <AnimatePresence>
        {isResultDialogOpen && appLevelResult && appLevelResult.value !== null && (
          <Dialog open={isResultDialogOpen} onOpenChange={setIsResultDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-primary text-xl text-center">{appLevelResult.label}</DialogTitle>
                <DialogDescription className="text-center pt-2">
                  <span className="text-3xl font-bold text-accent">
                    {typeof appLevelResult.value === 'number' && !Number.isInteger(appLevelResult.value)
                      ? appLevelResult.value.toFixed(2)
                      : appLevelResult.value}
                  </span>
                </DialogDescription>
              </DialogHeader>
              <DialogClose asChild>
                <Button type="button" variant="outline" className="mt-4 w-full" onClick={() => setIsResultDialogOpen(false)}>
                  Close
                </Button>
              </DialogClose>
               <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
        <div className="w-full">
          {renderCalculator()}
        </div>
      </main>
    </div>
  );
}
