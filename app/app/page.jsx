"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1438032506450-0b0eeea1844d",
    title: "Welcome to Grace Community",
    verse: "For where two or three gather in my name, there am I with them. - Matthew 18:20",
  },
  {
    url: "https://images.unsplash.com/photo-1507692049790-de58290a4334",
    title: "Join Our Community",
    verse: "Let us not give up meeting together, as some are in the habit of doing. - Hebrews 10:25",
  },
  {
    url: "https://images.unsplash.com/photo-1445059088424-a853a18d1b3f",
    title: "Experience God's Love",
    verse: "And now these three remain: faith, hope and love. But the greatest of these is love. - 1 Corinthians 13:13",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="absolute inset-0 bg-navy bg-opacity-50" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-snow mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-snow italic">
                  {slide.verse}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6 text-snow" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6 text-snow" />
        </button>
      </div>

      {/* Welcome Section */}
      <section className="py-16 bg-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-4">Welcome Home</h2>
              <p className="text-slate mb-6">
                At Full Gospel Tabernacle, we believe in creating a warm and
                inclusive environment where everyone can experience God's love and
                grace. Our doors are always open to those seeking spiritual growth,
                meaningful connections, and a place to belong.
              </p>
              <div className="text-lg text-sage italic">
                "For God so loved the world that he gave his one and only Son, that
                whoever believes in him shall not perish but have eternal life." -
                John 3:16
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a"
                alt="Church gathering"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-snow mb-8">Service Times</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-snow p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-navy mb-2">
                  Sunday Morning
                </h3>
                <p className="text-slate">9:00 AM & 11:00 AM</p>
              </div>
              <div className="bg-snow p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-navy mb-2">
                  Wednesday Night
                </h3>
                <p className="text-slate">7:00 PM</p>
              </div>
              <div className="bg-snow p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-navy mb-2">
                  Youth Service
                </h3>
                <p className="text-slate">Friday 6:30 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1470116892389-0de5d9770b2c"
                alt="Worship"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-navy mb-2">
                Vibrant Worship
              </h3>
              <p className="text-slate">
                Experience powerful worship services that lift your spirit and draw
                you closer to God.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18"
                alt="Community"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-navy mb-2">
                Growing Together
              </h3>
              <p className="text-slate">
                Join our small groups and build meaningful relationships within our
                church family.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
                alt="Service"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-navy mb-2">
                Serving Others
              </h3>
              <p className="text-slate">
                Discover opportunities to serve and make a difference in our
                community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}