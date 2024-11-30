import { request } from "../lib/request.js";

const baseUrl = 'http://localhost:3030/users';

export const register = (email, password) => request('POST', `${baseUrl}/register`, {email, password});

export const login = (email, password) => {
    return request('POST', `${baseUrl}/login`, {email, password}); // vtori variant
};

export const logout = () => {
    return request('GET', `${baseUrl}/logout`);
}