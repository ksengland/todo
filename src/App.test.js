import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Todo", () => {
  const { getByText, getByPlaceholderText } = render(<App />);

  //after rendering our component
  //use DOM APIs (query selector) to make assertions
  getByText("Things to Do");
  getByPlaceholderText("Add a thing");
});
