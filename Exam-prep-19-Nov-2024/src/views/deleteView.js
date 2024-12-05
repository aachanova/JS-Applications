import { login } from "../api/usersApi.js";
import { render, html } from "../lib/lit-html.js";
import page from "../lib/page.js";
import { saveUserData } from "../utils/usersUtils.js";

const template = (onSubmit) => html`
     
`;

export default async function loginView(ctx) {
    // console.log('login submit');
    render(template(loginFormSubmitHandler));
}

// async function deleteFormSubmitHandler(e) {
//     e.preventDefault();
//     // TODO:
//     // Get form data
//     // Validation
//     // Error handling
//     // Create request
//     // Save user data
//     // Redirect to home page on success

//     const formData = new FormData(e.currentTarget);
//     const email = formData.get('email');
//     const password = formData.get('password');

//     if (email === '' || password === '') {
//         return alert('All fields are required!');
//     }

//     try {
//         const userData = await login(email, password);

//         saveUserData(userData);

//         page.redirect('/');
//     } catch (err) {
//         alert(err.message);
//     }
// }