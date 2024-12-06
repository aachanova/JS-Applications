export const saveUserData = (userData) => {
    // console.log(userData);
    
    localStorage.setItem('_id', userData._id);    
    // localStorage.setItem('email', userData.email);
    localStorage.setItem('accessToken', userData.accessToken);
    
    // console.log(sessionStorage.getItem('_id'));
    // console.log(sessionStorage.getItem('email'));
    // console.log(sessionStorage.getItem('accessToken'));

};

export const getUserData = () => {
    const userData = {
        _id: localStorage.getItem('_id'),
        // email: localStorage.getItem('email'),
        accessToken: localStorage.getItem('accessToken'),
    };

    return userData;
};

export const clearUserData = () => {
    localStorage.clear();
}

