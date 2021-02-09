import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import './CharacterList.css';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Character 
        image={character.image}
        name={character.name}
      />
    </li>
  ));

  return <ul>{characterElements}</ul>;

};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharacterList;
