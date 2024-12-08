import page from "../lib/page.js";
import { create } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (onSubmit) => html`
<!-- Create Page (Only for logged-in users) -->
      <section id="create">
        <div class="form">
          <h2>Add tattoo</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="type" id="type" placeholder="Tattoo Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <select id="user-type" name="user-type">
              <option value="" disabled selected>Select your role</option>
              <option value="Tattoo Artist">Tattoo Artist</option>
              <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
              <option value="First Time in Tattoo">
                First Time in Tattoo
              </option>
              <option value="Tattoo Collector">Tattoo Collector</option>
            </select>
            <button type="submit">Add tattoo</button>
          </form>
        </div>
      </section>
`;

export default async function createView(ctx) {
  
  render(template(createFormSubmitHandler));
}

async function createFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('submit');
  
  const formData = new FormData(e.currentTarget);
  // const data1 = Object.fromEntries(formData);
  // console.log(data1);


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
    await create(data);

    page.redirect('/dashboard');
  } catch (err) {
    alert(err.message);
  }

}



