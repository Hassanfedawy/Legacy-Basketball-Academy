"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

const galleryItems = [
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
  { type: 'video', src: '/Videos/IMG_5052.MOV' },
  { type: 'video', src: '/Videos/IMG_5056.MOV' },
  { type: 'video', src: '/Videos/IMG_5052.MOV' },
  { type: 'video', src: '/Videos/IMG_5056.MOV' },
  { type: 'video', src: '/Videos/IMG_5052.MOV' },
  { type: 'video', src: '/Videos/IMG_5056.MOV' },
  { type: 'video', src: '/Videos/IMG_5052.MOV' },
  { type: 'video', src: '/Videos/IMG_5056.MOV' },
  { type: 'video', src: '/Videos/IMG_5052.MOV' },
  { type: 'video', src: '/Videos/IMG_5056.MOV' },
  { type: 'video', src: '/Videos/IMG_5052.MOV' },
  { type: 'video', src: '/Videos/IMG_5056.MOV' },
  { type: 'video', src: '/Videos/IMG_5052.MOV' },
  { type: 'video', src: '/Videos/IMG_5056.MOV' },
  // Add more items as needed
];

const itemsPerSlide = 10; // Number of items per grid

const GalleryPage = () => {
  const groupedItems = [];
  
  for (let i = 0; i < galleryItems.length; i += itemsPerSlide) {
    groupedItems.push(galleryItems.slice(i, i + itemsPerSlide));
  }

  return (
    <section id='Gallery'
      className="relative h-screen bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <Carousel 
        autoPlay
        infiniteLoop
        interval={3000} 
        transitionTime={500} 
        showArrows={true}
        showThumbs={false}
      >`
        {groupedItems.map((group, index) => (
          <div key={index} className="grid grid-cols-5 gap-2 p-4 h-[500px]">
            {group.map((item, subIndex) => (
              <div key={`${index}-${subIndex}`} className="relative w-full h-[200px]">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={`Gallery Image ${subIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    className="absolute inset-0 w-full h-full object-contain"
                    src={item.src}
                    autoPlay
                    loop
                    muted
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
