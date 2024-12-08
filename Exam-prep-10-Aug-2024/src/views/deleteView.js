import page from "../lib/page.js";
import { del } from "../api/itemsApi.js";

export default async function deleteView(ctx) {
    const itemId = ctx.params.itemId;
    const isConfirmed = confirm('Are you sure you want to delete this');

    if (!isConfirmed) {
        return;
    }
    try {
        await del(itemId);

        page.redirect('/dashboard');
    } catch (err) {
        alert(err.message);
    }
}



