import React from "react";

import { render, screen, userEvent } from "testUtils";

import Link from "./Link";

it("should", () => {
  render(<Link url="/about">link</Link>);

  const linkNode = screen.getByText("link");
  expect(linkNode).toBeInTheDocument();

  userEvent.click(linkNode);

  expect(2).toBe(2);
});
