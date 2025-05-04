"use client";
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

export default function Cat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const cats = useMemo(() => ['Grinning1.png','Grinning2.png','Weary.png'], []);
  const [cat, setCat] = useState(cats[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cats.length);
    setCat(cats[randomIndex]);
  }, [cats]);

  return (
    <div className="relative">
      <motion.span
        className="inline-block cursor-pointer rotate-10"
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
        <Image
          src={cat}
          alt="Cat"
          width={30}
          height={30}
        />
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