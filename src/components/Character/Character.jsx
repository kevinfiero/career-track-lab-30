import React from 'react';
import PropTypes from 'prop-types';
import './Character.css';

const Character = ({ image, name }) => (
  <>
    <figure>
      <img src={image} />
      <figcaption>
        <h1>{name}</h1>
      </figcaption>
    </figure>
  </>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
