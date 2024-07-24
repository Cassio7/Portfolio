import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { projects } from '../../data/projectsData';
import { Project } from '../../data/projectsData';
import { motion } from 'framer-motion';

const ProjectDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((proj) => proj.title === id);

  if (!project) {
    return (
      <div>
        <Navbar />
        <main className="container mx-auto my-10">
          <h1 className="text-4xl font-bold text-center">Project Not Found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-center">{project.title}</h1>
          <img src={project.imageUrl} alt={project.title} className="w-full h-auto mt-8"/>
          <p className="mt-4 text-center">{project.description}</p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
