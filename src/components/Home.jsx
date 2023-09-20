import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SocialMedia from './SocialMedia';
import Projects from './Projects';
import About from './About';
import ContactForm from './ContactForm';
import LeavesHead from '../assets/leaves_head.svg';
import LeavesCenter from '../assets/leaves_center.svg';
import LeavesBottom from '../assets/leaves_bottom.svg';

const Home = () => {
  const { images, sectionText } = useSelector((store) => store.portfolio);

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
        <div className="section-content hidden-animation headline">
          <h2 id="greet-text">Hey there, I&apos;m Jose Luis</h2>
          <div className="profile-img-cont">
            <div className="leaves">
              <img className="leaf" src={LeavesHead} alt="animated leave icon one" />
              <img className="leaf" src={LeavesCenter} alt="animated leave icon two" />
              <img className="leaf" src={LeavesCenter} alt="animated leave icon three" />
              <img className="leaf" src={LeavesCenter} alt="animated leave icon four" />
              <img className="leaf" src={LeavesBottom} alt="animated leave icon five" />
            </div>
            <img className="profile-img" src={images.profile} alt="portfolio creator" />
          </div>
          <h1>
            FULL-STACK DEVELOPER
          </h1>
          <p className="justify long-text w-65">{sectionText.headline}</p>
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
