import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User } from 'lucide-react';

const categories = [
  'All',
  'Social Media',
  'SEO',
  'Branding',
  'Photography',
  'Marketing',
];

const blogPosts = [
  {
    id: 1,
    title: '10 Social Media Trends to Watch in 2025',
    excerpt: 'Stay ahead of the curve with the latest social media trends that will shape the digital landscape in 2025.',
    category: 'Social Media',
    author: 'Alex Morgan',
    date: 'May 15, 2025',
    image: 'https://images.pexels.com/photos/3759098/pexels-photo-3759098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'The Complete Guide to SEO in 2025',
    excerpt: 'Everything you need to know about search engine optimization to improve your rankings and drive organic traffic.',
    category: 'SEO',
    author: 'Sophia Chen',
    date: 'April 28, 2025',
    image: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Building a Brand That Resonates with Your Audience',
    excerpt: 'Learn how to create a brand identity that connects with your target audience and drives loyalty and engagement.',
    category: 'Branding',
    author: 'Marcus Brown',
    date: 'April 10, 2025',
    image: 'https://images.pexels.com/photos/1591085/pexels-photo-1591085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'The Art of Conceptual Photography for Brands',
    excerpt: 'Discover how conceptual photography can tell your brand story and create emotional connections with your audience.',
    category: 'Photography',
    author: 'Olivia Taylor',
    date: 'March 22, 2025',
    image: 'https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Digital Marketing Strategies That Actually Work',
    excerpt: 'Cut through the noise with proven digital marketing strategies that deliver real results for your business.',
    category: 'Marketing',
    author: 'Alex Morgan',
    date: 'March 5, 2025',
    image: 'https://images.pexels.com/photos/7688164/pexels-photo-7688164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Leveraging Instagram for Business Growth',
    excerpt: 'A step-by-step guide to using Instagram effectively to grow your business and engage with your target audience.',
    category: 'Social Media',
    author: 'Sophia Chen',
    date: 'February 18, 2025',
    image: 'https://images.pexels.com/photos/4549416/pexels-photo-4549416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 7,
    title: 'The Future of AI in Digital Marketing',
    excerpt: 'Explore how artificial intelligence is transforming digital marketing and how you can stay ahead of the curve.',
    category: 'Marketing',
    author: 'Marcus Brown',
    date: 'February 2, 2025',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 8,
    title: 'Creating a Cohesive Visual Identity for Your Brand',
    excerpt: 'Learn how to develop a consistent visual identity that strengthens your brand and resonates with your audience.',
    category: 'Branding',
    author: 'Olivia Taylor',
    date: 'January 15, 2025',
    image: 'https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-white/90 text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest insights, trends, and strategies in digital marketing,
            branding, and creative design.
          </motion.p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <AnimatePresence>
          {filteredPosts.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User size={16} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16 px-4 mt-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="bg-white p-8 md:p-12 rounded-xl shadow-md text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay up-to-date with the latest insights, trends, and strategies in digital marketing.
              We send valuable content twice a month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="btn btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;