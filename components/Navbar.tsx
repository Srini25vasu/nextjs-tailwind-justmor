import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";

const Navbar = (): JSX.Element => {
  // return (
  //     <div className="bg-green-50 fixed top-0 w-[100%] z-10">
  //         <div className="container max-w-5xl mx-auto flex justify-between items-center py-4">
  //             <div className="text-[24px]">Srini K</div>
  //             <div className="flex gap-6">
  //                 <Link href="/" className="hover:text-[red]"> Home</Link>
  //                 <Link href="/about" className="hover:text-[red]"> About</Link>
  //                 <Link href="/portfolio" className="hover:text-[red]"> Portfolio</Link>
  //                 <Link href="/contact" className="hover:text-[red] flex items-center gap-2"> Download CV <HiDownload /></Link>
  //                 <Link href="/contact" className="hover:text-[red]"> Contact </Link>
  //                 <div className="md:hidden text-[24px]">
  //                     <FiMenu />
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // );
  return (
    <nav className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img className="h-8 text-white" src="" alt="Srini workspace" />
        </div>
      </div>
      <div className="sm:flex text-white sm:space-x-5">
        <Link href="/" className="hover:text-[red] ">
          {" "}
          Home
        </Link>
        <Link href="/about" className="hover:text-[red] ">
          {" "}
          About
        </Link>
        <Link href="/portfolio" className="hover:text-[red] ">
          {" "}
          Portfolio
        </Link>
        <Link href="/contact" className="hover:text-[red] flex items-center ">
          {" "}
          Download CV <HiDownload />
        </Link>
        <Link href="/contact" className="hover:text-[red] ">
          {" "}
          Contact{" "}
        </Link>
        <div className="md:hidden text-[24px]">
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
