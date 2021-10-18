import * as nextRouter from "next/router";

import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

beforeAll(() => {
  const useRouter = jest.spyOn(nextRouter, "useRouter");
  useRouter.mockImplementation(() => ({ route: "/" } as nextRouter.Router));
});
