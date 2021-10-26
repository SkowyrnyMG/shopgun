import React, { FC } from 'react';

import cn from 'classnames';

import { BUTTON, ButtonProps } from './models.d';

import button from './Button.module.scss';

const Button: FC<ButtonProps> = ({
	children,
	color = BUTTON.COLOR.DARK,
	size = BUTTON.SIZE.MD,
	onClick,
	...rest
}) => {
	const buttonClasses = cn(button.wrapper, {
		[button[color]]: color,
		[button[size]]: size,
	});

	return (
		<button className={buttonClasses} data-testid="test-button" onClick={onClick} {...rest}>
			{children}
		</button>
	);
};

export default Button;
