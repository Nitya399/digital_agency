import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section py-20 overflow-hidden" ref={ref}>
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
          </div>

          <motion.div 
            className="relative z-10 py-16 px-8 md:p-16 flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-white/90 text-lg max-w-xl">
                Let's collaborate to create a digital strategy that will elevate your brand, 
                engage your audience, and drive meaningful results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.2 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.2 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;