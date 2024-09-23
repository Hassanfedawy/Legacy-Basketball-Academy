"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ProgramsPage = () => {
  const programs = [
    {
      title: "Basketball Program",
      ageRange: "Ages 6 and up",
      description: "Join our specialized basketball training sessions focusing on skills development, teamwork, and game strategies. Our program is designed to elevate players to their highest potential, regardless of skill level.",
      price: "1500 EGP",
      details: [
        "Individual skill assessments.",
        "Weekly training sessions with certified coaches.",
        "Monthly scrimmages to apply skills in real-game scenarios.",
        "End-of-season tournament for all participants."
      ],
    },
    {
      title: "Fitness Program",
      ageRange: "Ages 6 and up",
      description: "Our fitness program includes personalized training plans to improve strength, endurance, and overall fitness. We cater to all fitness levels, ensuring each participant gets the attention they need.",
      price: "1200 EGP",
      details: [
        "Customized workout plans tailored to individual goals.",
        "Nutritional guidance and wellness workshops.",
        "Regular fitness assessments to track progress.",
        "Group classes for motivation and community support."
      ],
    },
    {
      title: "Basketball & Fitness Program",
      ageRange: "Ages 6 and up",
      description: "A combined program that offers the best of both basketball and fitness training for a well-rounded athletic experience. Perfect for those looking to enhance their skills on the court while building overall fitness.",
      price: "2500 EGP",
      details: [
        "Dual training sessions combining basketball skills and fitness.",
        "Access to all fitness classes and basketball sessions.",
        "Weekly progress check-ins with trainers.",
        "Fun team-building activities and events."
      ],
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="Programs" className="container mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        Our Programs
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>
            <p className="text-gray-600 mb-2">{program.ageRange}</p>
            <p className="mb-4">{program.description}</p>
            <p className="text-lg font-bold">Price: {program.price}</p>
            <h3 className="font-semibold mt-4">Program Details:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {program.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold">Special Offer!</h3>
        <p className="text-lg">🎉 Get a <span className="font-bold text-red-500">40% discount</span> for the first 20 players until <strong>30/9</strong>! 🎉</p>
        <p className="text-gray-600">Hurry up and secure your spot!</p>
      </motion.div>
    </div>
  );
};

export default ProgramsPage;
