"use client";
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const cats = useMemo(() => ['🐱', '😺', '🙀', '😼'], []);
  const [cat, setCat] = useState(cats[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cats.length);
    setCat(cats[randomIndex]);
  }, [cats]);

  return (
    <header className="inset-x-0 bg-neutral-300 dark:bg-neutral-900 sm:relative">
      <div className="mx-auto justify-between p-3 sm:flex sm:justify-between sm:max-w-4xl sm:p-4">
        <div className="text-2xl font-bold">Resume</div>
        <div className="flex items-center font-bold justify-end">
          <Link className="mx-2" href="https://github.com/setodeve" target="_blank" aria-label="GitHub">Github</Link>
          <Link className="mx-2" href="https://qiita.com/keiswe" target="_blank" aria-label="Qiita">Qiita</Link>
          <motion.span
            className="inline-block"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {cat}
          </motion.span>
        </div>
      </div>
    </header>
  );
}