import { createContext, useState, useEffect } from 'react';
import { getUserFromLocalStorage, saveUserToLocalStorage, clearUserFromLocalStorage } from '../utils/localStorageUtils';

export const LoginContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getUserFromLocalStorage());

    const login = (username, password) => {
        // For simplicity, assuming any username/password combination is valid
        setUser(username);
        saveUserToLocalStorage(username);
    };

    const logout = () => {
        setUser(null);
        clearUserFromLocalStorage();
    };

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};
