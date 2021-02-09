import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import AnimalCrossing from './AnimalCrossing';

describe('AnimalCrossing Container', () => {
  afterEach(() => cleanup());
  it('displays a loading screen then a list of characters', async() => {
    render(<AnimalCrossing />);

    const ul = screen.getByText('Loading');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
