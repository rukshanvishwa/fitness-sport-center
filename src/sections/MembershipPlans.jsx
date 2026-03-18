import React from 'react';
import { FaCheckSquare } from "react-icons/fa";

const plansData = [

    {
        id: 1,
        name: "Basic Membership",
        price: "RS 4500",
        description: "Start your fitness journey with essential access to everything you need to build a strong foundation.",
        features: [
            "Full access to gym equipment",
            "Access To Cardio & Strength Training Areas",
            "Locker Room & Shower Facilities",
            "1 Free Fitness Assessment",
            "Basic Workout Guidance"
        ]
    },
    {
        id: 2,
        name: "Pro Membership",
        price: "RS 6500",
        description: "Take Your Fitness To The Next Level With Structured Training And Group Motivation.",
        features: [
            "Everything In Basic Plan",
            "Access To Group Fitness Classes (HIIT, Cardio, Functional Training)",
            "Personalized Workout Plan",
            "Monthly Fitness Assessment",
            "Priority Support From Trainers"
        ]
    },
    {
        id: 3,
        name: "Elite Membership",
        price: "RS 9000",
        description: "Unlock Your Full Potential With Complete Access, Expert Coaching, And Premium Support.",
        features: [
            "Everything In Pro Plan",
            "Personal Training Sessions",
            "Customized Nutrition Plan",
            "Unlimited Group Classes",
            "Priority Booking For Sessions",
            "Dedicated Fitness Coach",
            "Advanced Progress Tracking"
        ]
    }
];

const MembershipPlans = () => {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto ">

                {/* Headers */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-black mb-6 tracking-wide">
                        Flexible Membership Plans
                    </h2>
                    <p className="text-secondary text-lg md:text-xl font-medium max-w-3xl mx-auto">
                        Choose A Membership Plan That Fits Your Lifestyle And Fitness Goals.
                    </p>
                </div>

                {/* Pric Card*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {plansData.map((plan) => (
                        <div
                            key={plan.id}
                            className="bg-secondary text-text-white rounded-[40px] p-8 md:p-10 flex flex-col"
                        >

                            {/* Card Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-2xl text-text-white font-medium mb-4 tracking-wide">
                                    {plan.name}
                                </h3>
                                <div className="text-2xl md:text-3xl font-bold mb-6">
                                    {plan.price}<span className="text-lg md:text-xl font-normal text-gray-300">/Month</span>
                                </div>
                                <p className="text-sm md:text-base text-text-white leading-relaxed min-h-[80px]">
                                    {plan.description}
                                </p>
                            </div>

                          {/* Features section */}  
                            <ul className="flex-grow flex flex-col gap-5 mb-10">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">


                                        <FaCheckSquare className="w-6 h-6 text-[#D49E15] flex-shrink-0 mt-[2px]"
                                            fill="currentColor" />

                                        <span className="text-text-white text-sm md:text-base leading-snug">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Get Start Button */}
                            <button className="bg-accent hover:bg-[#b58712] text-white font-bold text-lg py-3 px-8 rounded-lg transition-colors duration-200 w-fit mx-auto">
                                Get Started
                            </button>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default MembershipPlans;