import { request } from "../lib/request.js";

const baseUrl = 'http://localhost:3030/data/cyberpunk';

export const getAll = () => request('GET', baseUrl);