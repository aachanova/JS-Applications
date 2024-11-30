import { register } from "../api/usersApi.js";
import { render, html } from "../lib/lit-html.js";
import page from "../lib/page.js";
import { saveUserData } from "../utils/userUtils.js";

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
    //Implement this homeView
    render(template(registerFormSubmitHandler));
}

async function registerFormSubmitHandler(e) {
    e.preventDefault();

    console.log('submit');

    // Create request
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('re-password');


    // Validation
    if (email === '' || password === '' || rePassword === '') {
        // TODO Show notifications for empty fields
        return alert('Fields are required!');
    }

    if (password !== rePassword) {
        // TODO Show notifications for password missmatch
        return alert('Passwords don\'t match');
    }

    // Error handling
    try {
        const userData = await register(email, password);
        
        saveUserData(userData);

        page.redirect('/');
    } catch (err) {
        alert(err.message);
    }



}