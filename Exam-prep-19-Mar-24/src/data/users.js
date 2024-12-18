import { setUserData, clearUserData } from "../utils.js";
import { get, post } from "./request.js";

// TODO Adapt user profile to exam reqirement(identity, extra properties, etc..)

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export async function login(email, password) {
    const result = await post(endpoints.login, {email, password});
    setUserData(result);    
}

export async function register(email, password) {
    const result = await post(endpoints.register, {email, password});
    setUserData(result);    
}

export async function logout() {
    const promise = get(endpoints.logout);
    clearUserData();    

    await promise;
}

