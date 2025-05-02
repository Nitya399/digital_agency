import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-white/90 text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or want to learn more about our services? 
            Get in touch with our team and let's start a conversation.
          </motion.p>
        </div>
      </div>

      {/* Contact Info and Form */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-10">
              We'd love to hear from you. Fill out the form, and we'll get back to you 
              as soon as possible. Or feel free to reach out directly using the contact 
              information below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    123 Digital Lane, Suite 101<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <a href="mailto:info@digitaledge.com" className="text-gray-600 hover:text-primary">
                    info@digitaledge.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-primary">
                    (123) 456-7890
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 h-80 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9663096362837!2d-122.40075134863217!3d37.78780902010619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085ed4db027%3A0x386b3073faaee6af!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1627484892410!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Office Location Map"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 lg:p-10"
          >
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service You're Interested In</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="seo">Search Engine Optimization</option>
                  <option value="branding">Digital Branding</option>
                  <option value="photography">Conceptual Photography</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Have questions about working with us? Here are answers to some of the 
              questions we hear most often.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is your typical process for working with a new client?',
                answer: 'Our process typically begins with a discovery call to understand your business needs and goals. We then conduct research, develop a strategic plan, present our recommendations, and upon approval, move into implementation and ongoing optimization.',
              },
              {
                question: 'How long does it take to see results from digital marketing?',
                answer: 'Results vary depending on the service, but generally you can expect to see initial improvements in 1-3 months, with more substantial results in 3-6 months. SEO typically takes longer, while paid advertising can show results more quickly.',
              },
              {
                question: 'Do you offer ongoing support after a project is completed?',
                answer: 'Yes, we offer various support and maintenance packages to ensure your digital presence continues to perform optimally. We also provide regular reporting and strategic recommendations for continuous improvement.',
              },
              {
                question: 'How do you measure success for your clients?',
                answer: 'We establish clear KPIs at the beginning of each project that align with your business goals. These might include metrics like website traffic, conversion rates, social engagement, search rankings, and ultimately, ROI on your marketing investment.',
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We work with clients across various industries, including technology, e-commerce, healthcare, finance, education, and professional services. Our diverse experience allows us to bring fresh perspectives and proven strategies to each client.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;