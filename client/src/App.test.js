import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";
import { wrap } from "module";

it("renders 'Hello world' to the DOM", () => {
  const wrapper = rtl.render(<App />);
  const smokeScreen = wrapper.queryByText(/hello world/i);
  expect(smokeScreen).toBeInTheDocument();
});
