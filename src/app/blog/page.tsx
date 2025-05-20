
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data"; // Import blogPosts data

export default function BlogPage() {
  return (
    <div className="container py-8 flex-grow md:px-40">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-3">Our Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest articles, tips, and insights on academic calculations and student life.
        </p>
      </header>
      
      {blogPosts.length === 0 ? (
         <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No blog posts yet. Check back soon for updates!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={post.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="text-xl font-semibold text-primary mb-2 line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-3">{post.date}</CardDescription>
                <p className="text-card-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                {/* Updated href to use post.id */}
                <Link href={`/blog/${post.id}`} className="text-sm text-accent hover:text-accent/80 font-medium flex items-center group">
                  Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
