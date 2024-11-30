import { logout } from "../api/usersApi.js";
import page from "../lib/page.js";
import { clearUserData } from "../utils/userUtils.js";

export default async function logoutView(ctx) {
    //Implement this homeView

    // Make a logout request

    // Check if logged in
    try {
        await logout();

        // Clear user session
        clearUserData();

        page.redirect('/');


    } catch (err) {
        console.error(err.message);
    }


    
    

}
