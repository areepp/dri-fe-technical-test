"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import Image, { type StaticImageData } from "next/image";
import { cva } from "class-variance-authority";
import { AnimatedCount } from "./count-up";
import { Button } from "@/components/button";
import heroDesktop from "@/assets/image-hero-desktop-new.webp";
import heroMobile from "@/assets/image-hero-mobile-new.webp";
import heroTablet from "@/assets/image-hero-tablet-new.webp";

const heroCopyVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delayChildren: 1.15,
      staggerChildren: 0.12,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const mobileImageVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 2.05, ease: "easeOut" },
  },
};


const heroVisualVariants: Variants = {
  hidden: { opacity: 1, scale: 1, x: 0 },
  visible: { opacity: 1, scale: 1, x: 0 },
};

const compositionVariants: Variants = {
  hidden: {},
  visible: {},
};

const pillRevealVariants: Variants = {
  hidden: { clipPath: "inset(0% 0% 0% 100%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const imageRevealVariants: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.7, delay: 0.45, ease: "easeOut" },
  },
};

const firstStatCardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: 1.45, ease: "easeOut" },
  },
};

const secondStatCardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: 1.6, ease: "easeOut" },
  },
};

const mobileFirstStatCardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: 2.4, ease: "easeOut" },
  },
};

const mobileSecondStatCardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: 2.55, ease: "easeOut" },
  },
};


const statCardVariants = cva(
  "absolute whitespace-nowrap rounded-[10px] bg-white shadow-[0_25px_50px_-12px_rgba(19,24,63,0.15)]",
  {
    variants: {
      compact: {
        true: "px-4 py-3",
        false: "px-6 py-5",
      },
    },
    defaultVariants: {
      compact: false,
    },
  },
);

const statLabelVariants = cva("font-bold text-grey", {
  variants: {
    compact: {
      true: "text-xs",
      false: "text-base leading-7",
    },
  },
  defaultVariants: {
    compact: false,
  },
});
const statValueVariants = cva("font-extrabold text-navy", {
  variants: {
    compact: {
      true: "text-[28px] leading-8",
      false: "text-[40px] leading-[51px]",
    },
  },
  defaultVariants: {
    compact: false,
  },
});

type StatCardProps = {
  label: string;
  value: number;
  suffix?: string;
  separator?: string;
  className: string;
  compact?: boolean;
  reveal: "first" | "second";
  countDelay: number;
};

function StatCard({
  label,
  value,
  suffix,
  separator,
  className,
  compact = false,
  reveal,
  countDelay,
}: StatCardProps) {
  return (
    <motion.div
      variants={
        compact
          ? reveal === "first"
            ? mobileFirstStatCardRevealVariants
            : mobileSecondStatCardRevealVariants
          : reveal === "first"
            ? firstStatCardRevealVariants
            : secondStatCardRevealVariants
      }
      className={statCardVariants({ compact, className })}
    >
      <p className={statLabelVariants({ compact })}>{label}</p>
      <p>
        <AnimatedCount
          className={statValueVariants({ compact })}
          end={value}
          separator={separator}
          suffix={suffix}
          delay={countDelay}
        />
      </p>
    </motion.div>
  );
}

function DesktopComposition({ image }: { image: StaticImageData }) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const countDelay = shouldReduceMotion ? 0 : 1.45;

  return (
    <motion.div
      className="relative h-[938px] w-[1046px]"
      variants={compositionVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
    >
      <div
        aria-hidden
        className="absolute top-[308px] left-[90px] h-[317px] w-[993px] -rotate-45 lg:top-[207px] lg:left-[32px] lg:w-[1300px]"
      >
        <motion.div
          variants={pillRevealVariants}
          style={{ originX: 1, originY: 0 }}
          className="h-full w-full rounded-full bg-gradient-to-r from-gradient-pink to-gradient-blue"
        />
      </div>
      <motion.div
        variants={imageRevealVariants}
        className="absolute top-[313px] left-[174px] h-[560px] w-[317px] overflow-hidden"
      >
        <Image
          src={image}
          alt=""
          priority
          width={317}
          height={560}
          className="block"
        />
      </motion.div>
      <StatCard
        label="Members"
        value={29}
        suffix="k"
        reveal="first"
        countDelay={countDelay}
        className="top-[420px] left-[453px]"
      />
      <StatCard
        label="Course hours"
        value={1451}
        separator=","
        reveal="second"
        countDelay={shouldReduceMotion ? 0 : 1.6}
        className="top-[656px] left-[57px]"
      />
    </motion.div>
  );
}

function MobileComposition({ image }: { image: StaticImageData }) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className="relative h-[390px] w-full max-w-[360px]"
      variants={compositionVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
    >
      <motion.div
        variants={mobileImageVariants}
        className="absolute top-[24px] left-1/2 h-[250px] w-[250px] -translate-x-1/2"
      >
        <Image
          src={image}
          alt=""
          priority
          width={320}
          height={320}
          className="block"
        />
      </motion.div>
      <StatCard
        compact
        label="Members"
        value={29}
        suffix="k"
        reveal="first"
        countDelay={shouldReduceMotion ? 0 : 2.4}
        className="top-[55px] right-[4px]"
      />
      <StatCard
        compact
        label="Course hours"
        value={1451}
        separator=","
        reveal="second"
        countDelay={shouldReduceMotion ? 0 : 2.55}
        className="top-[220px] left-0"
      />
    </motion.div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="mx-auto w-full max-w-[1110px] px-6 md:px-10 lg:px-0">
      <div className="grid gap-10 py-6 text-center md:grid-cols-2 md:items-center md:gap-0 md:py-0 md:text-left lg:min-h-[720px] lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-0 lg:text-left">
        <motion.div
          className="flex flex-col items-start gap-6 text-left md:items-start md:text-left lg:-mt-6 lg:items-start lg:gap-8 lg:text-left"
          variants={heroCopyVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.h1
            variants={heroItemVariants}
            className="max-w-[520px] text-[2.5rem] font-extrabold leading-[51px] text-navy lg:text-[3.5rem] lg:leading-[70px]"
          >
            Maximize skill, minimize budget
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="max-w-[30rem] text-base font-medium leading-7 text-grey lg:text-lg"
          >
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </motion.p>
          <motion.div variants={heroItemVariants}>
            <Button variant="orange-pink" size="lg" href="#courses">
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative hidden self-start md:block lg:hidden"
          variants={heroVisualVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <div className="flex h-[650px] w-full justify-center overflow-visible">
            <div className="origin-top translate-x-[120px] scale-[0.68]">
              <DesktopComposition image={heroTablet} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden self-start lg:block"
          variants={heroVisualVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <div className="pointer-events-none absolute top-[-212px] left-[14px]">
            <DesktopComposition image={heroDesktop} />
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-[390px] w-full max-w-[360px] md:hidden"
          variants={heroVisualVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <MobileComposition image={heroMobile} />
        </motion.div>
      </div>
    </section>
  );
}

