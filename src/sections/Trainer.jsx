import React from 'react';

const Trainer = () => {
    return (

        <section id='trainers' className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-15 lg:gap-30 justify-center overflow-hidden relative">



            {/* Content Section */}
            <div className="w-full md:w-[60%] flex flex-col items-start text-left">

                <h2 className=" text-[36px] text-base leading-normal font-bold uppercase text-primary mb-[30px] tracking-wide">
                    Meet Our Trainers
                </h2>


                <p className="text-secondary text-base sm:text-lg md:text-xl leading-relaxed mb-[40px] font-medium tracking-wider">
                    Our professional trainers are passionate about helping you<br />
                    succeed. With years of experience and specialized<br />
                    training methods, they will guide you<br />
                    every step of the way.
                </p>

                <h3 className="text-[26px] text-base leading-normal font-semibold text-primary mb-[30px] tracking-wide">
                    Trainer Qualities:
                </h3>

                {/* Tags */}
                <div className="flex flex-col gap-4 mb-4">
                    <span className="border border-borderlines text-secondary font-bold rounded-[40px] px-3 py-2 text-sm md:text-base hover:bg-secondary hover:text-text-white transition-colors duration-200 tracking-wider">
                        Certified fitness professionals
                    </span>
                    <span className="border border-borderlines text-secondary font-bold rounded-[40px] px-3 py-2 text-sm md:text-base hover:bg-secondary hover:text-text-white transition-colors duration-200 tracking-wider">
                        Personalized coaching
                    </span>
                    <span className="border border-borderlines text-secondary font-bold rounded-[40px] px-3 py-2 text-sm md:text-base hover:bg-secondary hover:text-text-white transition-colors duration-200 tracking-wide">
                        Motivation and accountability
                    </span>

                </div>

            </div>
            {/* Image Section */}
            <div className="w-full md:w-[40%] flex justify-end">
                <img
                    src="https://bsrejqjahgobpcljlgho.supabase.co/storage/v1/object/public/image/trainer.png"
                    alt="Fitness model holding dumbbells"
                    className="w-[340px] h-auto "
                />
            </div>

        </section>
    );
};

export default Trainer;