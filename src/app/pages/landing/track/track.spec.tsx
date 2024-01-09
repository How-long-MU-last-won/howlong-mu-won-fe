import { render } from '@testing-library/react';

import Track from './track';

describe('Track', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Track />);
    expect(baseElement).toBeTruthy();
  });
});
