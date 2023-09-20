import { useSelector } from 'react-redux';
import Card from './Card';

const Projects = () => {
  const { projects } = useSelector((store) => store.portfolio);

  return (
    <section id="projects">
      <h4 className="center">Projects</h4>
      <div className="projects-showcase hidden-animation">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            techs={project.techs}
            image={project.image}
            imageAltText={project.imageAltText}
            description={project.description}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
