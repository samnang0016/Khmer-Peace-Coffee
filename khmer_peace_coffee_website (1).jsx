import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      {/* Header */}
      <header className="bg-amber-900 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            {/* Animated Logo */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-xl font-bold"
            >
              ☕
            </motion.div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Khmer Peace Coffee
            </h1>
          </motion.div>

          <nav className="flex gap-6 text-sm md:text-base">
            <a href="#home" className="hover:text-amber-300">Home</a>
            <a href="#about" className="hover:text-amber-300">About</a>
            <a href="#menu" className="hover:text-amber-300">Menu</a>
            <a href="#contact" className="hover:text-amber-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="text-center py-20 px-6 bg-gradient-to-r from-amber-100 to-amber-200"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Welcome to Khmer Peace Coffee
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Enjoy premium Cambodian coffee in a peaceful atmosphere.
          Fresh beans, handcrafted drinks, and warm hospitality.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-center">
          About Us
        </h3>
        <p className="text-center text-gray-700 leading-relaxed">
          Khmer Peace Coffee is dedicated to serving high-quality coffee
          sourced from local Cambodian farmers. Our mission is to create a
          calm and welcoming space where friends and families can gather and
          enjoy meaningful moments together.
        </p>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-16 px-6 bg-amber-100"
      >
        <h3 className="text-3xl font-semibold mb-10 text-center">
          Our Menu
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Espresso", price: "$2.50" },
            { name: "Cappuccino", price: "$3.00" },
            { name: "Iced Latte", price: "$3.50" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <h4 className="text-xl font-bold mb-2">{item.name}</h4>
              <p className="text-amber-700 font-semibold">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
        <p className="mb-2">📍 Phnom Penh, Cambodia</p>
        <p className="mb-2">📞 +855 77 333 508</p>
        <p className="mb-6">✉ info@khmerpeacecoffee.com</p>
        <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-2xl shadow-md">
          Visit Us Today
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white text-center p-4">
        © {new Date().getFullYear()} Khmer Peace Coffee. All rights reserved.
      </footer>
    </div>
  );
}
