"use client"
import React from 'react';
import { motion } from 'framer-motion';

const trainers = [
  {
    name: 'Atef',
    specialization: 'Basketball Training',
    experience: '10+ years of experience in basketball coaching, focusing on skill development and teamwork.',
    description: 'Atef combines his competitive background with a passion for nurturing young talent. He believes that every player can reach their full potential through dedication and the right guidance.',
    image: '/images/atef.jpg', // Replace with the actual image path
  },
  {
    name: 'Hamza',
    specialization: 'Fitness Coach',
    experience: '7+ years of experience in personal training and group fitness.',
    description: 'Hamza’s approach focuses on holistic fitness, incorporating strength training, flexibility, and endurance. His goal is to help clients achieve a balanced and sustainable lifestyle.',
    image: '/images/hamza.jpg', // Replace with the actual image path
  },
  {
    name: 'Alhassan',
    specialization: 'Fitness Coach',
    experience: '5+ years of experience in fitness coaching, specializing in strength and conditioning.',
    description: 'Alhassan is dedicated to empowering individuals through customized fitness plans that promote strength, confidence, and overall health.',
    image: '/images/alhassan.jpg', // Replace with the actual image path
  },
];

const TrainersPage = () => {
  return (
    <div id="Trainers" className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Meet Our Trainers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
          >
            <div className="relative">
              <img src={trainer.image} alt={trainer.name} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <h3 className="text-xl text-white font-semibold">{trainer.name}</h3>
                <p className="text-gray-300">{trainer.specialization}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-2"><strong>Experience:</strong> {trainer.experience}</p>
              <p className="text-gray-700">{trainer.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrainersPage;
