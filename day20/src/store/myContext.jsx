import { createContext, useEffect, useMemo, useState } from "react";

const myContext = createContext({
    user: null,
    isLoggedIn: false,
    login: (_user) => {},
    logout: () => {},
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        try {
            const raw = localStorage.getItem('foodies_current_user');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && parsed.email) {
                    setUser(parsed);
                    setIsLoggedIn(true);
                }
            }
        } catch (e) {
            // ignore
        }
    }, []);

    function login(nextUser) {
        setUser(nextUser);
        setIsLoggedIn(true);
        localStorage.setItem('foodies_current_user', JSON.stringify(nextUser));
    }

    function logout() {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('foodies_current_user');
    }

    const value = useMemo(() => ({ user, isLoggedIn, login, logout }), [user, isLoggedIn]);

    return (
        <myContext.Provider value={value}>
            {children}
        </myContext.Provider>
    );
}

export default myContext;