import { logout } from "../api/usersApi.js";
import page from "../lib/page.js";
import { clearUserData } from "../utils/userUtils.js";

export default async function logoutView(ctx) {
    // TODO: Check if logged in


    // Make a logout request
    try {
        await logout();

        clearUserData();

        page.redirect('/');
    } catch (err) {
        console.error(err.message);
    }

    //Clear user session

}
