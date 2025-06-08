// Importing selected Font Awesome icons from react-icons
import { FaStar, FaBurn, FaBinoculars, FaLeaf } from "react-icons/fa";

// AboutUs component describes the benefits of night camping
const AboutUs = () => {
  // Array of benefit items with associated icons, titles, and descriptions
  const BenefitsList = [
    { icon: <FaBurn />, title: 'Cooler Evening Temperatures', desc: 'Enjoy a comfortable and refreshing atmosphere after the heat of the day' },
    { icon: <FaStar />, title: 'Stargazing Opportunities', desc: 'Gaze at crystal-clear night skies, far from light pollution' },
    { icon: <FaBinoculars />, title: 'Night Wildlife Encounters', desc: 'Spot owls, hear nocturnal creatures, and witness the forest come alive after dark' },
    { icon: <FaLeaf />, title: 'A Peaceful, Tech-Free Environment', desc: 'Disconnect from screens and reconnect with the natural world around you' }
  ];

  return (
    // Main section with id for anchor navigation
    <section id="About">
      <div className="relative lg:container mx-auto flex flex-col items-center justify-center lg:py-20 py-10 px-4">
        {/* Header and description text */}
        <div className="lg:space-y-8 space-y-4 text-center max-w-4xl">
          <h1 className="lg:text-4xl text-3xl font-bold">
            Discover the Magic of the <span className="text-primary text-glow ">Night</span>
          </h1>
          <p className="lg:text-lg text-sm md:text-xl text-muted-foreground">
            Night camping is more than just a stay under the stars—it's an experience that reconnects you with nature's quiet magic. Away from screens and city lights, our night camps offer a chance to slow down, explore the darkened wilderness, and rediscover the simple joy of being outdoors after sunset.
          </p>
        </div>

        {/* Grid layout for listing night camping benefits */}
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
          {BenefitsList.map((item, index) => (
            <li
              key={index}
              className="bg-background rounded-xl p-4 flex flex-col items-center text-center rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(119,103,199,0.3)] transition"
            >
              {/* Icon for each benefit */}
              <p className="text-3xl text-glow text-primary mb-2">
                {item.icon}
              </p>
              {/* Title and description for each benefit */}
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
