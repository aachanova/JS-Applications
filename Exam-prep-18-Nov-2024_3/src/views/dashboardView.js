import { getAll } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (items) => html`
   <!-- Dashboard page -->
      <h3 class="heading">Market</h3>
      <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${items.map(item => html`
            <div class="item">
          <img src=${item.imageUrl} alt=${item.item}/>
          <h3 class="model">${item.item}</h3>
          <div class="item-info">
            <p class="price">Price: €${item.price}</p>
            <p class="availability">${item.availability}</p>
            <p class="type">Type: ${item.type}</p>
          </div>
          <a class="details-btn" href="/dashboard/${item._id}/details">Uncover More</a>
        </div>
            `)}
      </section>
      <!-- Display an h2 if there are no posts -->
      ${items.length === 0
        ? html`<h3 class="empty">No Items Yet</h3>`
        : ''
    }
`;

export default async function dashboardView(ctx) {
    //Implement this homeView
    const items = await getAll();

    render(template(items));
}