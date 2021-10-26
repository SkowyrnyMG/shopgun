import { KeyboardEvent } from 'react';

export namespace BUTTON {
	export enum COLOR {
		DARK = 'dark',
		LIGHT = 'light',
	}

	export enum SIZE {
		LG = 'large',
		MD = 'medium',
		SM = 'small',
		XS = 'extraSmall',
	}
}

export interface ButtonProps {
	onClick: (
		e:
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
			| React.KeyboardEvent<HTMLButtonElement, KeyboardEvent>,
	) => void;
	color?: BUTTON.COLOR;
	size?: BUTTON.SIZE;
}
