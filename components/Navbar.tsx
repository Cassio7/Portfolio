import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-customGray p-4 shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">My Portfolio</Link>
        <div className="space-x-4">
          <Link href="/projects" className="text-white hover:text-gray-400 transition">Projects</Link>
          <Link href="/works" className="text-white hover:text-gray-400 transition">Works</Link>
          <Link href="/about" className="text-white hover:text-gray-400 transition">About</Link>
          
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
