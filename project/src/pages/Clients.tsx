import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const clientLogos = [
  {
    name: 'TechCorp',
    logo: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-blue-500',
  },
  {
    name: 'Innovate',
    logo: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-green-500',
  },
  {
    name: 'Brand Collective',
    logo: 'https://images.pexels.com/photos/2977549/pexels-photo-2977549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-purple-500',
  },
  {
    name: 'EcoGoods',
    logo: 'https://images.pexels.com/photos/2977551/pexels-photo-2977551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-yellow-500',
  },
  {
    name: 'FinStack',
    logo: 'https://images.pexels.com/photos/2977553/pexels-photo-2977553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-red-500',
  },
  {
    name: 'HealthPlus',
    logo: 'https://images.pexels.com/photos/2977555/pexels-photo-2977555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-indigo-500',
  },
  {
    name: 'Travel Now',
    logo: 'https://images.pexels.com/photos/2977557/pexels-photo-2977557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-pink-500',
  },
  {
    name: 'FoodDelight',
    logo: 'https://images.pexels.com/photos/2977559/pexels-photo-2977559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-orange-500',
  },
];

const row1Logos = [...clientLogos, ...clientLogos];
const row2Logos = [...clientLogos.reverse(), ...clientLogos.reverse()];

const caseStudies = [
  {
    title: 'TechCorp Rebranding',
    category: 'Digital Branding',
    description: 'A complete digital transformation for this leading tech company, resulting in a 40% increase in brand recognition.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      '40% increase in brand recognition',
      '65% increase in social media engagement',
      '52% increase in website traffic',
    ],
  },
  {
    title: 'EcoGoods SEO Campaign',
    category: 'Search Engine Optimization',
    description: 'Strategic SEO implementation that propelled this eco-friendly retailer to first-page rankings for key search terms.',
    image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      '150% increase in organic traffic',
      '75% increase in online sales',
      'First-page rankings for 30+ key terms',
    ],
  },
  {
    title: 'FinStack Social Media Strategy',
    category: 'Social Media Marketing',
    description: 'A comprehensive social strategy that positioned this fintech startup as an industry thought leader.',
    image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      '200% growth in social following',
      '180% increase in engagement rates',
      '35% higher lead generation from social channels',
    ],
  },
];

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

const ClientsPage = () => {
  const logoRef = useRef(null);
  const caseStudyRef = useRef(null);
  const testimonialRef = useRef(null);
  
  const areLogosInView = useInView(logoRef, { once: true, amount: 0.2 });
  const areCaseStudiesInView = useInView(caseStudyRef, { once: true, amount: 0.2 });
  const areTestimonialsInView = useInView(testimonialRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-32 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Clients
          </motion.h1>
          <motion.p 
            className="text-white/90 text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We've had the privilege of working with amazing brands across various industries. 
            Explore our success stories and client experiences.
          </motion.p>
        </div>
      </div>

      {/* Client Logos */}
      <div className="py-20 px-4 bg-white overflow-hidden" ref={logoRef}>
        <div className="container mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            animate={areLogosInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Leading Brands
          </motion.h2>

          {/* First Row - Left to Right */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left">
                {row1Logos.map((client, index) => (
                  <motion.div
                    key={`row1-${index}`}
                    className={`flex-none w-48 h-48 m-4 rounded-xl ${client.color} bg-opacity-10 p-6 backdrop-blur-sm 
                              transform transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative mt-8">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-right">
                {row2Logos.map((client, index) => (
                  <motion.div
                    key={`row2-${index}`}
                    className={`flex-none w-48 h-48 m-4 rounded-xl ${client.color} bg-opacity-10 p-6 backdrop-blur-sm 
                              transform transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="py-20 px-4 bg-gray-50" ref={caseStudyRef}>
          <div className="container mx-auto">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={areCaseStudiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-gray-600">
                Explore how we've helped our clients overcome challenges, achieve their business goals, 
                and create meaningful connections with their audiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={areCaseStudiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-primary mb-2">{study.category}</div>
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20 px-4 bg-white" ref={testimonialRef}>
          <div className="container mx-auto">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={areTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h2>
              <p className="text-gray-600">
                Hear directly from our clients about their experiences working with our team 
                and the results we've delivered for their businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  animate={areTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover" 
                    />
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 bg-primary text-white">
          <div className="container mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Join Our Success Stories?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's discuss how we can help your brand achieve exceptional results in the digital landscape.
            </motion.p>
            <motion.a 
              href="/contact" 
              className="btn bg-white text-primary hover:bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsPage;