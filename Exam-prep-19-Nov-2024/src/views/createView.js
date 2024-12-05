import page from "../lib/page.js";
import { create } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (onSubmit) => html`
     <!-- Create Page (Only for logged-in users) -->
      <section id="create">
        <div class="form">
          <img class="border" src="./images/border.png" alt="" />
          <h2>Add Solution</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="type" id="type" placeholder="Solution Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10"></textarea>
            <button type="submit">Add Solution</button>
          </form>
        </div>
      </section>
`;

export default async function createView(ctx) {
    //Implement this pageView
    render(template(createFormSubmitHandler));
}

async function createFormSubmitHandler(e) {
    e.preventDefault();
    // TODO:
    // Get form data
    // Validation
    // Error handling
    // Save user data
    // Create request
    // Redirect to home page on success

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if (!Object.values(data).every(value => !!value)) {
        return alert('All fields are requiered!');
    }

    try {
        await create(data);

        page.redirect('/dashboard');
    } catch (err) {
        alert(err.message)
    }
}