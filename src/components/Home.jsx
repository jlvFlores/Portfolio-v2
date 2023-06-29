import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SocialMedia from './SocialMedia';
import Attributes from './Attributes';
import Card from './Card';
import ContactForm from './ContactForm';

const Home = () => {
  const {
    projects, resume, attributes, sectionText,
  } = useSelector((store) => store.portfolio);

  const findAnimations = () => {
    const animateElements = document.querySelectorAll('.hidden-animation');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded-animation');
        } else {
          entry.target.classList.remove('loaded-animation');
        }
      });
    });
    animateElements.forEach((element) => observer.observe(element));
  };

  useEffect(() => {
    findAnimations();
  }, []);

  return (
    <main>
      <section id="headline">
        <div className="section-content hidden-animation">
          <h4>
            Hey there.
            <br />
            I&apos;m Jose Luis
          </h4>
          <h1>
            I&apos;m a frontend developer and this is my portfolio
          </h1>
          <p className="justify long-text">{sectionText.headline}</p>
          <SocialMedia />
        </div>
      </section>
      <section id="projects" className="divider-top">
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
      <section id="about" className="divider-bottom">
        <div className="section-content hidden-animation">
          <h4 className="center">About me</h4>
          <p className="justify long-text">{sectionText.about}</p>
          <a className="resume btn" href={resume.url} target="_blank" rel="noreferrer noopener">Check my Resume</a>
          <div id="attributes">
            {attributes.map((attribute) => (
              <Attributes
                key={attribute.category}
                category={attribute.category}
                items={attribute.items}
              />
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
};

export default Home;
