import page from "../lib/page.js";
import { edit, getOne } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (item, onSubmit) => html`
<!-- Edit Page (Only for logged-in users) -->
      <section id="edit">
        <div class="form form-item">
          <h2>Edit Offer</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${item.model} name="model" id="model" placeholder="Drone Model" />
            <input type="text" value=${item.imageUrl} name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="number" value=${item.price} name="price" id="price" placeholder="Price" />
            <input type="number" value=${item.weight} name="weight" id="weight" placeholder="Weight" />
            <input type="number" value=${item.phone} name="phone" id="phone" placeholder="Phone Number for Contact" />
            <input type="text" value=${item.condition} name="condition" id="condition" placeholder="Condition" />
            <textarea name="description" id="description" placeholder="Description">${item.description}</textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
`;

export default async function editView(ctx) {
  const itemId = ctx.params.itemId;
  const item = await getOne(itemId);

  render(template(item, editFormSubmitHandler.bind(ctx)));
}

async function editFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('edit submit');
  const formData = new FormData(e.currentTarget);

  const itemId = this.params.itemId;

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
    await edit(itemId, data);

    page.redirect(`/dashboard/${itemId}/details`)

  } catch (err) {
    alert(err.message)
  }

}



