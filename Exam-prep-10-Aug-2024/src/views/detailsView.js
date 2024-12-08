import { getOne } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/usersUtils.js";

const template = (item, isOwner) => html`
<!-- Details page -->
      <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${item.imageUrl} alt=${item.item} />
          <div>
            <div id="info-wrapper">
              <p id="details-type">${item.type}</p>
              <div id="details-description">
                <p id="user-type">${item.userType}</p>
                <p id="description">${item.description}</p>
              </div>
              <h3>Like tattoo:<span id="like">0</span></h3>
              <!--Edit and Delete are only for creator-->
              ${isOwner
                ? html`
                <div id="action-buttons">
                <a href="/dashboard/${item._id}/edit" id="edit-btn">Edit</a>
                <a href="/dashboard/${item._id}/delete" id="delete-btn">Delete</a>

                <!--Bonus - Only for logged-in users ( not authors )-->
                <!--<a href="#" id="like-btn">Like</a>-->
              </div>
                `
                : ''
              }
            </div>
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


