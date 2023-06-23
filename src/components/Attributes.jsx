import React from 'react';
import PropTypes from 'prop-types';

const Attributes = ({ category, items }) => (
  <div className="attribute hidden">
    <h2>{category}</h2>
    {items.map((item) => (
      <h3 key={item}>{item}</h3>
    ))}
  </div>
);

Attributes.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default Attributes;
