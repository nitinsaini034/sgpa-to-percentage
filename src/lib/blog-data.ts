
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
    id: "sgpa-vs-cgpa", // Renamed from slug
    title: "SGPA vs CGPA: What's the Difference?",
    date: "November 02, 2023",
    excerpt: "Confused between SGPA and CGPA? This post breaks down the key differences and how they impact your overall academic profile.",
    imageUrl: "https://placehold.co/800x400.png",
    imageAlt: "Comparison chart",
    imageHint: "charts comparison",
  },
  {
    id: "top-10-tips",
    title: "Top 10 tips for Academic success",
    date: "May 24, 2025",
    excerpt: "If you want to improve your academic performance, check out these top 10 tips that can help you excel in your studies.",
    imageUrl: "/images/tips.png",
    imageAlt: "Top 10 tips for Academic success",
    imageHint: "Top 10 tips for Academic success",
  }

];

// Renamed from getPostBySlug and parameter changed
export const getPostById = (postId: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === postId);
};
