
"use client";

import { useMobileSidebar } from '@/contexts/MobileSidebarContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export function GlobalMobileNav() {
  const { isMobileSidebarOpen, setIsMobileSidebarOpen } = useMobileSidebar();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
      <SheetContent side="left" className="w-[280px] p-0 flex flex-col bg-card md:hidden"> {/* Hide on md and above */}
        <SheetHeader className="p-4 border-b flex flex-row items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <SheetTitle className="text-lg font-semibold text-primary">EduCalculators</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col p-4 space-y-1 mt-2 flex-grow">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-card-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              onClick={() => setIsMobileSidebarOpen(false)} // Close sidebar on link click
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t mt-auto">
            <p className="text-xs text-muted-foreground text-center">&copy; {new Date().getFullYear()} EduCalculators</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
