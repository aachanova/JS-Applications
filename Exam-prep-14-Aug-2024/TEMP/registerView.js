import { render, html } from "../lib/lit-html.js";

const template = () => html`

`;

export default async function registerView(ctx) {
  
  render(template());
}

async function registerFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('submit');
  

}



