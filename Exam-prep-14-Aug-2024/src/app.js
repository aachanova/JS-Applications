// console.log('app.js works');

import page from "./lib/page.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
// import { notificationsMiddleware } from "./middlewares/notificationMiddleware.js";

import addView from "./views/addView.js";
import dashboardView from "./views/dashboardView.js";
import deleteView from "./views/deleteView.js";
import detailsView from "./views/detailsView.js";
import searchView from "./views/searchView.js";
import homeView from "./views/homeView.js";
import loginView from "./views/loginView.js";
import logoutView from "./views/logoutView.js";
import navigationView from "./views/navigationView.js";
import registerView from "./views/registerView.js";
import editView from "./views/editView.js";

page(navigationMiddleware);
// page(notificationsMiddleware);

page('/', homeView);
page('/dashboard', dashboardView);
page('/add', addView);
page('/dashboard/:itemId/details', detailsView);
page('/dashboard/:itemId/delete', deleteView);
page('/dashboard/:itemId/edit', editView);
page('/search', searchView);
page('/login', loginView);
page('/navigation', navigationView);
page('/register', registerView);
page('/logout', logoutView);


page();