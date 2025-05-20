
export interface BlogPost {
  id: string; // Renamed from slug
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "understanding-gpa", // Renamed from slug
    title: "Understanding GPA: A Student's Guide",
    date: "October 26, 2023",
    excerpt: "Dive deep into how GPA is calculated and why it's crucial for your academic journey. Tips and tricks included!",
    imageUrl: "https://placehold.co/800x400.png",
    imageAlt: "Student studying for GPA",
    imageHint: "education study",
  },
  {
    id: "sgpa-vs-cgpa", // Renamed from slug
    title: "SGPA vs CGPA: What's the Difference?",
    date: "November 02, 2023",
    excerpt: "Confused between SGPA and CGPA? This post breaks down the key differences and how they impact your overall academic profile.",
    imageUrl: "https://placehold.co/800x400.png",
    imageAlt: "Comparison chart",
    imageHint: "charts comparison",
  },
  {
    id: "effective-calculator-use", // Renamed from slug
    title: "Maximizing Your Score: Effective Use of Calculators",
    date: "November 09, 2023",
    excerpt: "Learn how to leverage academic calculators to your advantage for better planning and score tracking throughout your semester.",
    imageUrl: "https://placehold.co/800x400.png",
    imageAlt: "Calculator and notebook",
    imageHint: "calculator notebook",
  },
  {
    id: "time-management", // Renamed from slug
    title: "Tips for Effective Time Management in College",
    date: "November 16, 2023",
    excerpt: "Balancing studies, social life, and personal well-being can be challenging. Here are some tips to manage your time effectively.",
    imageUrl: "https://placehold.co/800x400.png",
    imageAlt: "Student managing time",
    imageHint: "time management student",
  },
];

// Renamed from getPostBySlug and parameter changed
export const getPostById = (postId: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === postId);
};
