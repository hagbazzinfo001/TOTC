import React from 'react';
import PropTypes from 'prop-types';

const Testimony = ({ imgSrc, name, paragraph }) => {
  return (
    <div className="laptop-div-comp">
      <img src={imgSrc} alt="Testimonial" className="image-doc1" />
      <h3>{name}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

Testimony.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default Testimony;
