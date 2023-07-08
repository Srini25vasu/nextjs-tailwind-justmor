import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);
export const Logo = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="bg-white text-cyan-600 text-lg  rounded-md py-1 px-1"
        whileHover={{
          backgroundColor: [
            "#121212",
            "#374151",
            "#2563EB",
            "#6EE7B7",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        JusMehr
      </MotionLink>
    </div>
  );
};
