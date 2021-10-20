import React, { FC } from "react";
import NextLink from "next/link";

import { LinkProps } from "./models.d";

import link from "./Link.module.scss";

const Link: FC<LinkProps> = ({ children, url }) => (
  <NextLink href={url}>
    <span className={link.wrapper}>{children}</span>
  </NextLink>
);

export default Link;
