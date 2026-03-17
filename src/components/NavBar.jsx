import React from 'react';

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-12 py-5 w-full">

            {/* Logo Section */}
            <div className="flex">
                <img
                    src="/logo.svg"
                    alt="Fitness-Sports-Center"
                    className="w-[130px] h-auto object-contain"
                />
            </div>

            {/* Nav container */}
            <div className="flex items-center gap-[69px]">

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
                        <a href="#features" className="hover:text-accent transition-colors duration-200">
                            Features / Services
                        </a>
                    </li>
                </ul>

                {/* Contact Button */}
                <button className="bg-accent hover:bg-[#b58712] text-text-white font-bold py-3 px-8 rounded-lg shadow-sm transition-colors duration-200 text-lg">
                    Contact Us
                </button>

            </div>
        </nav>
    );
};

export default NavBar;