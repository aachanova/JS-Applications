import { render, html } from "../lib/lit-html.js";

const template = () => html`
     <h1>It works</h1>
`;

export default async function homeView(ctx)  {
    //Implement this pageView
    render(template());
}

// async function registerFormSubmitHandler(e) {
//     e.preventDefault();
//     // TODO:
//     // Get form data
//     // Validation
//     // Error handling
//     // Save user data
//     // Create request
//     // Redirect to home page on success
// }