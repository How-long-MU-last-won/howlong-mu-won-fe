import { render } from '@testing-library/react';

import Trophy from './trophy';

describe('Trophy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Trophy />);
    expect(baseElement).toBeTruthy();
  });
});
