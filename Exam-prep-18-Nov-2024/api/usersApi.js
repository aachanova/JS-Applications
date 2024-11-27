const baseUrl = 'http://localhost:3030/users';

export const register = async(email, password) => {
    const response  = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    const userData = await response.json();

    return userData;
};