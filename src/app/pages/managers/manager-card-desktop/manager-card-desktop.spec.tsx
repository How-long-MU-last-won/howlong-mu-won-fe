import { render } from '@testing-library/react';

import ManagerCardDesktop from './manager-card-desktop';

describe('ManagerCardDesktop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManagerCardDesktop />);
    expect(baseElement).toBeTruthy();
  });
});
