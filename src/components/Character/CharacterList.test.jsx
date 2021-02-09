import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <CharacterList 
        characters = {
          [{
            image: `https://vignette.wikia.nocookie.net/animalcrossing/images/
              e/ed/Admiral_NH.png/revision/latest?cb=20200802081138`,
            name: 'Admiral',
            id: '5f5fb4bbbfd05c2aed82e460'
          },
          {
            image: `https://vignette.wikia.nocookie.net/animalcrossing/images/
              a/a7/Agent_S_NH.png/revision/latest?cb=20200719092526`,
            name: 'Agent S',
            id: '5f5fb4bbbfd05c2aed82e461'
          }
          ]}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
