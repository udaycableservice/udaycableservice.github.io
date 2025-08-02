'use client';

import { motion } from 'framer-motion';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-teal-400 rounded-full opacity-15"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-25"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating lines */}
      <motion.div
        className="absolute top-1/3 right-10 w-20 h-0.5 bg-gradient-to-r from-blue-300 to-transparent opacity-30"
        animate={{
          rotate: [0, 10, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}