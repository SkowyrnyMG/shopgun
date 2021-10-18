import React from 'react';

import { render, screen, userEvent } from 'testUtils/index';

const onClickMock = jest.fn();

describe('should be', () => {
  it('should work', () => {
    render(<button onClick={onClickMock}>lol</button>);

    const buttonNode = screen.getByRole('button');
    expect(buttonNode).toBeInTheDocument();

    userEvent.click(buttonNode);
    expect(onClickMock).toHaveBeenCalledTimes(1);

    expect(2).toBe(2);
  });
});
