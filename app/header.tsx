"use client";
import { Logo } from "@/components/navbar/Logo";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <title></title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <Logo />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-gray-300  hover:text-white  text-sm font-medium">
                <Link
                  href="/home"
                  className="hover:bg-gray-700 rounded-md px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:bg-gray-700  block px-3 py-1 rounded-md text-base"
                >
                  Profile
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:bg-gray-700  block px-3 py-1 rounded-md text-base"
                >
                  Dashboard
                </Link>
                <Link
                  href="/blogs"
                  className="text-gray-300 hover:bg-gray-700  block px-3 py-1 rounded-md text-base"
                >
                  Blogs
                </Link>
                <Link
                  href="/skills"
                  className="text-gray-300 hover:bg-gray-700  block px-3 py-1 rounded-md text-base"
                >
                  Skills
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:bg-gray-700  block px-3 py-1 rounded-md text-base "
                >
                  Projects
                </Link>
                <Link
                  href="/cloud"
                  className="text-gray-300 hover:bg-gray-700  block px-3 py-1 rounded-md text-base"
                >
                  Cloud
                </Link>

                <Link
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700  px-3 py-2 rounded-md text-sm"
                >
                  About
                </Link>
                <Link
                  href="/auth/login"
                  className="text-gray-300 hover:bg-gray-700  px-3 py-1 rounded-md text-sm"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 sm:px-3 text-gray-300 hover:text-white rounded-md font-medium">
              <Link
                href="/"
                className=" hover:bg-gray-700  block px-3 py-2  text-base"
              >
                Home
              </Link>
              <Link
                href="/profile"
                className="hover:bg-gray-700  block px-3 py-2 text-base"
              >
                Profile
              </Link>
              <Link
                href="/profile"
                className=" hover:bg-gray-700  block px-3 py-2 text-base"
              >
                Deutsch
              </Link>
              <Link
                href="/profile"
                className=" hover:bg-gray-700  block px-3 py-2  text-base "
              >
                Blogs-videos
              </Link>
              <Link
                href="/skills"
                className=" hover:bg-gray-700 block px-3 py-2 text-base"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className=" hover:bg-gray-700 block px-3 py-2  text-base"
              >
                Projects
              </Link>
              <Link
                href="/cloud"
                className=" hover:bg-gray-700 block px-3 py-2  text-base"
              >
                Cloud
              </Link>
              <Link
                href="/about"
                className=" hover:bg-gray-700  block px-3 py-2 text-base"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:bg-gray-700  block px-3 py-2 text-base"
              >
                Contact
              </Link>
              <Link
                href="/auth/login"
                className="text-gray-300 hover:bg-gray-700  px-3 py-1 rounded-md text-sm"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
