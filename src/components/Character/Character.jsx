import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Character.css';

const Character = ({ image, name, id }) => (
  <Link to={`./${id}`}>
    <figure>
      <img src={image} />
      <figcaption>
        <h1>{name}</h1>
      </figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Character;
