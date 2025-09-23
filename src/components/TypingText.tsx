'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  delay: number;
  isInView: boolean;
  speed?: number; // Optional speed parameter
}

export default function TypingText({ text, delay, isInView, speed = 1 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, delay * 1 + currentIndex * speed); // Use speed parameter - much faster

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, isInView, speed]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-gray-400"
        >
          |
        </motion.span>
      )}
    </span>
  );
}