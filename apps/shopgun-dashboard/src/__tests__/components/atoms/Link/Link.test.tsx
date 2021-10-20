import React from "react";

import Link from "components/atoms/Link";
import { LinkProps } from "components/atoms/Link/models.d";
import { render, screen } from "testUtils";

const props: LinkProps = {
  url: "/about",
};

describe("Link - should pass all test cases", () => {
  test("the Link component renders correctly with required and optional props", () => {
    render(<Link {...props}>test</Link>);

    const linkNode = screen.getByText("test");

    // the component has been rendered
    expect(linkNode).toBeInTheDocument();

    // generating a snapshot
    expect(linkNode).toMatchSnapshot();
  });
});
