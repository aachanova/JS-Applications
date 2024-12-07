import { baseRender, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/usersUtils.js";

// TODO: find root element
const headerElement = document.querySelector('#wrapper > header');

const template = (isAuthenticated) => html`
<!-- Navigation -->
      <a id="logo" href="/"><img id="logo-img" src="./images/show_logo.png" alt="logo" />
      </a>
      <nav>
        <div>
          <a href="/dashboard">TV Shows</a>
          <a href="/search">Search</a>
        </div>

        ${isAuthenticated
          ? html`
          <div class="user">
          <a href="/add">Add Show</a>
          <a href="/logout">Logout</a>
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


