import React, { FC } from "react";
import NextLink from "next/link";

import link from "./Link.module.scss";

interface LinkProperties {
  url: string;
}

const Link: FC<LinkProperties> = ({ children, url }) => (
  <NextLink href={url}>
    <span className={link.link}>{children}</span>
  </NextLink>
);

export default Link;
