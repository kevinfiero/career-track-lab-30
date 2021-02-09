import React, { Component } from 'react';
import CharacterList from '../components/Character/CharacterList';
import { getCharacters } from '../services/characterApi';

export default class AnimalCrossing extends Component {
  state = {
    characters: []
  }

  fetchCharacters = () => {
    getCharacters(this.state.search).then(characters => 
      this.setState({ characters }));
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;

    return (
      <>
        <h1>Loading</h1>
        <CharacterList
          characters={characters}
        />
      </>
    );
  }
}
