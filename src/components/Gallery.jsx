// React and Keen Slider imports
import { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Import gallery images
import im1 from "../assets/galery/im1.webp";
import im2 from "../assets/galery/im2.webp";
import im3 from "../assets/galery/im3.webp";
import im4 from "../assets/galery/im4.webp";
import im5 from "../assets/galery/im5.webp";
import im6 from "../assets/galery/im6.webp";
import im7 from "../assets/galery/im7.webp";
import im8 from "../assets/galery/im8.webp";

// Store all images in an array for easy mapping
const images = [im1, im2, im3, im4, im5, im6, im7, im8];

const Gallery = () => {
  const sliderRef = useRef(null); // Ref to control the slider instance
  const [pause, setPause] = useState(false); // Controls autoplay pause on hover

  // Initialize Keen slider with options and breakpoints
  const [sliderContainerRef] = useKeenSlider({
    loop: true, // Infinite loop
    renderMode: "performance", // Improves slider rendering performance
    slides: {
      perView: 3, // Show 3 slides at once on large screens
      spacing: 16, // Spacing between slides
    },
    drag: true, // Enable swipe/drag interaction
    created(instance) {
      sliderRef.current = instance; // Save the slider instance
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 12 }, // Medium screen config
      },
      "(max-width: 710px)": {
        slides: { perView: 1, spacing: 8 }, // Small screen config
      },
    },
  });

  // Autoplay effect using interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause && sliderRef.current) {
        sliderRef.current.next(); // Advance to the next slide
      }
    }, 3000); // 3-second delay
    return () => clearInterval(interval); // Cleanup on unmount
  }, [pause]);

  return (
    <section
      id="Gallery"
      className="lg:container px-3 py-10 lg:py-20"
      onMouseEnter={() => setPause(true)} // Pause autoplay on hover
      onMouseLeave={() => setPause(false)} // Resume autoplay on leave
    >
      {/* Section heading */}
      <div className="mb-16 px-2.5 text-center">
        <h4 className="text-xl mb-3 md:text-4xl text-5xl">
          Welcome to Our Gallery
        </h4>
        <p className="lg:text-lg text-sm md:text-xl lg:mx-44">
          Discover the beauty of camping after dark—glowing campfires, starry
          skies, and cozy moments that make every night unforgettable.
        </p>
      </div>

      {/* Keen Slider container */}
      <div ref={sliderContainerRef} className="keen-slider" aria-label="Image Gallery Carousel">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide">
            {/* Slide image with styling */}
            <img
              loading="lazy"
              src={src}
              alt={`Camping photo ${idx + 1}`}
              className="rounded-xl w-full h-80 object-cover shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
