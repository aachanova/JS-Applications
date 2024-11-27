import { page } from "./lib.js";
import { showExample } from "./views/example.js";
// TODO Remove these imports after testing
// import * as api from "./data/request.js";
// import * as userApi from "./data/users.js";

import * as api from './data/events.js';

// TODO
page('/', showExample);

page.start();

// TODO Remove these properties after testing
window.api = api;
// window.userApi = userApi;