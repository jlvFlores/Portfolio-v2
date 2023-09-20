import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Attributes from './Attributes';

const About = ({ sectionText }) => {
  const { resume, attributes } = useSelector((store) => store.portfolio);

  const paragraphs = sectionText.split('  ').map((paragraph) => (
    <p key={uuidv4()} className="justify long-text">{paragraph}</p>
  ));

  return (
    <section id="about">
      <div className="section-content hidden-animation">
        <h4 className="center">About me</h4>
        <div className='about'>
          <div id='about-text'>
            {paragraphs}
            <div className='resume-cont'>
              <a className="resume btn reversed" href={resume.url} target="_blank" rel="noreferrer noopener">Check my resume</a>
            </div>
          </div>
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
      </div>
    </section>
  );
};

About.propTypes = {
  sectionText: PropTypes.string.isRequired,
};

export default About;
