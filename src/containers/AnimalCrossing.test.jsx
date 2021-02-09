import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AnimalCrossing from './AnimalCrossing';

describe('AnimalCrossing Container', () => {
  it('displays a loading screen then a list of characters', async() => {
    render(<AnimalCrossing />);

    const h1 = screen.getByText('Loading');

    return waitFor(() => {
      expect(h1).toHaveTextContent('Loading');
    });
  });
});
