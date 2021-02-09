const fetch = require('node-fetch');

export const getCharacters = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers/')
    .then(res => res.json())
    .then((characters) =>
      characters.map((character) => (
        {
          image: character.image,
          name: character.name,
          id: character._id
        }
      ))
    );
};

export const getCharacterBio = (id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then(res => res.json())
    .then((character) => character =
      {
        id: character._id,
        image: character.image,
        name: character.name,
        quote: character.quote,
        gender: character.gender,
        personality: character.personality,
        species: character.species,
        birthday: character.birthday,
        phrase: character.phrase,
        skill: character.skill,
      }
    );

};

