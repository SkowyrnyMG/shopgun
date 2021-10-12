import React, { FC } from 'react';

import './Button.scss';

export const Button: FC = ({ children }) => <button className="button">{children}</button>;
