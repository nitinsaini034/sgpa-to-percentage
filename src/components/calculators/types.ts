
export type CalculatorId = 
  | 'sgpaToPercentage' 
  | 'cgpaToPercentage' 
  | 'totalMarks'
  | 'sgpaToCgpa';
  // | 'heightConverter' // Removed
  // | 'dollarRupeeConverter'; // Removed

export interface CalculatorInfo {
  id: CalculatorId;
  name: string;
  description: string;
  icon: React.ElementType; // Lucide icon component
}

export interface Course {
  id: string;
  name: string;
  grade: string; // Store as string, parse to number for calculation
  credits: string; // Store as string, parse to number
}

export interface GradeItem {
  id: string;
  name: string;
  grade: string;
  weight: string;
}

export interface MarksItem {
  id: string;
  subject: string;
  marksObtained: string;
  totalMarks: string;
}

export interface SgpaItem {
  id: string;
  sgpa: string;
  credits: string;
}

export interface GradePoint {
  grade: string;
  points: number;
}

export type GradingScaleType = "4.0" | "10.0";

export const GRADE_OPTIONS_4_0: GradePoint[] = [
  { grade: "A", points: 4.0 },
  { grade: "A-", points: 3.7 },
  { grade: "B+", points: 3.3 },
  { grade: "B", points: 3.0 },
  { grade: "B-", points: 2.7 },
  { grade: "C+", points: 2.3 },
  { grade: "C", points: 2.0 },
  { grade: "C-", points: 1.7 },
  { grade: "D+", points: 1.3 },
  { grade: "D", points: 1.0 },
  { grade: "F", points: 0.0 },
];

export const GRADE_OPTIONS_10_0: GradePoint[] = [
  { grade: "O", points: 10.0 },
  { grade: "A+", points: 9.0 },
  { grade: "A", points: 8.0 },
  { grade: "B+", points: 7.0 },
  { grade: "B", points: 6.0 },
  { grade: "C", points: 5.0 },
  { grade: "P", points: 4.0 },
  { grade: "F", points: 0.0 },
];

export const getGradeOptions = (scale: GradingScaleType): GradePoint[] => {
  switch (scale) {
    case "4.0":
      return GRADE_OPTIONS_4_0;
    case "10.0":
      return GRADE_OPTIONS_10_0;
    default:
      return [];
  }
};
