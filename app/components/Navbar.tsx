
'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";
import logo from "@/public/Images/Gillingham.svg";
import Button from "../components/Buttons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isAcademyDropdownOpen, setIsAcademyDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleAcademyDropdown = () => {
    setIsAcademyDropdownOpen(!isAcademyDropdownOpen);
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center container mx-auto px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            className="h-12 w-auto sm:h-16"
            src={logo}
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center focus:outline-none"
              onClick={toggleAboutDropdown}
            >
          <Link href="/about">
              About Us
              </Link>
              {isAboutDropdownOpen ? (
                <AiOutlineCaretUp className="ml-1 text-primaryBlue" />
              ) : (
                <AiOutlineCaretDown className="ml-1 text-primaryBlue" />
              )}
            </button>
            {isAboutDropdownOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded-lg w-40">
                <Link href="#mission" className="block px-4 py-2 hover:bg-gray-100">
                  Our Mission
                </Link>
                <Link href="#team" className="block px-4 py-2 hover:bg-gray-100">
                  Our Team
                </Link>
                <Link href="#history" className="block px-4 py-2 hover:bg-gray-100">
                  Our History
                </Link>
              </div>
            )}
          </div>

          {/* Academy Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center focus:outline-none"
              onClick={toggleAcademyDropdown}
            ><Link href="academy">
              Academy
              </Link>
              {isAcademyDropdownOpen ? (
                <AiOutlineCaretUp className="ml-1 text-primaryBlue" />
              ) : (
                <AiOutlineCaretDown className="ml-1 text-primaryBlue" />
              )}
            </button>
            {isAcademyDropdownOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded-lg w-40">
                <Link href="#events" className="block px-4 py-2 hover:bg-gray-100">
                Events 
                </Link>
                <Link href="#features" className="block px-4 py-2 hover:bg-gray-100">
                  Features
                </Link>
                <Link href="#gallery" className="block px-4 py-2 hover:bg-gray-100">
                Gallery
                </Link>
              </div>
            )}
          </div>

          <Link href="#contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        {/* Sponsor Button */}
        <div className="hidden md:block">
          <Link href="#contact">
            <Button text="Become our sponsor" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg">
          <div className="flex flex-col items-center space-y-4 p-4 text-lg">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div className="relative">
              <button
                className="flex items-center"
                onClick={toggleAboutDropdown}
              ><Link href="/about">
                About Us
                </Link>
                {isAboutDropdownOpen ? (
                  <AiOutlineCaretUp className="ml-1 text-primaryBlue" />
                ) : (
                  <AiOutlineCaretDown className="ml-1 text-primaryBlue" />
                )}
              </button>
              {isAboutDropdownOpen && (
                <div className="bg-white mt-2 shadow rounded w-40">
                  <Link
                    href="#mission"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Our Mission
                  </Link>
                  <Link
                    href="#team"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="#history"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Our History
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Academy Dropdown */}
            <div className="relative">
              <button
                className="flex items-center"
                onClick={toggleAcademyDropdown}
              ><Link href="/academy">
                Academy
                </Link>
                {isAcademyDropdownOpen ? (
                  <AiOutlineCaretUp className="ml-1 text-primaryBlue" />
                ) : (
                  <AiOutlineCaretDown className="ml-1 text-primaryBlue" />
                )}
              </button>
              {isAcademyDropdownOpen && (
                <div className="bg-white mt-2 shadow rounded w-40">
                  <Link
                    href="#events "
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                   Events 
                  </Link>
                  <Link
                    href="#features"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Features
                  </Link>
                  <Link
                    href="#gallery"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                   Gallery
                  </Link>
                </div>
              )}
            </div>

            <Link href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="bg-primaryBlue text-white px-4 py-2 rounded"
            >
              Become our sponsor
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
