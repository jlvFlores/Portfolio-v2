import React from 'react';
import PropTypes from 'prop-types';

const Attributes = ({ category, items }) => (
  <div className="attribute center">
    <h3>{category}</h3>
    {items.map((item) => (
      <h2 className="skills" key={item}>{item}</h2>
    ))}
  </div>
);

Attributes.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default Attributes;
