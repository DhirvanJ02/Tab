"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import ButtonboxHome from "../buttons/ButtonboxHome";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100); // Change 100 to the desired scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className="border-b border-[#2D4335] bg-[#2D4335] py-4 fixed top-0 left-0 w-full text-white z-50"
  >
  <div className="container flex justify-between items-center">
  {/* Logo */}
  <Link href={`/`}>
    <Image src={`/images/2010.png`} height={120} width={120} alt="Logo" />
  </Link>

  {/* Desktop Menu - Centered Links */}
  <div className="hidden lg:flex items-center space-x-8 mx-auto">
  <Link href="/" className="relative group">
          <span className="font-gotham font-bold text-heading-1 transition-all">
            Home
          </span>
          <span
            className={`absolute left-0 bottom-0 w-0 h-1 bg-bet-turq transition-all duration-300 ease-in-out group-hover:w-full ${
              pathname === "/" ? "w-full" : ""
            }`}
          />
        </Link>
    <Link href="/about" className="relative group">
      <span className="font-gotham font-bold text-heading-1 transition-all">
        About Us
      </span>
      <span
        className={`absolute left-0 bottom-0 w-0 h-1 bg-bet-heading-mustard transition-all duration-300 ease-in-out group-hover:w-full ${
          pathname === "/about" ? "w-full" : ""
        }`}
      />
    </Link>
    <Link href="/history" className="relative group">
      <span className="font-gotham font-bold text-heading-1 transition-all">
       History
      </span>
      <span
        className={`absolute left-0 bottom-0 w-0 h-1 bg-bet-textpurp transition-all duration-300 ease-in-out group-hover:w-full ${
          pathname === "/bet-cares" ? "w-full" : ""
        }`}
      />
    </Link>
    <Link href="/contact" className="relative group">
      <span className="font-gotham font-bold text-heading-1 transition-all">
        Contact Us
      </span>
      <span
        className={`absolute left-0 bottom-0 w-0 h-1 bg-bet-heading-bbybule transition-all duration-300 ease-in-out group-hover:w-full ${
          pathname === "/contact" ? "w-full" : ""
        }`}
      />
    </Link>
  </div>

  {/* Join Our Team Button (Visible on Desktop, Hidden on Mobile) */}
  {/* <ButtonboxHome
    text="Join Our Team"
    link="/careers"
    className="hidden lg:inline-block"
  /> */}

  {/* Hamburger Icon for Mobile */}
  <div className="lg:hidden">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-bet-turq text-2xl focus:outline-none"
    >
      {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  </div>
</div>

  
    {/* Mobile Menu */}
    {menuOpen && (
      <div className="lg:hidden bg-bet-navy text-white fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 z-40">
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-7 text-bet-turq text-3xl"
        >
          <AiOutlineClose />
        </button>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>
          About Us
        </Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>
          Blog
        </Link>
        <Link href="/bet-cares" onClick={() => setMenuOpen(false)}>
          Bet Cares
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </Link>
        <Link href="/careers" onClick={() => setMenuOpen(false)}>
          Join Our Team
        </Link>
      </div>
    )}
  </div>
  
  );
}
