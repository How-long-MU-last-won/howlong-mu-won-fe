import { render } from '@testing-library/react';

import Players from './players';

describe('Players', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Players />);
    expect(baseElement).toBeTruthy();
  });
});
