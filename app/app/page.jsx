"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    url: "images/home/TabBuilding.jpg",
    title: "Welcome to the Full Gospel Tabernacle",
    verse: "The Church At the Heart Of The City, With The City At Heart",
  },
  {
    url: "https://images.unsplash.com/photo-1507692049790-de58290a4334",
    title: "Join Our Community",
    verse:
      "Let us not give up meeting together, as some are in the habit of doing. - Hebrews 10:25",
  },
  {
    url: "images/home/TopView.png",
    title: "Take Your Place",
    verse: "Find Your Sphere",
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
      <div className="relative h-[80vh] min-h-[400px] overflow-hidden">
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
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-snow mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-snow italic">
                  {slide.verse}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 sm:p-3 rounded-full z-10"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-snow" />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % slides.length)
          }
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 sm:p-3 rounded-full z-10"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-snow" />
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
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">This is TAB</h2>
              <p className="text-base sm:text-lg text-slate mb-6">
                The Full Gospel Tabernacle, is the first FGCSA church established in KZN in 1924.
                Over the past 100 years we have seen many walk through our doors and go on to
                accomplish great things for the kingdom! With a rich past and sufficient grace for
                the present; we remain resilient in our mandate to fulfil our God-given assignment.
                We Remain The Church At The Heart Of The City, With The City At Heart!
              </p>
              <div className="text-base sm:text-lg text-sage italic">
                &quot;For God so loved the world that he gave his one and only Son, that
                whoever believes in him shall not perish but have eternal life.&quot; &ndash; John 3:16
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="images/home/BuildingSmall.png"
                alt="Church gathering"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-snow mb-8">Service Times</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Sunday Morning", time: "9:30 AM" },
                { title: "Prayer Meeting", time: "Tuesday 6:00 PM" },
                { title: "Youth Meeting", time: "Friday 6:00 PM" },
              ].map((service, idx) => (
                <div key={idx} className="bg-snow p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate">{service.time}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                img: "images/home/BibleOnWheels.png",
                title: "More than Study",
                text: "Grow deeper in your wall by going deeper in the word through our accredited Bible School On Wheels",
              },
              {
                img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
                title: "Take your place",
                text: "Find your sphere and Be part of the Heartbeat of transformation in our city",
              },
              {
                img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
                title: "It&#39;s Our Call",
                text: "Discover opportunities to serve and make a difference in our community.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-slate">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
