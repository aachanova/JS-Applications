import { search } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (onSubmit) => html`
<!--BONUS Search page -->
      <section id="search">

        <div class="form">
          <h2>Search</h2>
          <form @submit=${onSubmit} class="search-form">
            <input type="text" name="search" id="search-input" />
            <button class="button-list">Search</button>
          </form>
        </div>
        <h4>Results:</h4>
        <div class="search-result">
          <p class="no-result">There is no TV show with this title</p>
          <!--If there are matches display a div with information about every show-->
          <div class="show">
            <img src="./images/westworld.jpg" alt="example1" />
            <div class="show">
              <h3 class="title">Westworld</h3>
              <p class="genre">Genre: Science Fiction</p>
              <p class="country-of-origin">Country of Origin: United States</p>
              <a class="details-btn" href="#">Details</a>
            </div>
          </div>
        </div>
      </section>
`;

export default async function searchView(ctx) {
  
  render(template(searchFormSubmitHandler));
}

async function searchFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('search submit');

  const searchQuery = document.getElementById('search-input').value.trim();

  if (!searchQuery) {
    return alert('Please fill the search field!');
  }

  try {
    const result = await search(searchQuery);
    return result;
  } catch (err) {
    alert(err.message);
  }
}



