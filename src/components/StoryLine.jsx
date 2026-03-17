import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const StoryLine = () => {
    return (

        <div className="bg-accent py-4 overflow-hidden whitespace-nowrap flex items-center w-full">

            <style>
                {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: scroll-left 65s linear infinite;
          }
          /* Pause the animation when the user hovers over it (optional, but a nice touch!) */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
            </style>

            {/* scrolling container */}
            <div className="flex w-max animate-marquee text-text-white font-extrabold tracking-widest text-[26px] md:text-xl">


                <div className="flex items-center">

                    <span className="mx-8 flex items-center gap-3">
                        <FaRegStar className="text-text-white" />
                        Start your fitness journey today and become the strongest version of yourself.
                    </span>

                    <span className="mx-8 flex items-center gap-3">
                        <FaRegStar className="text-text-white" />
                        Start your fitness journey today and become the strongest version of yourself.
                    </span>

                    <span className="mx-8 flex items-center gap-3">
                        <FaRegStar className="text-text-white" />
                        Start your fitness journey today and become the strongest version of yourself.
                    </span>
                </div>


                <div className="flex items-center">

                    <span className="mx-8 flex items-center gap-3">
                        <FaRegStar className="text-text-white" />
                        Start your fitness journey today and become the strongest version of yourself.
                    </span>

                    <span className="mx-8 flex items-center gap-3">
                        <FaRegStar className="text-text-white" />
                        Start your fitness journey today and become the strongest version of yourself.
                    </span>

                    <span className="mx-8 flex items-center gap-3">
                        <FaRegStar className="text-text-white" />
                        Start your fitness journey today and become the strongest version of yourself.
                    </span>
                </div>

            </div>
        </div>
    );
};

export default StoryLine;