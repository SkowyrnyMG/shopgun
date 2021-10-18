import React from 'react';

import { render } from '@testing-library/react';

import { Button } from './button-base';

describe('should be', () => {
  it('should work', () => {
    render(<Button />);
    expect(2).toBe(2);
  });
});
