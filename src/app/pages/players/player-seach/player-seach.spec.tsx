import { render } from '@testing-library/react';

import PlayerSeach from './player-seach';

describe('PlayerSeach', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerSeach />);
    expect(baseElement).toBeTruthy();
  });
});
