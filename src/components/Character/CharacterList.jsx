import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (

  <>
    <Character 
      image={characters[0].image}
      name={characters[0].name}
    />
    <Character 
      image={characters[1].image}
      name={characters[1].name}
    />
  </>


);

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharacterList;
