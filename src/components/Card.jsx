import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Card = ({
  id, title, techs, image, imageAltText, description, liveUrl, sourceUrl,
}) => {
  const addDiaglogListener = () => {
    const overlayTitle = document.getElementById(`overlay-title-${id}`);
    overlayTitle.addEventListener('click', () => {
      const dialog = document.getElementById(`dialog-${id}`);
      dialog.showModal();
    });
  };

  useEffect(() => {
    addDiaglogListener();
  }, []);

  return (
    <article>
      <div className="overlay">
        <div className="overlay-content">
          <ul>
            {techs.map((tech) => (
              <li className="tags" key={tech}>{tech}</li>
            ))}
          </ul>
          <h3 id={`overlay-title-${id}`} className="title">{title}</h3>
        </div>
      </div>
      <img className="project-img" src={image} alt={imageAltText} />
      <dialog id={`dialog-${id}`}>
        <form id="close-form" method="dialog">
          <button className="btn rounded" type="submit">X</button>
        </form>
        <div className="dialog-content">
          <img className="dialog-img" src={image} alt={imageAltText} />
          <div className="project-info">
            <h2>{title}</h2>
            <ul>
              {techs.map((tech) => (
                <li className="tags" key={tech}>{tech}</li>
              ))}
            </ul>
            <p className="project-desc justify">{description}</p>
          </div>
          <div className="project-links">
            <a className="link" href={liveUrl} target="_blank" rel="noreferrer noopener">Live project</a>
            <a className="link" href={sourceUrl} target="_blank" rel="noreferrer noopener">Porject repository</a>
          </div>
        </div>
      </dialog>
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  techs: PropTypes.instanceOf(Array).isRequired,
  image: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
};

export default Card;
