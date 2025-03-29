"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

interface CatProps {
  cat: string;
}

export default function Cat({ cat }: CatProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <motion.span
        className="inline-block cursor-pointer"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {cat}
      </motion.span>
      {showTooltip && (
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          hi
        </motion.div>
      )}
    </div>
  );
}