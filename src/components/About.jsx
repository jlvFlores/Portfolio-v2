import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Attributes from './Attributes';

const About = ({ sectionText }) => {
  const { resume, attributes } = useSelector((store) => store.portfolio);

  return (
    <section id="about">
      <div className="section-content hidden-animation">
        <h4 className="center">About me</h4>
        <p className="justify long-text">{sectionText}</p>
        <a className="resume btn reversed" href={resume.url} target="_blank" rel="noreferrer noopener">Check my resume</a>
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
  );
};

About.propTypes = {
  sectionText: PropTypes.string.isRequired,
};

export default About;
