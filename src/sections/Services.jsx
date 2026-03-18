import React from 'react';

const servicesData = [
  {
    id: 1,
    title: "Personal Training",
    description: "Work one-on-one with certified trainers who design personalized workout plans tailored to your goals",
    image: "/service/personal.jpg" 
  },
  {
    id: 2,
    title: "Strength Training",
    description: "Build muscle, improve endurance, and increase your overall strength using professional gym equipment.",
    image: "/service/strength.jpg"
  },
  {
    id: 3,
    title: "Group Fitness Classes",
    description: "Stay motivated with high-energy group sessions including HIIT, cardio training, and functional workouts.",
    image: "/service/groupfit.jpg"
  },
  {
    id: 4,
    title: "Nutrition Guidance",
    description: "Achieve better results with expert advice on diet and nutrition to complement your training program.",
    image: "/service/nutrition.jpg"
  },
  {
    id: 5,
    title: "Cardio Training",
    description: "Improve heart health and burn calories with our advanced cardio machines.",
    image: "/service/cardio.jpg"
  },
  {
    id: 6,
    title: "Fitness Assessments",
    description: "Track your progress and get expert feedback to improve your performance.",
    image: "/service/fitnessass.jpg"
  }
];

const Services = () => {
  return (
    <section id="features" className="py-16 px-6 mb-[10px]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[36px] font-bold text-center text-primary mb-12 tracking-wide uppercase">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {servicesData.map((service) => (
      
            <div 
              key={service.id} 
              className="relative rounded-[20px] overflow-hidden h-[400px] md:h-[450px] group cursor-pointer"
            >
              
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent/10"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                <h3 className="text-[26px] font-bold text-text-white mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-text-white text-sm md:text-base leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;