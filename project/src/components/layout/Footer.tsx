import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Digital<span className="text-accent">Edge</span></h3>
            <p className="text-gray-300 mb-6">
              Transforming brands with cutting-edge digital strategies that drive growth, 
              engagement, and lasting impact in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Digital Branding
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Conceptual Photography
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Digital Lane, Suite 101<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent mr-3 flex-shrink-0" />
                <a href="mailto:info@digitaledge.com" className="text-gray-300 hover:text-white">
                  info@digitaledge.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DigitalEdge. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;