import { render, html } from "../lib/lit-html.js";
import { getOne } from "../api/itemsApi.js";
import { getUserData } from "../utils/usersUtils.js";

const template = (item, isOwner) => html`
<!-- Details page -->
      <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${item.imageUrl} alt=${item.item} />
          <div id="details-text">
            <p id="details-title">${item.title}</p>
            <div id="info-wrapper">
              <div id="description">
                <p id="details-description">${item.details}</p>
              </div>
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
  const itemId = ctx.params.itemId;
  const item = await getOne(itemId);

  const userData = getUserData();
  const isOwner = userData._id ===item._ownerId;

  render(template(item, isOwner));
}



