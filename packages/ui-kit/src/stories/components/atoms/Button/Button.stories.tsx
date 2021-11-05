import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { BUTTON } from 'components/atoms/Button';

export default {
	title: 'Components/Atoms/Button',
	component: Button,
	argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Click me',
};

export const Light = Template.bind({});
Light.args = {
	children: 'Click me',
	color: BUTTON.COLOR.LIGHT,
};

export const Big = Template.bind({});
Big.args = {
	children: 'Click me',
	size: BUTTON.SIZE.LG,
};

export const Medium = Template.bind({});
Medium.args = {
	children: 'Click me',
	size: BUTTON.SIZE.MD,
};

export const Small = Template.bind({});
Small.args = {
	children: 'Click me',
	size: BUTTON.SIZE.SM,
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
	children: 'Click me',
	size: BUTTON.SIZE.XS,
};
