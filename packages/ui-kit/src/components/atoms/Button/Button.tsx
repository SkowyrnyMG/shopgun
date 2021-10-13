import React, { FC } from 'react';

import cn from 'classnames';

import button from './Button.module.scss';

interface ButtonProps {
  variant?: string;
}

export const Button: FC<ButtonProps> = ({ children, variant = 'blue' }) => {
  const buttonClasses = cn(button.wrapper, {
    [button[variant]]: variant,
  });

  return <button className={buttonClasses}>{children}</button>;
};
