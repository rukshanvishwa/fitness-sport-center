import React from 'react';

const Hero = () => {
    return (

        <section id='home' className="min-h-[60vh] flex items-center py-12 md:py-8 relative overflow-hidden px-6 ">


            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-5">

                {/* Content Section */}
                <div className="w-full md:w-[60%] lg:w-[70%] flex flex-col items-start z-10 text-left gap-5">

                    {/* Heading and Subheading */}
                    <h1 className="text-4xl lg:text-[66px] font-extrabold uppercase text-primary leading-relaxed tracking-normal">
                        Transform Your Body.<br />
                        Transform Your Life.
                    </h1>

                    <p className="text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-8 font-medium">
                        Join a community dedicated to strength, <br />
                        health, and confidence. Our modern gym offers <br />
                        professional trainers, powerful equipment, <br />
                        and programs designed for every fitness level.
                    </p>

                    <button className="bg-accent hover:bg-[#b58712] text-white font-bold text-base md:text-lg py-3 px-8 md:px-10 rounded-lg transition-colors duration-300 w-full sm:w-auto">
                        Join Now
                    </button>
                </div>

                {/* Image Section */}

                <div className="w-full md:w-[40%] lg:w-[30%] flex justify-center md:justify-end z-10 mt-8 md:mt-0">

                    <img
                        src="https://bsrejqjahgobpcljlgho.supabase.co/storage/v1/object/public/image/hero.png"
                        alt="hero-image"
                        className="w-[80%] sm:w-[70%] md:w-full h-auto object-cover scale-140 md:scale-[1.6]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;