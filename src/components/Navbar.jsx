import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Gallery", href: "#Gallery" },
  { name: "Contact", href: "#Contact" },
];

const Navbar = () => {
  const [ismenuOpen, setismenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const offsets = navItems.map(item => {
        const el = document.querySelector(item.href);
        if (!el) return { id: item.href, top: 0 };
        return { id: item.href, top: el.offsetTop };
      });

      const current = offsets.reduce((acc, section) =>
        scrollPosition >= section.top - 100 ? section : acc
      );

      setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full h-auto z-40 transition-all duration-300 px-10 pb-2 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/5">
      <div className="flex items-center justify-between">
        <div>
          lana<span className="text-glow text-primary text-3xl">teck</span>
        </div>

        {/* Desktop navbar */}
        <ul className="md:flex hidden">
          <li className="space-x-8 text-lg">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className={`transition-colors duration-300 ${
                  activeSection === item.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.name}
              </a>
            ))}
          </li>
        </ul>

        {/* Mobile menu */}
        <ul
          className={`fixed top-0 left-0 w-screen h-screen bg-background/90 md:hidden backdrop-blur-xl z-40 flex items-center justify-center transition-opacity duration-300 ${
            ismenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <li className="space-y-5 text-lg flex flex-col items-center justify-center">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                onClick={() => setismenuOpen(false)}
                className={`transition-colors duration-300 ${
                  activeSection === item.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.name}
              </a>
            ))}
          </li>
        </ul>

        {/* Toggle button */}
        <button className="z-50 md:hidden" onClick={() => setismenuOpen(prev => !prev)}>
          {ismenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
