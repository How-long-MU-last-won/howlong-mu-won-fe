import { render } from '@testing-library/react';

import PlayerModal from './player-modal';

describe('PlayerModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerModal />);
    expect(baseElement).toBeTruthy();
  });
});
