import { remove } from "../api/itemsApi.js";
import page from "../lib/page.js";

export default async function deleteView(ctx) {
  // TODO: Implement this view
  const itemId = ctx.params.itemId;
  const isConfirmed = confirm('Are you sure delete this');

  if (!isConfirmed) {
    return;
  }
  try {
    remove(itemId);

    page.redirect('/dashboard');
    
  } catch (err) {
    alert(err.message);
  }
 
}


