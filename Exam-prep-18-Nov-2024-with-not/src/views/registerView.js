import page from "../lib/page.js";
import { render, html } from "../lib/lit-html.js";
import { register } from "../api/usersApi.js";
import { saveUserData } from "../utils/usersUtils.js";


const template = (onSubmit) => html`
   <!-- Register Page (Only for Guest users) -->
      <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${onSubmit} class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>
`;

export default async function registerView(ctx) {
  // TODO: Implement this view

  render(template(registerFormSubmitHandler.bind(ctx)));
}

async function registerFormSubmitHandler(e) {
  e.preventDefault();

  // console.log('submit');

  // TODO:

  const formData = new FormData(e.currentTarget);
  const email = formData.get('email');
  const password = formData.get('password');
  const rePassword = formData.get('re-password');

  if (email === '' || password === '' || rePassword === '') {
    // TODO Show notification for empty string
    return this.showNotification('Fields are required!')
  }

  if (password !== rePassword) {
    // TODO Show notification for password missmatch

    // return alert('Passwords don\'t match');
    return this.showNotification('Passwords don\'t match');
  }

  // Create request

  try {
    const userData = await register(email, password);

    saveUserData(userData);  
    console.log((userData));
    

    page.redirect('/');
    
  } catch (err) {
    alert(err.message);
  }

  // Validation

  // Error handling
}



