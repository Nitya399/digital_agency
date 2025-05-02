import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2015',
    title: 'Humble Beginnings',
    description: 'DigitalEdge was founded by a team of digital enthusiasts with a vision to revolutionize how brands connect with their audiences online.',
    image: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    year: '2017',
    title: 'Expanding Services',
    description: 'Added SEO and content marketing to our service portfolio, allowing us to provide more comprehensive digital solutions to our growing client base.',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    year: '2019',
    title: 'Award Recognition',
    description: 'Recognized with multiple industry awards for our innovative campaigns and exceptional client results, establishing us as a leader in the digital space.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    year: '2021',
    title: 'New Headquarters',
    description: 'Moved to our current creative headquarters, providing an inspiring space for our team to collaborate and innovate on client projects.',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded our services to international markets, working with clients across Europe, Asia, and Australia to deliver exceptional digital experiences.',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    year: '2025',
    title: 'Looking Forward',
    description: 'Continuing to innovate and evolve, with a focus on emerging technologies and creating the next generation of digital experiences for our clients.',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const OurStoryPage = () => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.1 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-white/90 text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From our passionate beginnings to becoming a leading digital agency, 
            we\'ve been driven by a commitment to excellence and innovation.
          </motion.p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Mission & Vision
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We believe that exceptional digital experiences have the power to transform businesses. 
              Our mission is to harness this power and create strategies that drive meaningful results for our clients.
            </motion.p>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our vision is to be the most innovative and client-focused digital agency, 
              known for creating digital solutions that set new standards in the industry.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We\'re committed to delivering exceptional work that exceeds client expectations and achieves outstanding results.',
                icon: '🏆',
              },
              {
                title: 'Innovation',
                description: 'We constantly explore new ideas, technologies, and approaches to stay at the forefront of digital marketing.',
                icon: '💡',
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and build strong partnerships with our clients to ensure their success.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 px-4" ref={timelineRef}>
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            animate={isTimelineInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200"
              initial={{ height: 0 }}
              animate={isTimelineInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5 }}
            />

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <motion.div 
                    className="flex-1 md:w-1/2 mb-8 md:mb-0"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isTimelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className={`md:px-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-primary/10 text-primary inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 mb-4">{milestone.description}</p>
                    </div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-primary shadow-lg transform -translate-x-1/2 flex items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </motion.div>

                  <motion.div 
                    className="md:flex-1 flex md:w-1/2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={isTimelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className={`md:px-8 w-full ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md" 
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-gray-300">
              Our success is driven by our talented team of digital experts who are passionate 
              about creating exceptional experiences and helping our clients achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Alex Morgan',
                position: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Sophia Chen',
                position: 'Creative Director',
                image: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Marcus Brown',
                position: 'Head of Strategy',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Olivia Taylor',
                position: 'Lead Designer',
                image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-400">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurStoryPage;