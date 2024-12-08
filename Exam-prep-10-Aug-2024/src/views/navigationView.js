import { baseRender, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/usersUtils.js";

// TODO: find root element
const headerElement = document.querySelector('#content > header');

const template = (isAuthenticated) => html`
<!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt="logo" />
        </a>
        <nav>
          <a href="/dashboard">Collection</a>
          ${isAuthenticated
            ? html`
            <div class="user">
            <a href="/create">Add Tattoo</a>
            <a id="logout" href="/logout">Logout</a>
          </div>
            `
            : html`
            <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
            `
          }
        </nav>
`;

export default async function navigationView(ctx) {
  const userData = getUserData();
  const isAuthenticated = !!userData.accessToken;

  baseRender(template(isAuthenticated), headerElement);
}


