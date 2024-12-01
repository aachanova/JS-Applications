import page from "./lib/page.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleWare.js";
import createView from "./views/createView.js";
import dashboardView from "./views/dashboardView.js";
import deleteView from "./views/deleteView.js";
import detailsView from "./views/detailsView.js";
import editView from "./views/editView.js";
import homeView from "./views/homeView.js";
import loginView from "./views/loginView.js";
import logoutView from "./views/logoutView.js";
import registerView from "./views/registerView.js";

page(navigationMiddleware);

page('/', homeView);
page('/dashboard', dashboardView);
page('/dashboard/:itemId/details', detailsView);
page('/dashboard/:itemId/edit', editView);
page('/dashboard/:itemId/delete', deleteView);
page('/details', detailsView);
page('/edit', editView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/create', createView);

// Start page.js
page();
