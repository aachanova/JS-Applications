import { edit, getOne } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";
import page from "../lib/page.js";

const template = (item, onSubmit) => html`
<!-- Edit Page (Only for logged-in users) -->
      <section id="edit">
        <div class="form">
          <h2>Edit Show</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${item.title} name="title" id="title" placeholder="TV Show title" />
            <input type="text" value=${item.imageUrl} name="image-url" id="image-url" placeholder="Image URL" />
            <input type="text" value=${item.genre} name="genre" id="genre" placeholder="Genre" />
            <input type="text" value=${item.country} name="country" id="country" placeholder="Country" />
            <textarea id="details" name="details" placeholder="Details" rows="2" cols="10">${item.details}</textarea>
            <button type="submit">Edit Show</button>
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
  // const data1 = Object.fromEntries(formData);
  // console.log(data1);

  const itemId = this.params.itemId;

  const data = {
    title: formData.get('title').trim(),
    imageUrl: formData.get('image-url').trim(),
    genre: formData.get('genre').trim(),
    country: formData.get('country').trim(),
    details: formData.get('details').trim()
  }

  // console.log(data);
  if (!Object.values(data).every(value => !!value)) {
    return alert('All fields are required!')
  }

  try {
    await edit(itemId, data);

    page.redirect(`/dashboard/${itemId}/details`)

  } catch (err) {
    alert(err.message)
  }
}



