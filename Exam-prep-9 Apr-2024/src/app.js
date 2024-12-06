// console.log('It works');

import page from "./lib/page.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
// import { notificationsMiddleware } from "./middlewares/notificationMiddleware.js";

import createView from "./views/createView.js";
import dashboardView from "./views/dashboardView.js";
// import deleteView from "./views/deleteView.js";
import detailsView from "./views/detailsView.js";
// import editView from "./views/editView.js";
import homeView from "./views/homeView.js";
import loginView from "./views/loginView.js";
import logoutView from "./views/logoutView.js";
import navigationView from "./views/navigationView.js";
import registerView from "./views/registerView.js";

page(navigationMiddleware);
// page(notificationsMiddleware);

page('/', homeView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/dashboard/:itemId/details', detailsView);
// page('/dashboard/:itemId/edit', editView); // /edit
// page('/dashboard/:itemId/delete', deleteView);
page('/login', loginView);
page('/navigation', navigationView);
page('/register', registerView);
page('/logout', logoutView);


page();