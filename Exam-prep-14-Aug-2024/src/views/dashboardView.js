import { getAll } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (items) => html`
<!-- Dashboard page -->
      <h2>Users Recommendations</h2>
      <section id="shows">
        <!-- Display a div with information about every post (if any)-->
        ${items.map(item => html`
          <div class="show">
          <img src=${item.imageUrl} alt=${item.item} />
          <div class="show-info">
            <h3 class="title">${item.title}</h3>
            <p class="genre">Genre: ${item.genre}</p>
            <p class="country-of-origin">Country of Origin: ${item.country}</p>
            <a class="details-btn" href="/dashboard/${item._id}/details">Details</a>
          </div>
        </div>
          `)}
      </section>
      <!-- Display an h2 if there are no posts -->
      ${items.length === 0
        ? html`<h2 id="no-show">No shows Added.</h2>`
        : ''
      }
`;

export default async function dashboardView(ctx) {
  const items = await getAll();

  render(template([]));
}



