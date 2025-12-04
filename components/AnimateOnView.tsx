"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimateOnViewProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "fadeUp" | "fadeIn";
};

const variantsMap: any = {
  fadeUp: {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
};

export default function AnimateOnView({
  children,
  delay = 0,
  className,
  variant = "fadeUp",
}: AnimateOnViewProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px", // triggers slightly earlier for smoother UX
  });

  const v = variantsMap[variant];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={v}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}