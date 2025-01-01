import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use React Router Link for navigation

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className={`w-full py-4 transition-all duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white"}`}>
            {/* Dark Mode Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className="absolute top-5 right-5 bg-[#47AEDE] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#223740]"
            >
                Toggle Dark Mode
            </button>

            <div className="container mx-auto px-4 flex justify-between items-center">

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
                    <Link to="/home" className="hover:text-blue-500">Home</Link>
                    <Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link>
                    <Link to="/about" className="hover:text-blue-500">About Me</Link>
                    <Link to="/contact" className="hover:text-blue-500">Contact</Link>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <button className="block md:hidden text-gray-700">
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
        </header>
    );
};

export default Header;
