//console.log('It Works');

import page from "./lib/page.js";
import dashboardView from "./views/dashboardView.js";
import loginView from "./views/loginView.js"
import homeView from "./views/homeView.js";
import registerView from "./views/registerView.js";
import createView from "./views/createView.js";
import logoutView from "./views/logoutView.js";


page('/', homeView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);


// Start page.js
page();
