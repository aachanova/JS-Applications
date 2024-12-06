import { render, html } from "../lib/lit-html.js";

const template = (onSubmit) => html`
<!-- Edit Page (Only for logged-in users) -->
      <section id="edit">
        <div class="form">
          <img class="border" src="./images/border.png" alt="" />
          <h2>Edit Solution</h2>
          <form class="edit-form">
            <input type="text" name="type" id="type" placeholder="Solution Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10"></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
`;

export default async function editView(ctx) {
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



