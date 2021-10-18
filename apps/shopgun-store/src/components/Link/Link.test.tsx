import { render } from "@testing-library/react";

import Link from "./Link";

it("should", () => {
  render(<Link url="/">lol</Link>);
  expect(2).toBe(2);
});
