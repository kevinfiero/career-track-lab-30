import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <Router>
        <Character 
          id="5f5fb4bbbfd05c2aed82e460"
          name = "Admiral" 
          image="https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138"
        />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
