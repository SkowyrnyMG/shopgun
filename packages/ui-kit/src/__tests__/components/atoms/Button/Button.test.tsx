import React from 'react';

import Button from 'components/atoms/Button';
import { ButtonProps } from 'components/atoms/Button/models.d';
import { render, screen, userEvent } from 'testUtils';

const ButtonMock = {
	onClick: jest.fn(),
};

const props: ButtonProps = ButtonMock;

describe('Button - should pass all test cases', () => {
	test('the Button component renders correctly with required and optional props', () => {
		render(<Button {...props} />);

		const buttonNode = screen.getByTestId('test-button');

		// the component has been rendered
		expect(buttonNode).toBeInTheDocument();

		// generating a snapshot
		expect(buttonNode).toMatchSnapshot();
	});

	test('after user click on Button correct action should be triggered', () => {
		render(<Button {...props} />);

		const buttonNode = screen.getByTestId('test-button');

		userEvent.click(buttonNode);

		expect(ButtonMock.onClick).toBeCalled();
	});
});
