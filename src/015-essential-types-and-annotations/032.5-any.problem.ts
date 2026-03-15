import { expect, it } from "vitest";

const handleFormData = (e: SubmitEvent) => {
  e.preventDefault();
  const formElement = e.currentTarget;

  if (!(formElement instanceof HTMLFormElement)) {
    throw new Error("Expected a form element");
  }

  const data = new FormData(formElement);
  const value = Object.fromEntries(data.entries());
  return value;
};

it("Should handle a form submit", () => {
  const form = document.createElement("form");
  form.innerHTML = `
    <input name="name" value="John Doe" />
  `;

  form.onsubmit = (e) => {
    const value = handleFormData(e);
    expect(value).toEqual({ name: "John Doe" });
  };

  form.requestSubmit();

  expect.assertions(1);
});
