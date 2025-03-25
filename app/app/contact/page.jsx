"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-snow">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a')",
          }}
        >
          <div className="absolute inset-0 bg-navy bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-snow">Contact Us</h1>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-navy mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-slate rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-slate rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-sage text-snow py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-sage flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy">Address</h3>
                    <p className="text-slate">123 Church Street, City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-sage flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy">Phone</h3>
                    <p className="text-slate">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-sage flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy">Email</h3>
                    <p className="text-slate">info@gracecommunity.church</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-sage flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy">Office Hours</h3>
                    <p className="text-slate">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: Closed
                      <br />
                      Sunday: 8:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">
                Prayer Request
              </h3>
              <p className="text-slate mb-4">
                Need prayer? Our prayer team would love to pray for you. Submit
                your prayer request online or call us anytime.
              </p>
              <button className="bg-sage text-snow py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                Submit Prayer Request
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
