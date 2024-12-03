import page from "../lib/page.js"
import { render, html } from "../lib/lit-html.js";
import { saveUserData } from "../utils/usersUtils.js";
import { login} from "../api/usersApi.js";


const template = (onSubmit) => html`
   <!-- Login Page (Only for Guest users) -->
      <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </section>
`;

export default async function loginView(ctx) {
  // TODO: Implement this view

  render(template(loginFormSubmitHandler.bind(ctx)));
}

async function loginFormSubmitHandler(e) {
  e.preventDefault();

  // TODO:
  // Get gorm FormData
  // Validation
  // Error handling
  // Make a login request
  // Set user data
  // Redirect

  const formData = new FormData(e.currentTarget);
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === '' || password === '') {
    return this.showNotification('All fields are required')
  }

  try {
    const userData = await login(email, password);

    saveUserData(userData);  

    page.redirect('/');

  } catch (err) {
    alert(err.message);
  }


}



