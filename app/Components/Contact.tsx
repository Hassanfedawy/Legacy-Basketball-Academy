"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faTwitter,faTiktok } from "@fortawesome/free-brands-svg-icons";

// Helper to detect scroll into view
const useInView = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

const ContactPage = () => {
  const formRef = React.useRef<HTMLDivElement>(null);
  const addressRef = React.useRef<HTMLDivElement>(null);
  const socialRef = React.useRef<HTMLDivElement>(null);

  const formAnimation = useAnimation();
  const addressAnimation = useAnimation();
  const socialAnimation = useAnimation();

  const formInView = useInView(formRef);
  const addressInView = useInView(addressRef);
  const socialInView = useInView(socialRef);

  // Trigger animations when in view
  useEffect(() => {
    if (formInView) formAnimation.start({ opacity: 1, y: 0 });
    if (addressInView) addressAnimation.start({ opacity: 1, x: 0 });
    if (socialInView) socialAnimation.start({ opacity: 1, scale: 1 });
  }, [formInView, addressInView, socialInView, formAnimation, addressAnimation, socialAnimation]);

  const fadeUp = { opacity: 0, y: 50 };
  const fadeLeft = { opacity: 0, x: -50 };
  const scaleDown = { opacity: 0, scale: 0.8 };

  return (
    <div id="Contact" className="container mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Contact Us
      </motion.h1>

      {/* Contact Form Section */}
      <motion.section
        ref={formRef}
        className="mb-12 bg-white p-8 rounded-lg shadow-md"
        initial={fadeUp}
        animate={formAnimation}
        transition={{ duration: 0.5,delay:0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={4}
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Address Section */}
      <motion.section
        ref={addressRef}
        className="mb-12 p-8 bg-gray-100 rounded-lg shadow-md"
        initial={fadeLeft}
        animate={addressAnimation}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
        <p className="text-gray-700">
          123 Fitness Lane, Sports City, Cairo, Egypt
        </p>
        <p className="text-gray-700">Phone: +20 123 456 789</p>
        <p className="text-gray-700">Email: contact@fitnessacademy.com</p>
      </motion.section>

      {/* Social Media Links Section */}
<motion.section
  ref={socialRef}
  className="mb-12"
  initial={scaleDown}
  animate={socialAnimation}
  transition={{ duration: 0.9 }}
>
  <h2 className="text-2xl font-semibold mb-4 text-center">Follow Us</h2>
  <div className="flex justify-center space-x-6">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} size="3x" />
            </a>
  </div>
</motion.section>

    </div>
  );
};

export default ContactPage;
