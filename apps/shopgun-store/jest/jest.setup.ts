import mockRouter from "next-router-mock";

import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// eslint-disable-next-line global-require
jest.mock("next/dist/client/router", () => require("next-router-mock"));

beforeAll(() => {
  mockRouter.setCurrentUrl("/about");
});
