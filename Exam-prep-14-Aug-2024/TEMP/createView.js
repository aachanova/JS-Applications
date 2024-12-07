import { render, html } from "../lib/lit-html.js";

const template = () => html`

`;

export default async function createView(ctx) {
  
  render(template());
}

async function createFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('submit');
  

}



