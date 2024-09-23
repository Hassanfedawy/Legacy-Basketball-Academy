"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

type GalleryItem = {
  type: 'image' | 'video';
  src: string;
};

const galleryItems: GalleryItem[] = [
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  { type: 'image', src: '/Photos/photo1.jpg' },
  // Add more items as needed
];

const itemsPerSlide = 10; // Number of items per grid

const GalleryPage = () => {
  const groupedItems = [];
  for (let i = 0; i < galleryItems.length; i += itemsPerSlide) {
    groupedItems.push(galleryItems.slice(i, i + itemsPerSlide));
  }

  // Array of refs to handle multiple video elements
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            if (video && video.dataset.src) {
              video.src = video.dataset.src;
              video.load();
            }
            observer.unobserve(video); // Stop observing once video is loaded
          }
        });
      });

      videoRefs.current.forEach((video) => {
        if (video) {
          observer.observe(video);
        }
      });

      return () => {
        videoRefs.current.forEach((video) => {
          if (video) observer.unobserve(video);
        });
      };
    }
  }, [groupedItems]); // Depend on groupedItems since videos might change per slide

  return (
    <section id="Gallery" className="relative h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={500}
        showArrows={true}
        showThumbs={false}
      >
        {groupedItems.map((group, index) => (
          // Wrap each slide in a single parent div to avoid the error
          <div key={index} className="grid grid-cols-5 gap-2 p-4 h-[500px]">
            {group.map((item, subIndex) => (
              <div key={`${index}-${subIndex}`} className="relative w-full h-[200px]">
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    loading="lazy"
                    alt={`Gallery Image ${subIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    ref={(el) => {
                      videoRefs.current[subIndex] = el; // Set ref for each video
                    }}
                    className="absolute inset-0 w-full h-full object-contain"
                    data-src={item.src} // Use data-src for lazy loading
                    autoPlay
                    loop
                    muted
                    preload="none"
                    playsInline
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default GalleryPage;
