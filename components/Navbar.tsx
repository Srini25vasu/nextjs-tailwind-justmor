import Link from "next/link";
import { HiDownload } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';

const Navbar = (): JSX.Element => {
    return (
        <div className="bg-green-50 fixed top-0 w-[100%] z-10">
            <div className="container max-w-5xl mx-auto flex justify-between items-center py-4">
                <div className="text-[24px]">Srini K</div>
                <div className="flex gap-6">
                    <Link href="/" className="hover:text-[red]"> Home</Link>
                    <Link href="/about" className="hover:text-[red]"> About</Link>
                    <Link href="/portfolio" className="hover:text-[red]"> Portfolio</Link>
                    <Link href="/contact" className="hover:text-[red] flex items-center gap-2"> Download CV <HiDownload /></Link>
                    <Link href="/contact" className="hover:text-[red]"> Contact </Link>
                    <div className="md:hidden text-[24px]">
                        <FiMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;

