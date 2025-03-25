"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-snow py-16">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1510590337019-5ef8d3d32116')",
          }}
        >
          <div className="absolute inset-0 bg-navy bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-snow">Our Story</h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
          <p className="text-slate text-lg mb-4">
            At Full Gospel Tabernacle, our mission is to share God's love and grace
            with everyone we meet. We believe in creating a welcoming environment
            where people can experience authentic worship, build meaningful
            relationships, and grow in their faith journey.
          </p>
          <blockquote className="text-sage text-xl italic border-l-4 border-sage pl-4 my-6">
            "Therefore go and make disciples of all nations, baptizing them in the
            name of the Father and of the Son and of the Holy Spirit." - Matthew
            28:19
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Our Values</h2>
            <ul className="space-y-4 text-slate">
              <li className="flex items-start">
                <span className="text-sage font-bold mr-2">•</span>
                <span>Biblical Teaching: Grounding everything in God's Word</span>
              </li>
              <li className="flex items-start">
                <span className="text-sage font-bold mr-2">•</span>
                <span>Community: Building authentic relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-sage font-bold mr-2">•</span>
                <span>Service: Showing God's love through action</span>
              </li>
              <li className="flex items-start">
                <span className="text-sage font-bold mr-2">•</span>
                <span>Worship: Celebrating God's presence together</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544427920-c49ccfb85579"
              alt="Church community"
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-6">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                alt="Pastor John"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-navy">Pastor John Smith</h3>
              <p className="text-slate">Senior Pastor</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-navy">Sarah Johnson</h3>
              <p className="text-slate">Worship Leader</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Mike Williams"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-navy">Mike Williams</h3>
              <p className="text-slate">Youth Pastor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
