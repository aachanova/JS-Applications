import { render, html } from "../lib/lit-html.js";

const template = () => html`

`;

export default async function loginView(ctx) {
  
  render(template());
}

async function loginFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('submit');
  

}



