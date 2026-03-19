import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavBar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    //Dark mode state
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <nav className="relative flex items-center justify-between px-30 max-md:px-5 py-5 w-full transition-colors duration-200">

            {/* Logo section */}
            <div className="flex">
                <img
                    src="https://bsrejqjahgobpcljlgho.supabase.co/storage/v1/object/public/image/logo.svg"
                    alt="Fitness-Sports-Center"
                    className="w-[130px] h-auto"
                />
            </div>

            {/* Nav container */}
            <div className="flex items-center gap-[69px] max-md:gap-4 z-50">

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-[69px] font-bold text-secondary text-lg">
                    <li>
                        <a href="#home" className="hover:text-accent transition-colors duration-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-accent transition-colors duration-200">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-accent transition-colors duration-200">
                            Services
                        </a>
                    </li>
                </ul>

                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="text-2xl p-2 rounded-full text-secondary hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus:outline-none flex items-center justify-center"
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? (
                        <FaSun className="text-accent" /> 
                    ) : (
                        <FaMoon />
                    )}
                </button>

                {/* Contact button */}
                <button
                    onClick={() => window.location.href = "#contact"}
                    className="hidden md:block bg-accent hover:bg-[#b58712] text-text-white font-bold py-3 px-8 rounded-lg shadow-sm transition-colors duration-200 text-lg"
                >
                    Contact Us
                </button>

                {/* Mobile icon */}
                <button
                    className="block md:hidden text-secondary focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

            </div>

            {/* Mobile dropdown men */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-background flex flex-col items-center py-6 gap-6 md:hidden z-100 font-bold text-secondary text-lg shadow-lg border-t border-borderlines/20">
                    <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-accent">
                        Home
                    </a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-accent">
                        About
                    </a>
                    <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-accent">
                        Services
                    </a>
                    <button
                        onClick={() => { window.location.href = "#contact"; setIsOpen(false); }}
                        className="bg-accent hover:bg-[#b58712] text-text-white font-bold py-3 px-8 rounded-lg shadow-sm w-[80%] mt-2"
                    >
                        Contact Us
                    </button>
                </div>
            )}

        </nav>
    );
};

export default NavBar;