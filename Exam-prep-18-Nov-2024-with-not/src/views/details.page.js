import { getOne } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/usersUtils.js";


const template = (item, isOwner) => html`
   <!-- Details page -->

      <section id="details">
        <div id="details-wrapper">
          <div>
            <img id="details-img" src=${item.imageUrl} alt=${item.item} />
            <p id="details-title">${item.item}</p>
          </div>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="details-price">Price: €${item.price}</p>
              <p class="details-availability">${item.availability}</p>
              <p class="type">Type: ${item.type}</p>
              <p id="item-description">${item.description}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${isOwner
            ? html`
            <div id="action-buttons">
              <a href="/dashboard/${item._id}/edit" id="edit-btn">Edit</a>
              <a href="/dashboard/${item._id}/delete" id="delete-btn">Delete</a>
            </div>
            `
            : ''
            }            
          </div>
        </div>
      </section>
`;

export default async function detailsView(ctx) {
  // TODO: Implement this view
  const itemId = ctx.params.itemId;
  const item = await getOne(itemId);

  const userData = getUserData();
  console.log(userData._id);
  console.log(item._isOwner);
  
  const isOwner = userData._id === item._ownerId;

  render(template(item, isOwner));
}



