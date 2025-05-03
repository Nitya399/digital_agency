import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Story', path: '/our-story' },
  { name: 'Services', path: '/services' },
  { name: 'Clients', path: '/clients' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
              Digital<span className="text-accent">Edge</span>
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
              } ${location.pathname === link.path ? 'font-bold' : 'font-medium'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  className="absolute h-1 bg-accent bottom-0 left-0 right-0 -mb-2"
                  layoutId="navIndicator"
                  initial={false}
                />
              )}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`btn ${scrolled ? 'btn-primary' : 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white'}`}
          >
            Get a Quote <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-md ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4"
        >
          <div className="container flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`p-2 rounded-md ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="btn btn-primary mt-2"
            >
              Get a Quote <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;