import { page } from "./lib.js";
import { createView } from "./views/createView.js";
import { dashboardView } from "./views/dashboardView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { searchView } from "./views/searchView.js";

// // TODO remove this import
// import { exampleView } from "./views/example.js";

// //TODO remove these API tests
// import * as api from "./data/api.js";
// import * as userApi from "./data/user.js";



// window.api = api;
// window.userApi = userApi;

page('/', homeView());
page('/register', registerView());
page('/create', createView());
page('/dashboard', dashboardView());
page('/details', detailsView());
page('/edit', editView());
page('/home', homeView());
page('/login', loginView());
page('/search', searchView());


page.start();