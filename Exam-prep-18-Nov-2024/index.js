import page from "./lib/page.js";

import createView from "./views/createView.js";
import loginView from "../view/loginView.js";
import dashboardView from "./views/dashboardView.js";
import homeView from "./views/homeView.js";
import registerView from "./views/registerView.js";
import logoutView from "./views/logoutView.js";

page('/', homeView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

//Start page.js
page();