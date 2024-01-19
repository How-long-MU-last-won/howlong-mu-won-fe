import { render } from '@testing-library/react';

import PlayerCard from './player-card';

describe('PlayerCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerCard />);
    expect(baseElement).toBeTruthy();
  });
});
