import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

import { plants } from "../data/plants";

test("renders app to the DOM", () => {
  const { container } = render(<ShoppingCart cart={plants} />);
  expect(container).toBeInTheDocument();
});

test("renders plants in cart", () => {
  const { container } = render(<ShoppingCart cart={plants} />);
  const firstPlant = container.querySelector(".plant-card");
  expect(firstPlant).toBeInTheDocument();
  expect(firstPlant.children[1].children[0].innerHTML).toBe(plants[0].name);
  const removeButton = firstPlant.querySelector("button");
  expect(removeButton).toBeInTheDocument();
});

