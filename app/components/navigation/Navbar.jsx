"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Church } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy text-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
  
            <Link href="/" className="flex items-center space-x-2">
            <Image
      src="/images/TabMono.png"
      alt="Full Gospel Tabernacle Logo"
      width={32}
      height={32}
      className="h-8 w-8"
    />
              <span className="text-xl font-bold font-serif tracking-wide">Full Gospel Tabernacle</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md hover:bg-sage hover:text-navy transition-colors">
                Hear The Hearbeat
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md hover:bg-sage hover:text-navy transition-colors">
                Feel The Heartbeat
              </Link>
              <Link href="/new-here" className="px-3 py-2 rounded-md hover:bg-sage hover:text-navy transition-colors">
                Be The Heartbeat
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-md hover:bg-sage hover:text-navy transition-colors">
                Connect With Us
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-sage hover:text-navy transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md hover:bg-sage hover:text-navy transition-colors">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md hover:bg-sage hover:text-navy transition-colors">
              About
            </Link>
            <Link href="/new-here" className="block px-3 py-2 rounded-md hover:bg-sage hover:text-navy transition-colors">
              New Here
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md hover:bg-sage hover:text-navy transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;