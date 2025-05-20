
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 flex-grow px-6 md:px-40">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">About EduCalculators</h1>
      
      <div className="bg-card p-6 md:p-8 rounded-lg shadow-md mb-8">
        <p className="text-lg text-card-foreground leading-relaxed mb-4">
          EduCalculators is dedicated to providing students with easy-to-use and accurate academic calculation tools. 
          Our mission is to simplify complex calculations like SGPA, CGPA, and grade conversions, helping students 
          focus on their studies and achieve their academic goals.
        </p>
        <p className="text-card-foreground leading-relaxed">
          We understand the importance of precise academic tracking, and our suite of calculators is designed 
          to be intuitive, reliable, and accessible to everyone. Whether you're calculating your semester GPA or 
          converting scores to percentages, EduCalculators is your trusted partner.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8"> {/* Changed items-center to items-stretch */}
        <div className="bg-card p-6 rounded-lg shadow-md flex flex-col justify-center"> {/* Added card styling */}
          <h2 className="text-2xl font-semibold text-primary mb-3">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To be the go-to platform for students worldwide seeking quick and dependable academic calculations, 
            fostering a better understanding of their academic progress.
          </p>
          <h2 className="text-2xl font-semibold text-primary mb-3">Our Commitment</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are committed to continuously improving our tools, adding new features based on user feedback, 
            and ensuring our platform remains up-to-date with diverse academic systems.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
           <Image 
            src="https://placehold.co/600x400.png" 
            alt="Educational tools" 
            width={600} 
            height={400} 
            className="w-full h-full object-cover" /* Ensure image fills height if items-stretch is used */
            data-ai-hint="education study" 
          />
        </div>
      </div>

      <div className="text-center bg-secondary/30 p-6 rounded-lg shadow-md"> {/* Changed shadow-sm to shadow-md */}
        <h2 className="text-2xl font-semibold text-primary mb-3">Join Our Community</h2>
        <p className="text-muted-foreground">
          We are constantly evolving and love to hear from our users. If you have suggestions or feedback, 
          please don't hesitate to reach out!
        </p>
      </div>
    </div>
  );
}
