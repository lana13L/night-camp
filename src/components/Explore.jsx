// React hooks and Keen Slider carousel import
import { useRef, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Importing local images used in the gallery
import im1 from "../assets/galery/Explore/35947.webp";
import im3 from "../assets/galery/Explore/55863.webp";
import im4 from "../assets/galery/Explore/2148182823.webp";
import im5 from "../assets/galery/Explore/2148456478.webp";
import im2 from "../assets/galery/Explore/2149212357.webp";

// List of image objects with associated titles
const images = [
  {
    src: im2,
    title: "Riverside Camp - Camp by the gentle river, fall asleep to the sound of flowing water.",
  },
  {
    src: im1,
    title: "Forest Hideout - Nestled deep among the pines—secluded, quiet, perfect for stargazing.",
  },
  {
    src: im3,
    title: "Hilltop Viewpoint - Wake up to panoramic views and golden sunrise moments.",
  },
  {
    src: im4,
    title: "Group Fire Circle - Designed for groups—includes large firepit and seating logs.",
  },
  {
    src: im5,
    title: "Solo Retreat Corner - A peaceful, shaded area ideal for reflection and solitude.",
  },
];

const Explore = () => {
  // Ref to access the Keen slider instance
  const sliderRef = useRef(null);
  const [pause, setPause] = useState(false); // Controls autoplay pause on hover

  // Initialize Keen Slider with responsive options
  const [sliderContainerRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 3,
      spacing: 16,
    },
    drag: true,
    created(instance) {
      sliderRef.current = instance;
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 710px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  // Autoplay functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause && sliderRef.current) {
        sliderRef.current.next(); // Move to next slide
      }
    }, 4000); // Slide change interval
    return () => clearInterval(interval); // Cleanup
  }, [pause]);

  return (
    // Section wrapper with padding and container styles
    <section id="Explore" className="lg:container px-3 py-10 lg:py-20">
      <div className="md:mb-8 mb-3 md:w-[700px] px-2.5 md:text-start">
        {/* Title and subtitle section */}
        <h4 className="text-xl md:mb-5 mb-3 md:text-4xl  text-primary text-glow text-5xl ">
          Choose Your Perfect Camping Spot
        </h4>
        <p className="text-xl  md:text-lg text-xs">
          Venture across vast landscapes and uncover hidden wonders as you journey through the land,
          seeking the perfect place to call your own peaceful sanctuary
        </p>
      </div>

      {/* Carousel wrapper with hover pause handlers */}
      <div
        className="relative"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {/* Slider container initialized by Keen */}
        <div ref={sliderContainerRef} className="keen-slider" aria-label="Image Gallery Carousel">
          {images.map(({ src, title }, idx) => (
            <div key={idx} className="keen-slider__slide">
              {/* Image card with hover zoom effect */}
              <div className="p-2 w-auto group h-80 rounded-xl overflow-hidden">
                <img
                  loading="lazy"
                  src={src}
                  alt={title}
                  title={title}
                  className=" w-full h-full object-cover rounded-xl transition-all duration-500 ease-in-out z-10 group-hover:scale-110"
                />
              </div>

              {/* Overlay with title and description */}
              <div className="text-start flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 p-1">
                <div className="backdrop-blur-[4px] rounded-lg">
                  <h4 className="text-glow font-bold text-xl mb-0.5">{title.split(" - ")[0]}</h4>
                  <p className="text-sm">{title.split(" - ")[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;


