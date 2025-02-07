"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  // State to toggle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Header div */}
      <div className="bg-transparent absolute lg:pt-[45px] w-full h-fit lg:h-[87px] flex lg:items-center justify-between px-6 z-50 lg:flex-col flex-row pb-[110px]">
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="logo mb-5 text-2xl lg:mt-0 mt-4 text-white font-bold">
              <span className="text-[#FF9F0D]">Food</span>tuck
            </h1>
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-white">
            <Image src="/burger-menu.png" alt="Menu" width={24} height={24} />
          </button>
        </div>

        {/* Navigation Links (Desktop & Mobile) */}
        <nav
          className={`lg:flex lg:flex-row gap-4 lg:gap-10  ${
            isMenuOpen ? "flex flex-col absolute top-[87px] left-0 bg-black w-full p-6" : "hidden lg:flex"
          }`}
        >
          <Link href="/" className="text-white group relative">
            Home
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>
          <Link href="/menu" className="text-white group relative">
            Menu
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>
          <Link href="/blog" className="text-white group relative">
            Blog
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>
          <Link href="/pages" className="text-white group relative">
            Pages
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>
          <Link href="/About" className="text-white group relative">
            About
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>
          <Image src="/Project Status.svg" width={12} height={12} alt="about-dropdown" className="ml-[-35px] mt-[-15px]" />
          <Link href="/shop" className="text-white group relative">
            Shop
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>
          <Link href="/signup" className="text-white group relative">
            Sign Up
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[5px] bg-[#FF9F0D] group-hover:w-2 items-center rounded-full transition-all"></span>
          </Link>

          {/* Search Section */}
          <div className="relative lg:ml-0 ml-[100px]">
            {/* Search input field */}
            <input
              type="text"
              placeholder="Search..."
              className="lg:ml-40 lg:mr-[-25px] lg:mt-[-5px] ml-[-100px] pl-10 pr-4 py-2 w-[250px] lg:w-[310px] border rounded-3xl text-white border-[#FF9F0D] bg-transparent"
            />

            {/* Search icon image */}
            <Image
              src="/searchicon.svg"
              alt="Search Icon"
              width={12}
              height={12}
              className="w-5 h-5 absolute right-3 mt-[-35px] lg:mr-[-20px] mr-[25px]" // Test with a simple size
            />
          </div>

          {/* Handbag Icon */}
          <Link href={"/cart"}>
            <Image src="/Handbag.svg" alt="Handbag Icon" width={24} height={24} />
          </Link>
        </nav>
      </div>
    </>
  );
}
