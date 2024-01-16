import { render } from '@testing-library/react';

import ManagerCardMobile from './manager-card-mobile';

describe('ManagerCardMobile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManagerCardMobile />);
    expect(baseElement).toBeTruthy();
  });
});
