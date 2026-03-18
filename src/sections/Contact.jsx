import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    //  validation errors
    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));


        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: '' }));
        }
    };

    // Validation 
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {

            setErrors(formErrors);
        } else {

            console.log('Form data ready to send:', formData);
            alert('Message sent successfully!');

            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-[36px]  font-black uppercase text-primary mb-[30px] tracking-wide">
                        Start Your Fitness Journey Today
                    </h2>
                    <p className="text-secondary text-[22px] font-medium  text-start mx-auto text-wide ">
                        Have questions about our gym, membership plans, or training programs? Send us a message <br />
                        and our team will get back to you shortly.
                    </p>
                </div>


                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Contact Form */}
                    <div className="w-full lg:w-2/3 border border-borderlines rounded-[40px] p-[52px] bg-white/35">

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            {/* Name */}
                            <div className="flex flex-col ">
                                <label htmlFor="name" className="block text-2xl font-semibold text-secondary mb-4 ">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    className={`w-full bg-[#D9D9D9]/25 border ${errors.name ? 'border-red-500' : 'border-gray-400'} rounded-xl px-5 py-4 text-primary `} />

                                {errors.name && <span className="text-red-500 text-sm mt-2 font-medium">{errors.name}</span>}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label htmlFor="email" className="block text-2xl font-semibold text-secondary mb-4 ">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email"
                                    className={`w-full bg-[#D9D9D9]/25 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded-xl px-5 py-4 text-primary `} />

                                {errors.email && <span className="text-red-500 text-sm mt-2 font-medium">{errors.email}</span>}
                            </div>

                            {/* Message*/}
                            <div className="flex flex-col">
                                <label htmlFor="message" className="block text-2xl font-semibold text-secondary mb-4">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter Your Message"
                                    className={`w-full bg-[#D9D9D9]/25 border ${errors.message ? 'border-red-500' : 'border-gray-400'} rounded-xl px-5 py-4 text-primary `} >
                                </textarea>

                                {errors.message && <span className="text-red-500 text-sm mt-2 font-medium">{errors.message}</span>}
                            </div>

                            {/* Submit Button */}

                            <button
                                type="submit"
                                className="bg-accent hover:bg-[#b58712] text-text-white font-bold text-lg py-3 px-10 rounded-lg w-fit transition-colors duration-200">
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-center gap-12 py-4">


                        <div className="flex items-center gap-6">
                            <FaPhoneAlt className="text-4xl text-primary " />
                            <div>
                                <p className="text-sm text-primary mb-1 font-medium">Phone</p>
                                <p className="text-primary font-medium">+94 XX XXX XXXX</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <MdAttachEmail className="text-4xl text-primary" />
                            <div>
                                <p className="text-sm text-primary mb-1 font-medium">Email</p>
                                <p className="text-primary font-medium">info@fitnessportcenter.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <FaLocationDot className="text-4xl text-primary" />
                            <div>
                                <p className="text-sm text-primary mb-1 font-medium">Location</p>
                                <p className="text-primary font-medium leading-snug">Hikkaduwa, Galle, Sri Lanka</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;