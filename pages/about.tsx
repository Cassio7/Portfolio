import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-center"
        >
          <p>
            I am a passionate software developer with experience in building web applications using modern technologies.
          </p>
          {/* Aggiungi ulteriori informazioni su di te */}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
