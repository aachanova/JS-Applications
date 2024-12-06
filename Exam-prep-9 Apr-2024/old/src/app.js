// console.log('works');

import page from "./lib/page.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";

import createView from "./views/createView.js";
import dashboardView from "./views/dashboardView.js";
import detailsView from "./views/detailsView.js";
import editView from "./views/editView.js";
import homeView from "./views/homeView.js";
import loginView from "./views/loginView.js";
import logoutView from "./views/logoutView.js";
import navigationView from "./views/navigationView.js";
import registerView from "./views/registerView.js";
import deleteView from "./views/deleteView.js"

page(navigationMiddleware);

page('/', homeView);
page('/create', createView);
page('/dashboard', dashboardView);
page('/dashboard/:itemId/details', detailsView);
page('/dashboard/:itemId/edit', editView);
page('/dashboard/:itemId/delete', deleteView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/navigation', navigationView);

page();
