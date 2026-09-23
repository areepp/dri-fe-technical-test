"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import Image from "next/image";
import { Button } from "./button";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.15, ease: "easeOut" },
  },
};

export function Header() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.header
      className="relative z-10 mx-auto flex w-full max-w-[1110px] items-center justify-between px-6 py-6 md:px-10 lg:px-0"
      variants={headerVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
    >
      <a href="#" aria-label="skilled home">
        <Image src="/icons/logo-dark.svg" alt="skilled" width={112} height={29} />
      </a>
      <Button variant="navy" href="#courses">
        Get Started
      </Button>
    </motion.header>
  );
}
