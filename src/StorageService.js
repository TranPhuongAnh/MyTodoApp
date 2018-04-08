export const getAuth = () => {
    return LocalStorage.getItem('token');
};

export const setToken = (token) => {
    return LocalStorage.setItem('token',token);
};

export const getToken = (token) => {
    return LocalStorage.getItem('token');
};

export const deleteToken = (token) => {
    return LocalStorage.setItem('token','');
};