import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";

const Navbar = () => {
    return (
        <div className="bg-white shadow-sm mb-2 dark:bg-db dark:text-white">
            <div className="flex justify-between py-4 w-11/12 mx-auto align-middle">
                <Link to="/">
                    <h2 className="font-bold text-md cursor-pointer">
                        Where in the World?
                    </h2>
                </Link>
                <ThemeChanger />
            </div>
        </div>
    );
};

const ThemeChanger = ({ children }) => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleMode}
        >
            {darkTheme ? (
                <>
                    <FaSun size="16" className="top-navigation-icon" />
                    <p className="text-sm font-normal">Light Mode</p>
                </>
            ) : (
                <>
                    <FaMoon size="16" className="top-navigation-icon" />
                    <p className="text-sm font-normal">Dark Mode</p>
                </>
            )}
            {children}
        </div>
    );
};

export default Navbar;
