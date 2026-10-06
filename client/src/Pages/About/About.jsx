import React from "react";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Laptop,
  Languages,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const About = () => {
  const courses = [
    {
      icon: Laptop,
      title: "Basic Computer",
      description:
        "Build strong computer fundamentals, office productivity skills, typing, MS Word and essential digital skills.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Digital Marketing",
      description:
        "Learn modern digital marketing concepts including social media, SEO, content marketing, advertising and analytics.",
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Learn frontend, backend, databases, APIs and practical web development through project-based learning.",
    },
    {
      icon: Languages,
      title: "English Spoken",
      description:
        "Improve spoken English, vocabulary, grammar, pronunciation and professional communication confidence.",
    },
    {
      icon: Languages,
      title: "German Language",
      description:
        "Develop practical German language skills for communication, education, travel and professional opportunities.",
    },
    {
      icon: Languages,
      title: "French Language",
      description:
        "Learn French pronunciation, vocabulary, grammar, listening and everyday conversation skills.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Career Focused",
      text: "Our learning approach focuses on practical skills that students can use in academic and professional environments.",
    },
    {
      icon: Laptop,
      title: "Practical Learning",
      text: "Students learn through hands-on practice, exercises, assignments and real-world applications.",
    },
    {
      icon: Users,
      title: "Personal Guidance",
      text: "We encourage interaction, doubt solving and individual guidance to support every learner.",
    },
    {
      icon: Rocket,
      title: "Future Ready",
      text: "We focus on relevant technology, communication and professional skills for today's changing world.",
    },
  ];

  const promises = [
    "Practical and hands-on training",
    "Beginner to advanced learning",
    "Supportive and experienced trainers",
    "Modern computer learning environment",
    "Real-world project exposure",
    "Personal doubt-solving support",
    "Interview and career guidance",
    "Placement support",
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
     
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-slate-950">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-48 left-[35%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-indigo-300 backdrop-blur-md">
              <Sparkles size={16} />
              About Indian Institute of Skills & Languages
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-7xl">
              Learn Skills.
              <span className="block bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Build Your Future.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              Indian Institute of Skills & Languages (IISL) is a skill-focused
              education institute dedicated to practical computer education,
              digital skills, full stack development and language learning.
            </p>

            {/* Location */}
            <div className="mt-8 flex items-center gap-2 text-slate-300">
              <MapPin size={19} className="text-cyan-400" />
              <span>647 Gram Sabha, Rohini Sector 23, Delhi</span>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-500"
              >
                Explore Courses
                <BookOpen size={19} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Us
                <MapPin size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>

     {/* status */}
      <section className="relative z-10 -mt-12 px-5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="border-r border-slate-100 p-7 text-center">
            <div className="flex justify-center">
              <Laptop className="text-indigo-600" size={28} />
            </div>

            <h3 className="mt-3 text-3xl font-black text-slate-900">10+</h3>

            <p className="mt-1 text-sm font-semibold text-slate-500">
              Computers
            </p>
          </div>

          {/* Stat 2 */}
          <div className="border-r border-slate-100 p-7 text-center">
            <div className="flex justify-center">
              <BookOpen className="text-indigo-600" size={28} />
            </div>

            <h3 className="mt-3 text-3xl font-black text-slate-900">6</h3>

            <p className="mt-1 text-sm font-semibold text-slate-500">
              Career Courses
            </p>
          </div>

          {/* Stat 3 */}
          <div className="border-r border-slate-100 p-7 text-center">
            <div className="flex justify-center">
              <Code2 className="text-indigo-600" size={28} />
            </div>

            <h3 className="mt-3 text-3xl font-black text-slate-900">100%</h3>

            <p className="mt-1 text-sm font-semibold text-slate-500">
              Practical Focus
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-7 text-center">
            <div className="flex justify-center">
              <BriefcaseBusiness className="text-indigo-600" size={28} />
            </div>

            <h3 className="mt-3 text-2xl font-black text-slate-900">Support</h3>

            <p className="mt-1 text-sm font-semibold text-slate-500">
              Placement Assistance
            </p>
          </div>
        </div>
      </section>

      {/* who we are*/}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Education That Goes
              <span className="block text-indigo-600">
                Beyond the Classroom.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Indian Institute of Skills & Languages (IISL) is a computer
              education, digital skills and language learning institute based in
              Rohini Sector 23, Delhi.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our goal is to make learning practical, accessible and
              career-oriented. We help students develop technical knowledge,
              communication skills and confidence through structured training.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our courses are designed for learners at different levels, from
              beginners who want to build strong fundamentals to learners who
              want to develop advanced technical and professional skills.
            </p>

            {/* Highlight */}
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600">
                <GraduationCap className="text-white" size={25} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Learn • Practice • Build • Grow
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  A learning approach focused on practical knowledge, confidence
                  and career preparation.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl bg-slate-950 p-7 shadow-2xl sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600">
                  <GraduationCap className="text-white" size={30} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Our Learning Philosophy
                  </p>

                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Learn • Practice • Build • Grow
                  </h3>
                </div>
              </div>

              <div className="mt-9 space-y-5">
                {[
                  [
                    "01",
                    "Learn",
                    "Understand concepts with clear and structured guidance.",
                  ],
                  [
                    "02",
                    "Practice",
                    "Apply knowledge through practical exercises and activities.",
                  ],
                  [
                    "03",
                    "Build",
                    "Create projects and develop useful real-world skills.",
                  ],
                  [
                    "04",
                    "Grow",
                    "Develop confidence and prepare for professional opportunities.",
                  ],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 font-bold text-indigo-300">
                      {number}
                    </div>

                    <div>
                      <h4 className="font-bold text-white">{title}</h4>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
          OUR COURSES
      */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Courses
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Skills Designed for
              <span className="text-indigo-600"> Real Opportunities</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore our focused courses designed to help learners develop
              technical, digital and communication skills.
            </p>
          </div>

          {/* Course Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <div
                  key={course.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
                      Career Focused
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600">
                    <CheckCircle2 size={17} />
                    Practical Learning
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-indigo-600">
                    <CheckCircle2 size={17} />
                    Placement Support
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
          OUR APPROACH
       */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Learn Skills You Can
              <span className="text-indigo-600"> Actually Use.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our training combines concepts, practical sessions, assignments,
              projects and career guidance.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                number: "01",
                title: "Learn",
                text: "Build strong fundamentals with structured lessons and trainer guidance.",
              },
              {
                icon: Laptop,
                number: "02",
                title: "Practice",
                text: "Apply concepts through practical exercises and hands-on sessions.",
              },
              {
                icon: Code2,
                number: "03",
                title: "Build",
                text: "Work on practical tasks and projects to strengthen your skills.",
              },
              {
                icon: Rocket,
                number: "04",
                title: "Grow",
                text: "Develop confidence and prepare for career opportunities.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <span className="text-4xl font-black text-slate-100 group-hover:text-indigo-100">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
          CORE VALUES
       */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-400">
              Our Core Values
            </span>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              What We Believe In
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our learning environment is built around practical education,
              student support and continuous growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600">
                    <Icon className="text-white" size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
          VISION & MISSION
     */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-7 lg:grid-cols-2">
          {/* Vision */}
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600">
              <Target className="text-white" size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-black">Our Vision</h2>

            <p className="mt-5 leading-8 text-slate-600">
              To create a trusted learning environment where students can
              develop practical computer, digital and language skills and gain
              the confidence needed for future academic and professional
              opportunities.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-3xl bg-slate-950 p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600">
              <Rocket className="text-white" size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-black text-white">Our Mission</h2>

            <p className="mt-5 leading-8 text-slate-400">
              To bridge the gap between education and practical skills by
              providing structured training, hands-on learning, mentorship and
              career-oriented guidance across technology, digital and language
              learning.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600">
              <Award className="text-white" size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl">
              Our Promise to Every Learner
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              We are committed to creating a supportive environment where
              students can learn, practice, improve and prepare for their next
              opportunity.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise) => (
              <div
                key={promise}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CheckCircle2 size={20} className="shrink-0 text-indigo-600" />

                <span className="text-sm font-semibold text-slate-700">
                  {promise}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* final */}
      <section className="px-5 py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-8 text-center sm:p-12 lg:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 font-semibold text-indigo-100">
              <Zap size={18} />
              Your Future Starts With a Skill
            </div>

            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Learn Today.
              <span className="block">Build Tomorrow.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-indigo-100">
              Start your learning journey with Indian Institute of Skills &
              Languages and develop practical skills for your future.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-indigo-700 transition hover:bg-slate-100"
              >
                Explore Courses
                <BookOpen size={19} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
              >
                Get in Touch
                <MapPin size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
