export const saveUserData = (userData) => {
    console.log(userData);
    
    sessionStorage.setItem('_id', userData._id);    
    sessionStorage.setItem('email', userData.email);
    sessionStorage.setItem('accessToken', userData.accessToken);
    
    // console.log(sessionStorage.getItem('_id'));
    // console.log(sessionStorage.getItem('email'));
    // console.log(sessionStorage.getItem('accessToken'));

};

export const getUserData = () => {
    const userData = {
        _id: sessionStorage.getItem('_id'),
        email: sessionStorage.getItem('email'),
        accessToken: sessionStorage.getItem('accessToken'),
    };

    return userData;
};

export const clearUserData = () => {
    sessionStorage.clear();
}

