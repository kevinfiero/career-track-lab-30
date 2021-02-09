import React from 'react';
import PropTypes from 'prop-types';
import './CharacterDetail.css';

const Character = (
  { 
    image, 
    name,
    quote,
    gender,
    personality,
    species,
    birthday,
    phrase,
    skill
  }
) => (
  <section>
    <figure>
      <img className="detailImage" src={image} />
      <figcaption>
        <div>
          <label id="name-label">Name:</label>
          <h1 aria-labelledby="name-label">{name}</h1>
        </div>
        <div>
          <label>Quote:</label>
          <h1>{quote}</h1>
        </div>
        <div>
          <label>Gender:</label>
          <h1>{gender}</h1>
        </div>
        <div>
          <label>Personality:</label>
          <h1>{personality}</h1>
        </div>
        <div>
          <label>Species:</label>
          <h1>{species}</h1>
        </div>
        <div>
          <label>Birthday:</label>
          <h1>{birthday}</h1>
        </div>
        <div>
          <label>Phrase:</label>
          <h1>{phrase}</h1>
        </div>
        <div>
          <label>Skill:</label>
          <h1>{skill}</h1>
        </div>
      </figcaption>
    </figure>
  </section>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired
};

export default Character;
