import { baseRender, html } from "../src/lib/lit-html.js";

// TODO: find root element

const template = () => html`

`;

export default async function navigationView(ctx) {
  
  baseRender(template());
}


