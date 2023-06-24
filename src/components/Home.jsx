import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SocialMedia from './SocialMedia';
import Attributes from './Attributes';
import Card from './Card';

const Home = () => {
  const { projects, resume, attributes, texts } = useSelector((store) => store.portfolio);

  const findAnimations = () => {
    const animateElements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          entry.target.classList.remove('animated');
        }
      });
    });
    animateElements.forEach((element) => observer.observe(element));
  };

  const createEventListeners = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      contactForm.reset();
    });
  };

  useEffect(() => {
    findAnimations();
    createEventListeners();
  }, []);

  return (
    <main>
      <section id="headline">
        <div className="section-content animate">
          <h4>
            Hey there.
            <br />
            I&apos;m Jose Luis
          </h4>
          <h1>
            I&apos;m a frontend developer and this is my portfolio
          </h1>
          <p className="justify long-text">{texts.headline}</p>
          <SocialMedia />
        </div>
      </section>
      <section id="projects" className="divider-top">
        <h4 className="center">Projects</h4>
        <div className="projects-showcase animate">
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
        <div className="section-content animate">
          <h4 className="center">About me</h4>
          <p className="justify long-text">{texts.about}</p>
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
      <section id="contact" className="divider-top">
        <div className="section-content animate">
          <h4 id="contact-title" className="center">Contact</h4>
          <p className="center long-text">{texts.contact}</p>
          <form id="contact-form">
            <div className="form-inputs">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Email" required />
            </div>
            <textarea cols="45" rows="10" placeholder="Let me know how I can help you." required />
            <button className="btn reversed" type="submit">Get in touch</button>
          </form>
          <div className="center">
            <SocialMedia />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
