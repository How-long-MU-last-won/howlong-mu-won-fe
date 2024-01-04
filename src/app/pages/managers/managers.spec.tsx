import { render } from '@testing-library/react';

import Managers from './managers';

describe('Managers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Managers />);
    expect(baseElement).toBeTruthy();
  });
});
