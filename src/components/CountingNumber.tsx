"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type AnimatedCounterProps = {
  from: number;
  to: number;
  duration?: number;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from, to, duration = 1 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true }); // Menggunakan useInView untuk mendeteksi apakah elemen berada dalam viewport

  useEffect(() => {
    const element = ref.current;

    if (!element || !inView) return; // Hanya mulai animasi jika elemen ada dan berada dalam tampilan

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [from, to, duration, inView]); // Animasi dimulai hanya ketika `inView` berubah menjadi true

  return <span ref={ref} />;
};

export default AnimatedCounter;
