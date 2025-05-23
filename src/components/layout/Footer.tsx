
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-6 md:py-8">
      <div className="container  gap-4 text-center flex flex-row items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} sgpa2percentage. All rights reserved.
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
