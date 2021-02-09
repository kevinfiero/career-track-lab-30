import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/Character/CharacterDetail';
import { getCharacterBio } from '../services/characterApi';

const CharacterBio = (props) => {
  const [loading, setLoading] = useState(true);
  const [characterBio, setCharacterBio] = useState({});

  useEffect(() => {
    getCharacterBio(props.match.params.id).then((characterBio) => {
      setCharacterBio(characterBio);
      setLoading(false);
    });
  }, []);

  if(loading) return <ul>Loading</ul>;
  return (
    <CharacterDetail 
      image= {characterBio.image}
      name= {characterBio.name}
      quote= {characterBio.quote}
      gender= {characterBio.gender}
      personality= {characterBio.personality}
      species= {characterBio.species}
      birthday= {characterBio.birthday}
      phrase= {characterBio.phrase}
      skill= {characterBio.skill}
    />
  );
};

CharacterBio.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CharacterBio;
