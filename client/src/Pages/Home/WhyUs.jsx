

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  BriefcaseBusiness,
  Laptop,
  Target,
  Users,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const reasons = [
  {
    icon: Laptop,
    number: "01",
    title: "Learn by Doing",
    description:
      "Build real-world confidence through hands-on computer training, practical assignments, and industry-focused projects.",
    tag: "Practical Learning",
    color: "emerald",
  },
  {
    icon: Users,
    number: "02",
    title: "Personalized Mentorship",
    description:
      "Get individual attention, expert guidance, and continuous support from experienced trainers throughout your journey.",
    tag: "Expert Guidance",
    color: "blue",
  },
  {
    icon: Target,
    number: "03",
    title: "Career-Focused Skills",
    description:
      "Develop in-demand technical, digital, and communication skills designed to prepare you for today's competitive world.",
    tag: "Skill Development",
    color: "violet",
  },
  {
    icon: BriefcaseBusiness,
    number: "04",
    title: "Career & Placement Support",
    description:
      "Move forward with resume guidance, interview preparation, career mentoring, and dedicated placement assistance.",
    tag: "Career Growth",
    color: "orange",
  },
];

const iconStyles = {
  emerald:
    "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
  violet:
    "bg-violet-50 text-violet-600 group-hover:bg-violet-600",
  orange:
    "bg-orange-50 text-orange-600 group-hover:bg-orange-600",
};

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const WhyUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.08,
  });
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : fadeUp;

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#f8fafc] py-16 sm:py-20 lg:py-24"
    >
      {/* Animated background decorations */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -35, 0],
                y: [0, 40, 0],
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 30, 0],
                y: [0, -35, 0],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-14 lg:flex-row lg:items-end">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.85 }
              }
              transition={{ duration: 0.6, ease }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur"
            >
              <motion.span
                animate={shouldReduceMotion ? {} : { rotate: [0, 12, -12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Sparkles size={15} className="text-emerald-600" />
              </motion.span>

              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">
                Why Choose IISL
              </span>
            </motion.div>

            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Your Ambition.
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% auto" }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : { backgroundPosition: ["0% center", "200% center"] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Our Commitment.
              </motion.span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              At Indian Institute Skills & Language, we go beyond
              traditional classroom learning. We empower students
              with practical knowledge, professional skills, and
              the confidence to build a successful future.
            </p>
          </motion.div>

          <motion.a
            href="/why-us"
            variants={reveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-sm transition-colors duration-300 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-lg"
          >
            Explore Why IISL
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
              <ArrowUpRight size={17} />
            </span>
          </motion.a>
        </div>

        {/* Animated feature cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {reasons.map(
            ({ icon: Icon, number, title, description, tag, color }, index) => (
              <motion.article
                key={number}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 45, scale: 0.96 }
                }
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 45, scale: 0.96 }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.7,
                  delay: shouldReduceMotion ? 0 : 0.12 * index,
                  ease,
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -8,
                        transition: { duration: 0.25 },
                      }
                }
                className="group relative isolate overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_25px_rgba(15,23,42,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-emerald-300 hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)] sm:p-9"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Animated corner accent */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-emerald-200/30 blur-2xl"
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }
                  }
                  transition={{
                    duration: 5,
                    delay: index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-7 flex items-start justify-between">
                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : { rotate: -8, scale: 1.08 }
                      }
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white ${iconStyles[color]}`}
                    >
                      <Icon size={29} strokeWidth={1.8} />
                    </motion.div>

                    <span className="text-5xl font-black tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-emerald-100">
                      {number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-800 sm:text-2xl">
                    {title}
                  </h3>

                  <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-300 group-hover:bg-emerald-50">
                      <CheckCircle2
                        size={14}
                        className="text-emerald-600"
                      />
                      {tag}
                    </span>

                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { rotate: 45 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors duration-300 group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white"
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </div>

        {/* Premium CTA banner */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 40 }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease,
          }}
          className="relative isolate mt-10 overflow-hidden rounded-3xl bg-[#071d35] px-7 py-9 text-white shadow-[0_25px_60px_rgba(7,29,53,0.15)] sm:px-10 lg:px-12 lg:py-11"
        >
          {/* Background effects */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full border-[45px] border-white/5"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-20 -z-10 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl"
            animate={
              shouldReduceMotion
                ? {}
                : { scale: [1, 1.3, 1], x: [0, -20, 0] }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-emerald-300">
                <GraduationCap size={19} />
                <span className="text-xs font-bold uppercase tracking-[0.15em]">
                  Your Future Starts Here
                </span>
              </div>

              <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                Learn Skills Today.
                <span className="text-emerald-400">
                  {" "}Lead Tomorrow.
                </span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                Join IISL and take your first step toward practical
                learning, professional growth, and exciting career
                opportunities.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <motion.a
                href="/admission"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -4, scale: 1.02 }
                }
                whileTap={{ scale: 0.97 }}
                className="group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-emerald-500 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-emerald-900/20 transition-colors duration-300 hover:bg-emerald-400"
              >
                {!shouldReduceMotion && (
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/2 -z-10 w-1/3 skew-x-[-20deg] bg-white/25 blur-sm"
                    animate={{ left: ["-50%", "150%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
                Apply for Admission
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="/courses"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -3 }
                }
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
              >
                <BookOpen size={18} />
                Explore Courses
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Trust highlights */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 20 }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.35,
            ease,
          }}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-semibold text-slate-500 sm:text-sm"
        >
          {[
            "Hands-on Training",
            "Expert Mentorship",
            "Career Guidance",
            "Placement Support",
          ].map((item, index) => (
            <motion.div
              key={item}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2
                size={17}
                className="text-emerald-600"
              />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;