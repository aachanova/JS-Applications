import { getOne } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/usersUtils.js";

const template = (item, isOwner) => html`
<!-- Details page -->
      <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="./images/Bioremediation.png" alt="example1" />
          <div>
            <p id="details-type">Bioremediation</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">
                  Synthetic biology involves the design and construction of
                  biological systems for useful purposes.
                </p>
                <p id="more-info">
                  In the realm of environmental cleanup, synthetic biology can
                  be employed to engineer microorganisms capable of degrading
                  toxic pollutants. By introducing synthetic genes into
                  bacteria or fungi, researchers can enhance their ability to
                  break down pollutants such as hydrocarbons, pesticides, and
                  industrial chemicals. These engineered microorganisms can be
                  deployed in contaminated sites to accelerate the natural
                  biodegradation process, offering a cost-effective and
                  sustainable solution to environmental pollution.
                </p>
              </div>
            </div>
            <h3>Like Solution:<span id="like">0</span></h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
              <a href="#" id="edit-btn">Edit</a>
              <a href="#" id="delete-btn">Delete</a>

              <!--Bonus - Only for logged-in users ( not authors )-->
              <a href="#" id="like-btn">Like</a>
            </div>
          </div>
        </div>
      </section>
`;

export default async function detailsView(ctx) {
  const itemId = ctx.params.itemId;
  const item = await getOne(itemId);

  const userData = getUserData();
  console.log(userData);
  
  const isOwner = userData._id ===item._ownerId;

  render(template(item, isOwner));
}

// TODO:
// Get form data
// Validation
// Error handling
// Create login request
// Save user data
// Redirect to home on success




