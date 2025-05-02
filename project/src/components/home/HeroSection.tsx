import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const stats = [
    { number: 250, suffix: '+', label: 'Projects Completed' },
    { number: 95, suffix: '%', label: 'Client Satisfaction' },
    { number: 15, suffix: '+', label: 'Industry Awards' },
    { number: 8, suffix: '+', label: 'Years of Experience' },
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Lamp Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-[100px] animate-pulse" />
        </div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 backdrop-blur-sm" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="inline-block mb-3 px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold backdrop-blur-sm">
            Digital Solutions for Modern Brands
          </motion.span>

          <motion.h1 variants={itemVariants} className="text-white mb-6">
            Transform Your <span className="text-gradient">Digital Presence</span> With Strategic Solutions
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-200 text-xl mb-8 max-w-2xl">
            We craft digital experiences that drive engagement, boost visibility, and deliver real results for forward-thinking brands.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn bg-primary hover:bg-primary-dark text-white">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Explore Services
            </Link>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <p className="text-3xl font-bold text-white mb-1">
                  {inView ? (
                    <CountUp end={stat.number} duration={3} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute top-20 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
      />
    </div>
  );
};

export default HeroSection;