import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  id, title, techs, image, imageAltText, description, liveUrl, sourceUrl,
}) => {
  const openModal = () => {
    const dialog = document.getElementById(`dialog-${id}`);
    dialog.showModal();
  };

  return (
    <>
      <article>
        <div className="overlay">
          <div className="overlay-content" onClick={openModal}>
            <ul>
              {techs.map((tech) => (
                <li className="tags" key={tech}>{tech}</li>
              ))}
            </ul>
            <h5>{title}</h5>
          </div>
        </div>
        <img className="project-img" src={image} alt={imageAltText} />
      </article>
      <dialog id={`dialog-${id}`}>
        <form method="dialog">
          <button type="submit">Close</button>
        </form>
        <p>{description}</p>
        <a href={liveUrl}>Live project</a>
        <a href={sourceUrl}>Porject repository</a>
      </dialog>
    </>
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
