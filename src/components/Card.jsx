import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  id, title, techs, image, imageAltText, description, liveUrl, sourceUrl,
}) => {
  const openModal = () => {
    const dialog = document.getElementById(id);
    dialog.showModal();
  };

  return (
    <article>
      {techs.map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
      <p>{title}</p>
      <img src={image} alt={imageAltText} />
      <button type="button" onClick={openModal}>See More...</button>
      <dialog id={id}>
        <form method="dialog">
          <button type="submit">Close</button>
        </form>
        <p>{description}</p>
        <a href={liveUrl}>Live project</a>
        <a href={sourceUrl}>Porject repository</a>
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
