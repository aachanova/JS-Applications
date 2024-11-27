import { render, html } from "../lib/lit-html.js";

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
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>
`;

export default async function loginView(ctx) {
    // TODO: Implement this view

    render(template(loginFormSubmitHandler));
}

async function loginFormSubmitHandler(e) {
    e.preventDefault();

    // TODO: Get form data
    
}   

