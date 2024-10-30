import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // Add this line to debug and see the current DOM
  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});

