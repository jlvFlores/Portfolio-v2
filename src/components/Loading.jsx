import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Loading = ({ updateHasAnimated }) => {
  const hasAnimated = () => {
    updateHasAnimated(true);
  };

  useEffect(() => {
    const welcomeText = document.querySelector('.welcome-text');
    welcomeText.classList.add('welcome-animation');
    welcomeText.addEventListener('animationend', hasAnimated);

    return () => {
      welcomeText.removeEventListener('animationend', hasAnimated);
    };
  }, []);

  return (
    <div id="loading-screen">
      <div className="welcome-container">
        <p className="welcome-text">
          Welcome to my portfolio...
        </p>
      </div>
    </div>
  );
};

Loading.propTypes = {
  updateHasAnimated: PropTypes.instanceOf(Function).isRequired,
};

export default Loading;
