const USER_KEY = 'user';

export const login = (email, password) => {

    if (!email || !password) return false;

    const token = JSON.stringify({
        email
    });

    localStorage.setItem(USER_KEY, token);
    return true;
};

export const register = (email, password, passwordConfirm) => {

    if (!email || !password || !passwordConfirm) return false;

    const token = JSON.stringify({
        email
    });

    localStorage.setItem(USER_KEY, token);
    return true;
};

export const logout = () => {
    localStorage.removeItem(USER_KEY);
};

export const getUser = () => {
    const user = localStorage.getItem(USER_KEY);

    if (!user) return null;

    try {
        return JSON.parse(user);
    }
    catch (err) {
        return null;
    }
};
