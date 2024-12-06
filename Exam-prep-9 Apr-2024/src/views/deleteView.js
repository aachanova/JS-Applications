import { render, html } from "../lib/lit-html.js";

const template = (onSubmit) => html`

`;

export default async function deleteView(ctx) {
  // TODO: Implement this view
  render(template(loginFormSubmitHandler));
}

// TODO:
// Get form data
// Validation
// Error handling
// Create login request
// Save user data
// Redirect to home on success

// async function TEMPLATEfORMSubmitHandler(e) {
//   e.preventDefault();
//   // console.log('submit');

// }



