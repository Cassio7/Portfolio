import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';

const Projects: React.FC = () => {
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
          Projects
        </motion.h1>
        <div className="flex flex-wrap justify-center mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
