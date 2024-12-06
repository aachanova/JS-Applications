import page from "../lib/page.js";
import { edit, getOne } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (item, onSubmit) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <img class="border" src="./images/border.png" alt=""/>
        <h2>Edit Solution</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${item.type} name="type" id="type" placeholder="Solution Type"/>
            <input type="text" value=${item.imageUrl} name="image-url" id="image-url" placeholder="Image URL"/>
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${item.description}</textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10">${item.learnMore}</textarea>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>
`;

export default async function editView(ctx) {
    const itemId = ctx.params.itemId;
    const item = await getOne(itemId);

    render(template(item, editFormSubmitHandler.bind(ctx)));
}

async function editFormSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    const itemId = this.params.itemId;
    // console.log(data);


    if (!Object.values(data).every(value => !!value)) {
        return alert('All fields are required');
    }

    try {
        await edit(itemId, data);

        page.redirect(`/dashboard/${itemId}/details`);

    } catch (err) {
        alert(err.message);
    }

}

// const data = {
    //   type: formData.get("type").trim(),
    //   imageUrl: formData.get("image-url").trim(),
    //   description: formData.get("description").trim(),
    //   learnMore: formData.get("more-info").trim(),
    // };