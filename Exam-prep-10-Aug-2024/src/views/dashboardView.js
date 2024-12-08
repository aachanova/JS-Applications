import { getAll } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (items) => html`
<!-- Dashboard page -->
      <h2>Collection</h2>
      <section id="tattoos">
        <!-- Display a div with information about every post (if any)-->
        ${items.map(item => html`
          <div class="tattoo">
          <img src=${item.imageUrl} alt=${item.item} />
          <div class="tattoo-info">
            <h3 class="type">${item.type}</h3>
            <span>Uploaded by </span>
            <p class="user-type">${item.userType}</p>
            <a class="details-btn" href="/dashboard/${item._id}/details">Learn More</a>
          </div>
        </div>
          `)}
      </section>
      <!-- Display an h2 if there are no posts -->
      ${items.length === 0
        ? html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`
        : ''
      }
`;

export default async function dashboardView(ctx) {
  const items = await getAll();

  render(template(items));
}



