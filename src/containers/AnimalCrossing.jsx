import React, { useEffect, useState } from 'react';
import CharacterList from '../components/Character/CharacterList';
import { getCharacters } from '../services/characterApi';

const AnimalCrossing = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  if(loading) return <ul>Loading</ul>;
  return <CharacterList characters={characters} />;

};

export default AnimalCrossing;

//Component Based Container Below

// export default class AnimalCrossing extends Component {
//   state = {
//     characters: [],
//     loading: true
//   }

//   fetchCharacters = () => {
//     getCharacters(this.state.search).then(characters => 
//       this.setState({ characters, loading: false }));
//   }

//   componentDidMount() {
//     this.fetchCharacters();
//   }

//   render() {
//     const { characters, loading } = this.state;
//     if(loading) return <ul>Loading</ul>;

//     return (
//       <>
        
//         <CharacterList
//           characters={characters}
//         />
//       </>
//     );
//   }
// }


