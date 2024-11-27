import page from "../lib/page.js";
import { render, html } from "../lib/lit-html.js";
import { register } from "../api/usersApi.js";
import { saveUserData } from "../utils/userUtils.js";

const template = (onSubmit) => html`
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

    render(template(registerFormSubmitHandler));
}

async function registerFormSubmitHandler(e) {
    e.preventDefault();
    // console.log('Submit');

    
    // Get form userData
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('re-password');

    // TODO: Validation
    if (email === '' || password === '' || rePassword === '') {
        return alert('Fields are required!');
    }

    if(password !== rePassword) {
        return alert('Password Missmatch!');
        // TODO: Show notification for password mismatch

        console.log('Password mismatch');
        return;        
    }

    // TODO: Error handling
    try {
        // Create request
    const userData = await register(email, password);

    // TODO:save user data
    console.log(userData);
    saveUserData(userData);

    // Redirect to home on success
    page.redirect('/');
    } catch (error) {
        alert(error.message);
    }
    // Create request
    const userData = await register(email, password);

    // TODO:save user data
    console.log(userData);
    saveUserData(userData);

    // Redirect to home on success
    page.redirect('/');
}

