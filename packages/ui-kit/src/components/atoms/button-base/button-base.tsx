import React, { FC } from 'react';

import cn from 'classnames';

import button from './button.module.scss';

interface ButtonProperties {
	variant?: string;
}

export const Button: FC<ButtonProperties> = ({ children, variant = 'blue' }) => {
	const buttonClasses = cn(button.wrapper, {
		[button[variant]]: variant,
	});

	return <button className={buttonClasses}>{children}</button>;
};
