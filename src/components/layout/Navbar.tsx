
"use client";
import Link from 'next/link';
import { GraduationCap, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMobileSidebar } from '@/contexts/MobileSidebarContext';
import Image from 'next/image';
export function Navbar() {
  const { toggleMobileSidebar } = useMobileSidebar();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-32">
        {/* Mobile Sidebar Trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden text-foreground hover:bg-accent/10"
          onClick={toggleMobileSidebar}
        >
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Open sidebar</span>
        </Button>

        <Link href="/" className="flex items-center space-x-2 mr-auto">
          <Image src='./images/logo.png' alt="Logo" width={100} height={50} />
        </Link>
        
        <div className="hidden md:flex items-center space-x-4 md:space-x-14">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-[#008080]">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground transition-colors hover:text-[#008080]">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-[#008080]">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-[#008080]">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
