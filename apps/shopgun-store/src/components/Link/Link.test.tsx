import React from "react";

import { render, screen } from "testUtils";

import Link from "./Link";

it("should", () => {
  render(<Link url="/">link</Link>);

  const linkNode = screen.getByText("link");
  expect(linkNode).toBeInTheDocument();

  expect(2).toBe(2);
});
