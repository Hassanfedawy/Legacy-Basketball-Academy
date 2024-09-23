import Link from "next/link";
function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="Home" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Videos/img 5052.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark overlay to make text stand out */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1
          className="text-4xl md:text-6xl font-bold"
          
          
        >
          Train Like a Champion
        </h1>

        <p
          className="mt-4 text-lg md:text-xl text-secondary-text"
        
        >
          Achieve your fitness goals and dominate the court!
        </p>

        <div  className="mt-8">
          <Link
            href="#Home"
            className="bg-button-bg text-black py-3 px-6 rounded-md shadow-md hover:bg-button-hover transition duration-300"
  >  Join Now</Link>
  
          <Link
            href="#Programs"
            className="ml-4 bg-transparent border border-white py-3 px-6 rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
