import page from "../lib/page.js";
import { create } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (onSubmit) => html`
<!-- Create Page (Only for logged-in users) -->
      <section id="create">
        <div class="form">
          <h2>Add Show</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="title" id="title" placeholder="TV Show title" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <input type="text" name="genre" id="genre" placeholder="Genre" />
            <input type="text" name="country" id="country" placeholder="Country" />
            <textarea id="details" name="details" placeholder="Details" rows="2" cols="10"></textarea>
            <button type="submit">Add Show</button>
          </form>
        </div>
      </section>
`;

export default async function addView(ctx) {

  render(template(addFormSubmitHandler));
}

async function addFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('create submit');

  const formData = new FormData(e.currentTarget);
  // const data1 = Object.fromEntries(formData);
  // console.log(data1);


  const data = {
    title: formData.get('title').trim(),
    imageUrl: formData.get('image-url').trim(),
    genre: formData.get('genre').trim(),
    country: formData.get('country').trim(),
    details: formData.get('details').trim()
  }
  
  console.log(data);


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



