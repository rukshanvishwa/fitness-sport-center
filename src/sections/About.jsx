import React from 'react';

const About = () => {
    return (
    
        <section id="about" className="py-12 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-30">

            {/* Image Section */}
            <div className="w-full md:w-[40%] flex justify-start">
                <img
                    src="/aboutus.png"
                    alt="Fitness model holding dumbbells"
                    className="w-[310px] h-auto "
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-[60%] flex flex-col items-start text-left">

                <h2 className=" text-[36px] text-base leading-relaxed font-bold uppercase text-primary mb-[30px] tracking-wide">
                    About Our Gym
                </h2>

               
                <p className="text-secondary text-base sm:text-lg md:text-xl leading-relaxed mb-[40px] font-medium">
                    We Are More Than Just A Gym — We Are A Community Built <br />
                    To Support Your Fitness Journey. Our Mission Is To Help People<br />
                    Achieve Their Health And Wellness Goals Through Expert<br/>
                    Guidance, Modern Facilities, And A Motivating Environment.<br/>
                    Whether You're Just Starting Out Or Already An Experienced<br/>
                    Athlete, Our Trainers And Programs Are Designed To Help You<br/>
                    Reach The Next Level.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-4 mb-4">
                    <span className="border border-borderlines text-secondary font-bold rounded-[40px] px-3 py-2 text-sm md:text-base hover:bg-secondary hover:text-white transition-colors duration-200">
                        Modern fitness equipment
                    </span>
                    <span className="border border-borderlines text-secondary font-bold rounded-[40px] px-3 py-2 text-sm md:text-base hover:bg-secondary hover:text-white transition-colors duration-200">
                        Certified professional trainers
                    </span>
                    <span className="border border-borderlines text-secondary font-bold rounded-[40px] px-3 py-2 text-sm md:text-base hover:bg-secondary hover:text-white transition-colors duration-200">
                        Personalized workout guidance
                    </span>
                    <span className="border border-borderlines text-secondary font-bold rounded-[40px] px-3 py-2 text-sm md:text-base hover:bg-secondary hover:text-white transition-colors duration-200">
                        Clean and motivating workout environment
                    </span>
                </div>

            </div>

        </section>
    );
};

export default About;