import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  expect(getByText(/checkout form/i)).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText: lbl, getByTestId: id, getByText: txt } = render(<CheckoutForm />);
  fireEvent.change(lbl(/first name:/i), {
    target: { value: "Brandon" }
  });
  fireEvent.change(lbl(/last name:/i), {
    target: { value: "Ramirez" }
  });
  fireEvent.change(lbl(/address:/i), {
    target: { value: "123 Easy St" }
  });
  fireEvent.change(lbl(/city:/i), {
    target: { value: "San Francisco" }
  });
  fireEvent.change(lbl(/state:/i), { target: { value: "CA" } });
  fireEvent.change(lbl(/zip:/i), { target: { value: "94110" } });
  fireEvent.click(id("submit"));
  expect(txt(/brandon ramirez/i)).toBeInTheDocument();
});
