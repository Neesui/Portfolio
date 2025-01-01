import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    // Initialize dark mode to true (so it starts in dark mode)
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        // Apply or remove the dark class on body element based on the isDarkMode state
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className={`w-full py-4 shadow-md transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-700"
                }`}
        >
            <div className="container mx-auto px-[15vh] flex justify-between items-center">
                {/* Navigation Links */}
                <nav
                    className={`${isMobileMenuOpen ? "block" : "hidden"
                        } md:flex space-x-[12vh] font-medium`}
                >
                    <Link
                        to="/home"
                        className="hover:text-blue-500 font-[700] font-two text-[4vh]"
                    >
                        Home
                    </Link>
                    <Link
                        to="/portfolio"
                        className="hover:text-blue-500 font-[700] font-two text-[4vh]"
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-blue-500 font-[700] font-two text-[4vh]"
                    >
                        About Me
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-blue-500 font-[700] font-two text-[4vh]"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Dark Mode and Mobile Menu */}
                <div className="flex items-center space-x-2">
                    <button
                        onClick={toggleDarkMode}
                        className="focus:outline-none"
                    >
                        {isDarkMode ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                    <button
                        className="block md:hidden text-gray-700"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
