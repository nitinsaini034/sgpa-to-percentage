
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from 'next/navigation';
import type { BlogPost } from "@/lib/blog-data";
import { getPostById } from "@/lib/blog-data";

// Define the specific ID for this post
const POST_ID = "top-10-tips";

export default function SgpaVsCgpaPage() {
  const post = getPostById(POST_ID);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 flex-grow px-4 md:px-16 lg:px-32 xl:px-48">
      <Card className="shadow-xl overflow-hidden">
        <CardHeader className="p-0 relative">
          {post.imageUrl && (
            <Image
              src={post.imageUrl}
              alt={post.imageAlt || post.title}
              width={800}
              height={400}
              className="w-full flex flex-col items-center justify-center"
              data-ai-hint={post.imageHint || "article header"}
              priority
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
           <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2 break-words">
              {post.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground/80">{post.date}</p>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div
            className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none text-card-foreground
                       prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80
                       prose-strong:text-card-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
          />
            <h1 className="text-2xl">Hello world!!</h1>
          <div className="mt-12 pt-6 border-t border-border">
            <Link href="/blog" className="inline-flex items-center text-accent hover:text-accent/80 font-medium group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateMetadata() {
  const post = getPostById(POST_ID);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }
  return {
    title: `${post.title} | sgpa2percentages Blog`,
    description: post.excerpt,
  };
}
