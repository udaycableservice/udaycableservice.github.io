'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Satellite, Home, Tv, Radio, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'SCV', href: '/scv', icon: Tv },
    { name: 'TCCL', href: '/tccl', icon: Radio },
    { name: 'VK Digital', href: '/vk-digital', icon: Monitor },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg shadow-lg"
              >
                <Satellite className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Uday Cable Service</h1>
                <p className="text-xs text-gray-500">Pro Digital Cable Provider</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <a
              href="tel:9884165926"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <a
              href="tel:9884165926"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-600 transition-all duration-300 mt-4"
            >
              Call Now
            </a>
          </div>
        )}
      </motion.div>
    </motion.nav>
  );
}