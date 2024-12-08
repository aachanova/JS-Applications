import page from "../lib/page.js";
import { create } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (onSubmit) => html`
<!-- Create Page (Only for logged-in users) -->
      <section id="create">
        <div class="form form-item">
          <h2>Add Drone Offer</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="model" id="model" placeholder="Drone Model" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="number" name="price" id="price" placeholder="Price" />
            <input type="number" name="weight" id="weight" placeholder="Weight" />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
            <input type="text" name="condition" id="condition" placeholder="Condition" />
            <textarea name="description" id="description" placeholder="Description"></textarea>
            <button type="submit">Add</button>
          </form>

        </div>
      </section>
`;

export default async function createView(ctx) {
  
  render(template(createFormSubmitHandler.bind(ctx)));
}

async function createFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('create submit');
  
  const formData = new FormData(e.currentTarget);

  const data = {
    model: formData.get('model').trim(),
    imageUrl: formData.get('imageUrl').trim(),
    price: formData.get('price').trim(),
    condition: formData.get('condition').trim(),
    weight: formData.get('weight').trim(),
    phone: formData.get('phone').trim(),
    description: formData.get('description').trim(),
  }
  
  // console.log(data);


  if (!Object.values(data).every(value => !!value)) {
    return this.showNotification('All fields are required!')
  }

  try {
    await create(data);

    page.redirect('/dashboard');
  } catch (err) {
    alert(err.message);
  }
}



