import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SocialMedia from './SocialMedia';
import Projects from './Projects';
import About from './About';
import ContactForm from './ContactForm';

const Home = () => {
  const { sectionText } = useSelector((store) => store.portfolio);

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
          <h1>I am a full-stack developer and this is my portfolio</h1>
          <p className="justify long-text">{sectionText.headline}</p>
          <SocialMedia />
        </div>
      </section>
      <Projects />
      <About sectionText={sectionText.about} />
      <ContactForm sectionText={sectionText.contact} />
    </main>
  );
};

export default Home;
