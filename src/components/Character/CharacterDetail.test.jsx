import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetail', () => {
    const { asFragment } = render(
      <CharacterDetail 
        name = "Agnes" 
        image="https://vignette.wikia.nocookie.net/animalcrossing/images/4/42/Agnes_NH.png/revision/latest?cb=20200804230432"
        quote="You reap what you sow."
        gender="female"
        personality="sisterly"
        species="pig"
        birthday="April 21st (Taurus)"
        phrase="snuffle"
        skill="Cramming for tests"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
