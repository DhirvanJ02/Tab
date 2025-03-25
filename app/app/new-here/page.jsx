"use client";

import { motion } from "framer-motion";
import { Clock, Users, Heart, Book } from "lucide-react";

export default function NewHere() {
  return (
    <div className="min-h-screen bg-snow">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846')",
          }}
        >
          <div className="absolute inset-0 bg-navy bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-snow mb-6">Welcome Home</h1>
            <p className="text-xl text-snow mb-8">
              We're so glad you're here. At Full Gospel Tabernacle, you'll find a
              warm, welcoming family of believers eager to help you grow in your
              faith journey.
            </p>
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-12">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-sage mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">
                Service Times
              </h3>
              <p className="text-slate">
                Sunday services at 9:00 AM & 11:00 AM. Wednesday night at 7:00 PM
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-sage mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">
                Community Groups
              </h3>
              <p className="text-slate">
                Connect with others in small groups throughout the week
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Heart className="h-12 w-12 text-sage mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">
                Kids & Youth
              </h3>
              <p className="text-slate">
                Age-appropriate programs for children and teenagers
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Book className="h-12 w-12 text-sage mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">
                Bible Study
              </h3>
              <p className="text-slate">
                Various study groups and discipleship opportunities
              </p>
            </div>
          </div>
        </motion.div>

        {/* Next Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Your Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-sage mb-4">01</div>
              <h3 className="text-xl font-semibold text-navy mb-4">
                Join Us Sunday
              </h3>
              <p className="text-slate mb-4">
                Experience worship and fellowship with our church family
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-sage mb-4">02</div>
              <h3 className="text-xl font-semibold text-navy mb-4">
                Connect Group
              </h3>
              <p className="text-slate mb-4">
                Find your community in one of our small groups
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-sage mb-4">03</div>
              <h3 className="text-xl font-semibold text-navy mb-4">
                Get Involved
              </h3>
              <p className="text-slate mb-4">
                Discover opportunities to serve and make a difference
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">
                What should I wear?
              </h3>
              <p className="text-slate">
                Come as you are! We're casual and welcoming. Wear what makes you
                comfortable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">
                Where do I park?
              </h3>
              <p className="text-slate">
                We have plenty of parking available, with dedicated spots for
                first-time visitors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}