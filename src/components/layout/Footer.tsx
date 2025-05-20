
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-6 md:py-8">
      <div className="container  gap-2 text-center md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EduCalculators. All rights reserved.
        </p>
        <div className="text-center">
          <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground px-5">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
