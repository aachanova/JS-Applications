import { request } from "../lib/request.js";

const baseUrl = 'http://localhost:3030/data/tattoos';

export const getAll = () => request('GET', `${baseUrl}?sortBy=_createdOn%20desc`);

export const getOne = (itemId) => request('GET', `${baseUrl}/${itemId}`);

export const create = (itemData) => request('POST', baseUrl, itemData);

export const edit = (itemId, data) => request('PUT', `${baseUrl}/${itemId}`, data);

export const del = (itemId) => request('DELETE', `${baseUrl}/${itemId}`);

// export const search = (searchQuery) => request('GET', `${baseUrl}/?where=title%20LIKE%20%22${encodeURIComponent(searchQuery)}%22`);
