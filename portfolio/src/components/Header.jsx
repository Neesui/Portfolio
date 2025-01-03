import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    // State for dark mode and mobile menu
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Update body class based on dark mode state
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className={`w-full py-4 shadow-md transition-all duration-300 ${isDarkMode ? "bg-[#021526] text-white" : "bg-white text-gray-700"
                }`}
        >
            <div className="container mx-auto px-[15vh] flex justify-between items-center">
                {/* Navigation Links */}
                <nav
                    className={`${isMobileMenuOpen ? "block" : "hidden"
                        } md:flex space-x-[8vh] font-medium`}
                >
                    <Link
                        to="/home"
                        className="hover:text-blue-500 font-[700] font-two text-[3vh]"
                    >
                        Home
                    </Link>
                    <Link
                        to="/portfolio"
                        className="hover:text-blue-500 font-[700] font-two text-[3vh]"
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-blue-500 font-[700] font-two text-[3vh]"
                    >
                        About Me
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-blue-500 font-[700] font-two text-[3vh]"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Dark Mode and Mobile Menu Buttons */}
                <div className="flex items-center space-x-2">
                    {/* Dark Mode Toggle Button */}
                    <button onClick={toggleDarkMode} className="focus:outline-none">
                        {isDarkMode ? (
                            // Sun Icon for Light Mode
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
                            // Moon Icon for Dark Mode
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

                    {/* Mobile Menu Toggle Button */}
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
