import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { api } from "./api";
import { wait } from "@testing-library/user-event/dist/utils";

//mock API
const mockCreateItem = (api.createItem = jest.fn());

test("add items to list", async () => {
  const todoText = "Learn spanish";
  mockCreateItem.mockResolvedValueOnce(todoText);
  const { getByText, getByPlaceholderText } = render(<App />);

  //enter content, interact with page
  const input = getByPlaceholderText("Add a thing");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.click(getByText("Add"));

  await wait(() => getByText("wash car"));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(expect.stringContaining("wash car"));
});

test("Todo", () => {
  const { getByText, getByLabelText } = render(<App />);

  //after rendering our component
  getByText("Things to Do");
  //getByLabelText("add a thing");
  getByText("Add");
});

/* test("add items to list", () => {
  const { getByText, getByPlaceholderText } = render(<App />);

  //after rendering our component
  getByText("Things to Do");
  const input = getByPlaceholderText("Add a thing");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.click(getByText("Add"));

  //confirm data
  getByText("Add");
  getByText("wash car");
}); */

/* //userEvent expresses intent better
test("user-events allows users to add...", () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText("Add a thing");
  const button = getByText("Add");

  userEvent.type(input, "Learn spanish");
  userEvent.click(button);
}); */
