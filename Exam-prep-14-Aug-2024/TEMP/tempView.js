import { render, html } from "../lib/lit-html.js";

const template = () => html`

`;

export default async function TEMPView(ctx) {
  
  render(template());
}

async function TEMPFormSubmitHandler(e) {
  e.preventDefault();
  // console.log('submit');
  

}



