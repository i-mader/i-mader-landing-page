"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TextWriterProps = {
  text: string;
  duration?: number;
};

const TextWriter: React.FC<TextWriterProps> = ({ text, duration = 3 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalTime = (duration * 1000) / text.length;

    const writeText = () => {
      setDisplayText(text.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex >= text.length) {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(writeText, intervalTime);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [text, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayText}
    </motion.span>
  );
};

export default TextWriter;
