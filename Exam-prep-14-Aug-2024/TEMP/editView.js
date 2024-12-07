import { render, html } from "../lib/lit-html.js";

const template = () => html`

`;

export default async function editView(ctx) {
  
  render(template());
}

async function editFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('submit');
  

}



