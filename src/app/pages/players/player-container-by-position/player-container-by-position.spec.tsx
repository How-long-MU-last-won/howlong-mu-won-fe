import { render } from '@testing-library/react';

import PlayerContainerByPosition from './player-container-by-position';

describe('PlayerContainerByPosition', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerContainerByPosition />);
    expect(baseElement).toBeTruthy();
  });
});
