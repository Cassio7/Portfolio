import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';
import {skills} from '../data/skillsData';

const Home: React.FC = () => {
  return (
    // serve per footer in basso
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <header className="bg-blue-950 text-white text-center py-20">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4"
        >
          I am a software developer specializing in web development.
        </motion.p>
      </header>
      <main className="container mx-auto my-10">
        <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </main>
      <section className="my-10">
          <h2 className="text-3xl font-bold text-center">Skills</h2>
          <div className="flex flex-wrap justify-center mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-4 py-2 m-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      <Footer />
    </div>
  );
}

export default Home;
