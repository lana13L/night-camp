// Import background image and components
import imgHero from '../assets/imgHero.webp';
import StarBg from './StarBg';
import Navbar from './Navbar';
import { ArrowDown } from "lucide-react";

const Home = () => {
  const handleScroll = () => {
    const target = document.getElementById("Footer");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative text-foreground overflow-x-hidden">
      {/* Animated starry background */}
      <StarBg />

      {/* Navigation bar */}
      <Navbar />

      {/* Hero section with full-screen responsive background image */}
      <section
        id="Home"
        className="h-[80vh] md:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${imgHero})` }}
      >
        {/* Centered content container */}
        <div className="relative md:container flex h-full items-center justify-center">
          <div className="mb-15 px-2.5 text-center space-y-4 animate-fade-in">
            {/* Main headline with delayed animation for emphasis */}
            <h1 className="md:text-8xl mb-10 font-bold text-5xl">
              Overnight<br />
              <span className="text-glow opacity-0 animate-fade-in-delay-2 text-primary md:text-8xl text-5xl">
                camp
              </span>
            </h1>

            {/* Subheading with glow and fade-in animation */}
            <p className="lg:text-lg text-sm md:text-xl text-muted-foreground lg:mx-44 opacity-0 animate-fade-in-delay-3">
              Experience the magic of night camping—where cozy tents glow by warm firelight, the stars stretch endlessly above, and every moment invites you to unplug, explore, and reconnect with nature like never before
            </p>

            {/* "Explore" button with animation and anchor link */}
            <a href="#Explore">
              <button className="cursor-pointer cosmic-button opacity-0 animate-fade-in-delay-4 mt-5">
                Explore
              </button>
            </a>
          </div>
        </div>

        {/* Animated "Scroll" indicator at the bottom center */}
        <button
          onClick={handleScroll}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce focus:outline-none"
        >
          <span className="text-sm text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </button>
      </section>
    </div>
  );
};

export default Home;


