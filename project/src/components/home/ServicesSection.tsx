import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Megaphone, 
  Search, 
  Palette, 
  Camera, 
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CardContainer, CardBody, CardItem } from '../ui/3d-card';

const services = [
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Social Media Marketing',
    description: 'Strategic campaigns that increase engagement, followers, and brand loyalty across all major platforms.',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Search Engine Optimization',
    description: 'Data-driven SEO strategies that improve rankings and drive organic traffic to your website.',
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Digital Branding',
    description: 'Comprehensive branding solutions that communicate your values and connect with your audience.',
    color: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Conceptual Photography',
    description: 'Creative visual storytelling that captures your brand\'s essence and resonates with your audience.',
    color: 'bg-success/10',
    iconColor: 'text-success',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section bg-gray-50" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            What We Do Best
          </span>
          <h2 className="mt-2 mb-4 text-4xl font-bold">Our Premium Services</h2>
          <p className="text-gray-600">
            We combine creative thinking, technical expertise, and strategic planning to deliver 
            exceptional results for brands looking to thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <CardContainer key={index}>
              <CardBody
                className={`card hover:shadow-lg border-t-4 ${service.borderColor}`}
              >
                <div className="p-6">
                  <CardItem
                    translateZ={50}
                    className={`${service.color} ${service.iconColor} p-3 rounded-lg inline-block mb-4`}
                  >
                    {service.icon}
                  </CardItem>
                  
                  <CardItem translateZ={50}>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  </CardItem>
                  
                  <CardItem translateZ={30}>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </CardItem>
                  
                  <CardItem translateZ={40}>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;