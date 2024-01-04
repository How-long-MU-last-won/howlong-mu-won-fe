import { render } from '@testing-library/react';

import Trophies from './trophies';

describe('Trophies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Trophies />);
    expect(baseElement).toBeTruthy();
  });
});
