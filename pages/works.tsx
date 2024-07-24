import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { works } from '../data/worksData';

const Works: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto my-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center"
        >
          Professional Experience
        </motion.h1>
        <div className="mt-8 space-y-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
              className="p-4 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-customGray">{work.title}</h2>
              <p className="text-gray-600">{work.date}</p>
              <p className="mt-2 text-customGray">{work.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Works;
    