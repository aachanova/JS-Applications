import { logout } from "../api/usersApi.js";
import { clearUserData } from "../utils/usersUtils.js";

export default async function logoutView(ctx) {
  // TODO: Implement this view
  // Make a logout request
  // Clear user session

  try {
    await logout();

    clearUserData();

    page.redirect('/');
  } catch (err) {
    
  }

}





