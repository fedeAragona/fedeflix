//I MANUALLY SET THE USER IDENTIFIER
const USER_KEY = 'user';

//FUNCTION THAT VERIFIES THE USER LOGIN SAVING THE DATA AND USING THE EMAIL AS TOKEN SAVING SUCH INFORMATION LOCALLY
export const login = (email, password) => {

    if (!email || !password) return false;

    const token = JSON.stringify({
        email
    });

    localStorage.setItem(USER_KEY, token);
    return true;
};

//FUNCTION THAT VERIFIES THE USER REGISTER SAVING THE DATA AND USING THE EMAIL AS TOKEN SAVING SUCH INFORMATION LOCALLY
export const register = (email, password, passwordConfirm) => {

    if (!email || !password || !passwordConfirm) return false;

    const token = JSON.stringify({
        email
    });

    localStorage.setItem(USER_KEY, token);
    return true;
};

//FUNCTION THAT CLEANS UP THE LOCALSTORAGE USER RECORD
export const logout = () => {
    localStorage.removeItem(USER_KEY);
};

//IN THIS FUNCTION YOU GET STORED USER INFORMATION
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
