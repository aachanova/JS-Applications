import page from "../lib/page.js";
import { edit, getOne } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (item, onSubmit) => html`
<!-- Edit Page (Only for logged-in users) -->
      <section id="edit">
        <div class="form">
          <h2>Edit tattoo</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${item.type} name="type" id="type" placeholder="Tattoo Type" />
            <input type="text" value=${item.imageUrl} name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${item.description}</textarea>
            <select id="user-type" name="user-type">
              <option value="" disabled selected>Select your role</option>
              <option value="Tattoo Artist" ?selected=${item.userType === 'Tattoo Artist'}>Tattoo Artist</option>
              <option value="Tattoo Enthusiast" ?selected=${item.userType === 'Tattoo Enthusiast'}>Tattoo Enthusiast</option>
              <option value="First Time in Tattoo" ?selected=${item.userType === 'First Time in Tattoo'}>First Time in Tattoo
              </option>
              <option value="Tattoo Collector" ?selected=${item.userType === 'Tattoo Collector'}>Tattoo Collector</option>
            </select>
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
  // console.log('submit');
  
  const formData = new FormData(e.currentTarget);
  // const data1 = Object.fromEntries(formData);
  // console.log(data1);

  const itemId = this.params.itemId;

  const data = {
    type: formData.get('type').trim(),
    imageUrl: formData.get('image-url').trim(),
    description: formData.get('description').trim(),
    userType: formData.get('user-type').trim()
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



