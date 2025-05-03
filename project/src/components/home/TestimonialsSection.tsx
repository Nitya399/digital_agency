import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Marketing Director, TechCorp',
    image: 'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'DigitalEdge transformed our online presence completely. Their strategic approach to social media marketing increased our engagement by 200% in just three months.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    position: 'CEO, Innovate Startup',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The SEO work done by DigitalEdge helped us achieve first-page rankings for all our key terms. Our organic traffic has increased by 150% year-over-year.',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    position: 'Creative Director, Brand Collective',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'Their conceptual photography captured our brand essence perfectly. The images have been invaluable across all our marketing materials and campaigns.',
    rating: 5,
  },
  {
    name: 'David Chen',
    position: 'Founder, EcoGoods',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'Working with DigitalEdge on our brand refresh was a game-changer. Their holistic approach to digital branding helped us connect with an entirely new audience.',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const prevTestimonial = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: string) => ({
      x: direction === 'right' ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === 'right' ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="section bg-gradient-to-r from-gray-900 to-gray-800 text-white" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Client Testimonials
          </span>
          <h2 className="mt-2 mb-4 text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-gray-300">
            We take pride in delivering exceptional results for our clients. 
            Here's what they have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div className="flex justify-between absolute top-1/2 left-0 right-0 z-10 -mt-6 px-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="relative h-[420px] md:h-[320px]">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-6 flex flex-col md:flex-row items-center gap-8 bg-white/5 backdrop-blur-sm rounded-2xl"
            >
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover rounded-full border-4 border-accent/50" 
                />
              </div>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-500'} fill-current`} 
                    />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-4 text-gray-200">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div>
                  <h4 className="text-lg font-semibold">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-300">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 'right' : 'left');
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-accent' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;