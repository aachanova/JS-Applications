import { remove } from "../api/itemsApi.js";
import page from "../lib/page.js";

export default async function deleteView(ctx) {
    // TODO: Implement this view
    const itemId = ctx.params.itemId;
    const isConfirmed = confirm('Are you sure you want to delete this'); // sync operation

    if (!isConfirmed) {
        return;
    }

    try {
        await remove(itemId);

        page.redirect('/dashboard');
    } catch (error) {
        alert(err.message);
    }
}

