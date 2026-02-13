import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import HomeHero from "../components/HomeHero"
import { Link } from "react-router-dom"

type TrainingItem = {
  title: string
  description: string
}

const trainings: TrainingItem[] = [
  {
    title: "Advanced Corporate Pharmacy Practices",
    description:
      "A comprehensive training session focused on modern corporate pharmacy operations, compliance standards, and workflow optimization.",
  },
  {
    title: "Pharmaceutical Compliance & Ethics",
    description:
      "Designed for corporate pharmacists to strengthen regulatory awareness, ethical practices, and professional accountability.",
  },
  {
    title: "Leadership & Professional Growth",
    description:
      "A popular session aimed at developing leadership skills, communication, and decision-making in pharmaceutical environments.",
  },
]

type StatItem = {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

const stats: StatItem[] = [
  { value: 15, label: "Happy Clients", suffix: "+" },
  { value: 27, label: "Years of Experience", suffix: "+" },
  { value: 50, label: "Training Sessions", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", suffix: "%", prefix: "" },
]

// Animated counter component
const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`
      }
    })
  }, [springValue, suffix, prefix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

const Home: React.FC = () => {
  return (
    <>
      {/* SECTION 1 — HOMEHERO */}
      <HomeHero />

      {/* SECTION 2 — TRAINING SESSIONS WITH STATS */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Our Training Programs
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Professional Development
              <span className="block text-blue-600 mt-2">That Makes an Impact</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Empowering pharmaceutical professionals with cutting-edge training solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT SIDE — TRAINING SESSIONS */}
            <div className="space-y-8">
              {trainings.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100/50 overflow-hidden">
                    {/* Animated gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Number badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>

                    <div className="relative">
                      {/* Decorative line */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                        className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-6"
                      />

                      <h3 className="text-2xl font-bold text-slate-900 mb-4 pr-12 group-hover:text-blue-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {item.description}
                      </p>

                      {/* Animated arrow */}
                      {/* <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                        className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-4 transition-all duration-300"
                      >
                        Learn More
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </motion.div> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE — STATS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-24"
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-10 md:p-12 shadow-2xl overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full blur-2xl opacity-20" />

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-10"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      Trusted by Industry Leaders
                    </h3>
                    <p className="text-blue-100 text-lg">
                      Our track record speaks for itself
                    </p>
                  </motion.div>

                  <div className="space-y-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon circle */}
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              delay: index * 0.1 + 0.2,
                            }}
                            className="w-3 h-3 mt-3 rounded-full bg-blue-300 shadow-lg shadow-blue-400/50"
                          />

                          <div className="flex-1">
                            <motion.div
                              className="text-5xl md:text-6xl font-bold text-white mb-2"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                            >
                              <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                prefix={stat.prefix}
                              />
                            </motion.div>
                            <p className="text-blue-100 text-lg font-medium">
                              {stat.label}
                            </p>
                          </div>
                        </div>

                        {/* Divider line */}
                        {index < stats.length - 1 && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                            className="mt-8 h-px bg-blue-500/30 origin-left"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-10 pt-8 border-t border-blue-500/30"
                  >
                    <p className="text-blue-100 text-sm mb-4">
                      Join hundreds of satisfied pharmaceutical professionals
                    </p>
                    <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-4 bg-white text-blue-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Get Started Today
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CREDIBILITY / CTA */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 md:py-32 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 font-medium text-sm border border-blue-500/30">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Industry Expertise
              </span>
            </motion.div>

            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold">
              Trusted Corporate Training
              <span className="block text-blue-400 mt-2">Partner</span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-10"
            >
              Elevate T&amp;D works closely with organizations to deliver training
              solutions that meet real-world pharmaceutical challenges, ensuring
              long-term professional excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Contact Us
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </motion.button>
              </Link>

              <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                Get to know us
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home