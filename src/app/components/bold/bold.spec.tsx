import { render } from '@testing-library/react';

import Bold from './bold';

describe('Bold', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bold />);
    expect(baseElement).toBeTruthy();
  });
});
