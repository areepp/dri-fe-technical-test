"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
  type Variants,
} from "motion/react";

import Image from "next/image";
import iconAnimation from "@public/icons/icon-animation.svg";
import iconBusiness from "@public/icons/icon-business.svg";
import iconCrypto from "@public/icons/icon-crypto.svg";
import iconDesign from "@public/icons/icon-design.svg";
import iconPhotography from "@public/icons/icon-photography.svg";


const courseRevealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const courseContainerVariants: Variants = {
  hidden: {},
  visible: () => ({
    transition: {
      staggerChildren: 0.12,
      delayChildren:
        typeof window !== "undefined" && window.scrollY === 0 ? 2.1 : 0.2,
    },
  }),
};

const courseContainerReducedVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};


const courses = [
  {
    icon: iconAnimation,
    title: "Animation",
    body: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    icon: iconDesign,
    title: "Design",
    body: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    icon: iconPhotography,
    title: "Photography",
    body: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    icon: iconCrypto,
    title: "Crypto",
    body: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
  },
  {
    icon: iconBusiness,
    title: "Business",
    body: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
];

export function Courses() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const courseRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(courseRef, { once: true, amount: 0.35 });
  const courseControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      void courseControls.start("visible");
    }
  }, [courseControls, isInView]);


  return (
    <section
      id="courses"
      className="w-full bg-gradient-to-b from-white to-[#f0f2ff]"
    >
      <motion.div
        className="mx-auto w-full max-w-[1110px] px-6 pb-20 md:px-10 lg:px-0 lg:pb-28"
        variants={
          shouldReduceMotion
            ? courseContainerReducedVariants
            : courseContainerVariants
        }
        ref={courseRef}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={courseControls}
      >
        <div className="grid gap-14 sm:grid-cols-2 sm:gap-x-[30px] sm:gap-y-[50px] lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[78px] lg:pt-16">
          <motion.div
            variants={courseRevealVariants}
            className="rounded-2xl bg-gradient-to-b from-gradient-orange to-gradient-pink p-8 sm:col-span-1 lg:col-span-1"
          >
            <h2 className="max-w-[240px] text-2xl font-extrabold leading-[28px] text-white lg:text-[2rem] lg:leading-10">
              Check out our most popular courses!
            </h2>
          </motion.div>
          {courses.map((course) => (
            <motion.article
              key={course.title}
              variants={courseRevealVariants}
              className="relative flex h-full flex-col rounded-2xl bg-white pb-8 pt-12 shadow-[0_25px_50px_0_rgba(19,24,63,0.1)]"
            >
              <Image
                src={course.icon}
                alt=""
                width={56}
                height={56}
                className="absolute -top-7 left-8"
              />
              <div className="flex flex-1 flex-col px-8">
                <h3 className="text-2xl font-extrabold leading-[28px] text-navy">
                  {course.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-7 text-grey lg:text-lg">
                  {course.body}
                </p>
                <a
                  href="#courses"
                  className="mt-auto inline-block pt-6 text-base font-bold text-pink transition-colors hover:text-light-pink"
                >
                  Get Started
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
