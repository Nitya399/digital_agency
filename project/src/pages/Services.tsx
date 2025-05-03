import { motion } from 'framer-motion';
import { Megaphone, Search, Palette, Camera, Zap, BarChart, Layers, Globe } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';

const services = [
  {
    icon: <Megaphone className="w-12 h-12" />,
    title: 'Social Media Marketing',
    description: 'Strategic campaigns that increase engagement, followers, and brand loyalty across all major platforms.',
    features: [
      'Platform-specific strategy development',
      'Content creation and curation',
      'Community management and engagement',
      'Performance tracking and analytics',
      'Paid social media advertising',
    ],
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    borderColor: 'border-primary',
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: 'Search Engine Optimization',
    description: 'Data-driven SEO strategies that improve rankings and drive organic traffic to your website.',
    features: [
      'Keyword research and optimization',
      'On-page and off-page SEO',
      'Technical SEO improvements',
      'Content optimization',
      'Ranking and traffic monitoring',
    ],
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
    borderColor: 'border-secondary',
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: 'Digital Branding',
    description: 'Comprehensive branding solutions that communicate your values and connect with your audience.',
    features: [
      'Brand identity development',
      'Visual design systems',
      'Brand voice and messaging',
      'Brand guidelines creation',
      'Brand experience strategy',
    ],
    color: 'bg-accent/10',
    iconColor: 'text-accent',
    borderColor: 'border-accent',
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: 'Conceptual Photography',
    description: 'Creative visual storytelling that captures your brand\'s essence and resonates with your audience.',
    features: [
      'Brand photoshoots',
      'Product photography',
      'Lifestyle and campaign shoots',
      'Post-processing and editing',
      'Image library management',
    ],
    color: 'bg-success/10',
    iconColor: 'text-success',
    borderColor: 'border-success',
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Email Marketing',
    description: 'Targeted email campaigns that nurture leads, build relationships, and drive conversions.',
    features: [
      'Campaign strategy and planning',
      'Email design and copywriting',
      'Automation and workflow creation',
      'A/B testing and optimization',
      'Performance analysis and reporting',
    ],
    color: 'bg-warning/10',
    iconColor: 'text-warning',
    borderColor: 'border-warning',
  },
  {
    icon: <BarChart className="w-12 h-12" />,
    title: 'Analytics & Reporting',
    description: 'Comprehensive data analysis that provides insights to optimize your digital marketing efforts.',
    features: [
      'Custom dashboard creation',
      'KPI tracking and monitoring',
      'Performance reporting',
      'Competitive analysis',
      'Strategic recommendations',
    ],
    color: 'bg-error/10',
    iconColor: 'text-error',
    borderColor: 'border-error',
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: 'Content Marketing',
    description: 'Compelling content strategies that establish authority, drive engagement, and nurture leads.',
    features: [
      'Content strategy development',
      'Blog and article creation',
      'Infographics and visual content',
      'Video content production',
      'Content distribution planning',
    ],
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    borderColor: 'border-primary',
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Web Design & Development',
    description: 'Custom website solutions that provide exceptional user experiences and drive business results.',
    features: [
      'UI/UX design',
      'Responsive website development',
      'E-commerce solutions',
      'Landing page optimization',
      'Website maintenance and support',
    ],
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
    borderColor: 'border-secondary',
  },
];

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-32 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-white/90 text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We offer a comprehensive range of digital services to help your brand thrive in today's competitive landscape.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto py-20 px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <CardContainer key={index}>
              <CardBody
                className={`card hover:shadow-xl border-t-4 ${service.borderColor}`}
              >
                <div className="p-8">
                  <CardItem
                    translateZ={50}
                    className={`${service.color} ${service.iconColor} p-4 rounded-lg inline-block mb-6`}
                  >
                    {service.icon}
                  </CardItem>
                  
                  <CardItem translateZ={50}>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  </CardItem>
                  
                  <CardItem translateZ={30}>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </CardItem>
                  
                  <CardItem translateZ={40}>
                    <h4 className="text-lg font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Elevate Your Digital Presence?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We tailor our services to meet your specific business goals and deliver 
            measurable results that impact your bottom line.
          </motion.p>
          <motion.a 
            href="/contact" 
            className="btn btn-primary"
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
    </motion.div>
  );
};

export default ServicesPage;