import React from 'react';

import { FaFacebook, } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-borderlines text-text-white pt-2 pb-3 px-6 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">

        
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 pb-12">

                    
                    <div className="flex flex-col max-w-xs lg:max-w-sm">
               
                        <img
                            src="https://bsrejqjahgobpcljlgho.supabase.co/storage/v1/object/public/image/logo.svg"
                            alt="Fitness Sports Center Logo"
                            className="w-[130px] h-auto object-contain mb-6"
                        />
                        <p className="text-text-white text-[18px] font-medium tracking-widest leading-relaxed">
                            Empowering people to <br />
                            live healthier, stronger <br />
                             lives through fitness.
                        </p>
                    </div>

                    
                    <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 lg:gap-32 justify-end pt-30">

                        {/* sectionlinks */}
                        <div className="flex flex-col gap-4 ">
                            <a href="#home" className="text-text-white font-bold uppercase tracking-wide hover:text-accent transition-colors duration-200">
                                Home
                            </a>
                            <a href="#services" className="text-text-white font-bold uppercase tracking-wide hover:text-accent transition-colors duration-200">
                                Services
                            </a>
                            <a href="#trainers" className="text-text-white font-bold uppercase tracking-wide hover:text-accent transition-colors duration-200">
                                Trainers
                            </a>
                            <a href="#membership" className="text-text-white font-bold uppercase tracking-wide hover:text-accent transition-colors duration-200">
                                Membership
                            </a>
                            <a href="#contact" className="text-text-white font-bold uppercase tracking-wide hover:text-accent transition-colors duration-200">
                                Contact Us
                            </a>
                        </div>

                        {/* Social media icons */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-text-white font-bold uppercase tracking-wide">
                                Follow Us On
                            </h3>
                            <div className="flex items-center gap-5">
                                <a href="#" aria-label="Facebook" className="text-text-white hover:text-accent transition-colors duration-200">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#" aria-label="Instagram" className="text-text-white hover:text-accent transition-colors duration-200">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#" aria-label="YouTube" className="text-text-white hover:text-accent transition-colors duration-200">
                                    <FaYoutube className="text-3xl" />
                                </a>
                                <a href="#" aria-label="TikTok" className="text-text-white hover:text-accent transition-colors duration-200">
                                    <FaTiktok className="text-3xl" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-6 ">
                    <p className="text-text-white text-[12px] font-medium tracking-wider mb-2">
                        © 2026 FITNESSSPORTCENTER. ALL RIGHTS RESERVED.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;