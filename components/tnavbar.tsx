import Link from "next/link";
import { useState } from "react";

export const TNavbar = (): JSX.Element => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="w-full bg-green-100 shadow py-3">
      <div className="flex justify-between px-3 mx-auto">
        <div className="flex justify-start space-x-1">
          <Link href="/">
            <h2 className="text-sm font-bold hover:text-[#00b7ff]">
              Srini-JusMehr
            </h2>
          </Link>
          <div className="md:hidden">
            <button
              className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm px-4 mx-auto space-x-8">
            <Link href="/profile" className="hover:text-[#00b7ff] ">
              Profile
            </Link>
            <Link href="/profile" className="hover:text-[#00b7ff] ">
              Deutsch
            </Link>
            <Link href="/profile" className="hover:text-[#00b7ff] ">
              Blogs-videos
            </Link>
            <Link href="/skills" className="hover:text-[#00b7ff] ">
              Skills
            </Link>
            <Link href="/projects" className="hover:text-[#00b7ff] ">
              Projects
            </Link>
            <Link href="/cloud" className="hover:text-[#00b7ff] ">
              Cloud
            </Link>
            <Link href="/iaas" className="hover:text-[#00b7ff] ">
              iaaS
            </Link>
            <Link href="/iaas" className="hover:text-[#00b7ff] ">
              Register
            </Link>
            <Link href="/auth/login" className="hover:text-[#00b7ff] ">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
