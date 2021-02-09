import React, { Component } from 'react';
import CharacterList from '../components/Character/CharacterList';
import { getCharacters } from '../services/characterApi';

export default class AnimalCrossing extends Component {
  state = {
    characters: [],
    loading: true
  }

  fetchCharacters = () => {
    getCharacters(this.state.search).then(characters => 
      this.setState({ characters, loading: false }));
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters, loading } = this.state;
    if(loading) return <ul>Loading</ul>;

    return (
      <>
        
        <CharacterList
          characters={characters}
        />
      </>
    );
  }
}
