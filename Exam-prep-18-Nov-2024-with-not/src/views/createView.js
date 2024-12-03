import { create } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";
import page from "../lib/page.js";


const template = (onSubmit) => html`
   <!-- Create Page (Only for logged-in users) -->
      <section id="create">
        <div class="form form-item">
          <h2>Share Your item</h2>
          <form @submit=${onSubmit} class="create-form" method='POST'>
            <input type="text" name="item" id="item" placeholder="Item" />
            <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
            <input type="text" name="price" id="price" placeholder="Price in Euro" />
            <input type="text" name="availability" id="availability" placeholder="Availability Information" />
            <input type="text" name="type" id="type" placeholder="Item Type" />
            <textarea id="description" name="description" placeholder="More About The Item" rows="10"
              cols="50"></textarea>
            <button type="submit">Add</button>
          </form>
        </div>
      </section>
`;

export default async function createView(ctx) {
  // TODO: Implement this view

  render(template(createFormSubmitHandler.bind(ctx)));
}

async function createFormSubmitHandler(e) {
  e.preventDefault();

  // TODO:
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries((formData));
  // console.log(data);
  if (!Object.values(data).every(value => !!value)) {
    return this.showNotification('All fields are requiered!');
  }

  try {
    await create(data);

    page.redirect('/dashboard');
  } catch (err) {
    return this.showNotification(err.message);
  }
}



