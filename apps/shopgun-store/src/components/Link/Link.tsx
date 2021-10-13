import React, { FC } from 'react';
import NextLink from 'next/link';

interface LinkProps {
  url: string;
}

const Link: FC<LinkProps> = ({ children, url }) => <NextLink href={url}>{children}</NextLink>;

export default Link;
