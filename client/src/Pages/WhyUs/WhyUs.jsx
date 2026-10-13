import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  BusFront,
  CheckCircle2,
  Code2,
  GraduationCap,
  Laptop,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
  Clock3,
  Layers3,
} from "lucide-react";

const WhyUs = () => {
  const stats = [
    {
      number: "10+",
      label: "Computers",
      icon: Laptop,
    },
    {
      number: "06",
      label: "Career Courses",
      icon: BookOpen,
    },
    {
      number: "100%",
      label: "Skill Focus",
      icon: Target,
    },
    {
      number: "1:1",
      label: "Student Support",
      icon: Users,
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Career-Focused Learning",
      description:
        "Our learning approach focuses on practical skills that help students prepare for future academic and career opportunities.",
    },
    {
      icon: Laptop,
      title: "Hands-On Training",
      description:
        "Students get practical computer-based learning so they can understand concepts by actually working on them.",
    },
    {
      icon: Code2,
      title: "Project-Based Learning",
      description:
        "Students practice their knowledge through practical tasks, assignments and projects.",
    },
    {
      icon: Users,
      title: "Student-Centered Learning",
      description:
        "We focus on individual student understanding, participation and continuous improvement.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Guidance",
      description:
        "Students receive guidance related to skills, career preparation, interviews and future learning opportunities.",
    },
    {
      icon: MessageCircle,
      title: "Doubt & Mentorship Support",
      description:
        "Students can ask questions, clear doubts and receive personal guidance throughout their learning journey.",
    },
    {
      icon: GraduationCap,
      title: "Beginner-Friendly",
      description:
        "Our learning environment is suitable for beginners as well as students who want to improve their existing skills.",
    },
    {
      icon: Zap,
      title: "Skill Development",
      description:
        "We encourage students to continuously practice and develop relevant technical and professional skills.",
    },
  ];

  const highlights = [
    "🚌 Free student transportation",
    "💻 Practical and skill-oriented learning",
    "🎯 Career-focused courses",
    "🧑‍💻 Hands-on computer sessions",
    "🚀 Project-based learning",
    "💼 Career and interview guidance",
    "👨‍🏫 Personal attention & doubt support",
    "📚 Beginner-friendly learning environment",
  ];

  const learningSteps = [
    {
      number: "01",
      title: "Learn",
      description:
        "Understand concepts and build strong fundamentals with structured learning.",
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Practice",
      description:
        "Apply concepts through practical exercises and computer-based activities.",
      icon: Laptop,
    },
    {
      number: "03",
      title: "Build",
      description:
        "Work on practical projects and strengthen your technical skills.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Grow",
      description:
        "Prepare for further studies, career opportunities and continuous learning.",
      icon: Rocket,
    },
  ];

  const learningModel = [
    {
      icon: BookOpen,
      title: "Concepts",
      description: "Strong fundamentals",
    },
    {
      icon: Laptop,
      title: "Practice",
      description: "Hands-on learning",
    },
    {
      icon: Layers3,
      title: "Projects",
      description: "Real-world practice",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career",
      description: "Future preparation",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white">
        {/* Background Decorations */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                <Sparkles size={17} className="text-yellow-300" />
                Why Choose IISL?
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Learn Today.
                <span className="block text-indigo-300">Grow Tomorrow.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-indigo-100 sm:text-lg">
                Indian Institute of Skills & Language focuses on practical
                education, relevant technology skills and student-focused
                guidance to help learners build confidence and prepare for their
                future.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-900 shadow-xl transition hover:-translate-y-1 hover:bg-indigo-50"
                >
                  Explore Courses
                  <Rocket size={18} />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Talk to Us
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <GraduationCap size={26} />
                  </div>

                  <div>
                    <p className="text-sm text-indigo-200">
                      Indian Institute of
                    </p>
                    <h3 className="font-bold">Skills & Language</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-white/10 p-4"
                      >
                        <Icon size={21} className="mb-3 text-indigo-200" />

                        <h4 className="text-2xl font-black">{stat.number}</h4>

                        <p className="mt-1 text-xs text-indigo-100 sm:text-sm">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative -mt-8 px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="border-b border-slate-100 p-5 text-center transition hover:bg-slate-50 md:border-b-0 md:border-r last:border-r-0"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={21} />
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  {stat.number}
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
              Why IISL?
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Education That Focuses on
              <span className="text-indigo-600"> Skills & Growth</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              At Indian Institute of Skills & Language, our focus is to create a
              practical and supportive learning environment where students can
              understand concepts, practice skills and gain confidence.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We combine structured learning with practical computer sessions,
              projects, guidance and student support so learners can continue
              developing their skills step by step.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Practical learning approach",
                "Student-focused environment",
                "Career-oriented skill development",
                "Hands-on computer practice",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-500"
                  />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-3xl bg-linear-to-br from-indigo-600 to-purple-700 p-1 shadow-2xl">
              <div className="rounded-[22px] bg-white p-7 sm:p-9">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Award size={28} />
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  Build Skills With Confidence
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Learn step by step, practice regularly and develop the
                  confidence required to move towards your academic and
                  professional goals.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <ShieldCheck className="text-indigo-600" size={22} />
                    <p className="mt-3 text-sm font-bold">
                      Supportive Environment
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Clock3 className="text-indigo-600" size={22} />
                    <p className="mt-3 text-sm font-bold">
                      Structured Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FREE TRANSPORTATION ================= */}
      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-700 p-6 text-white shadow-2xl shadow-indigo-500/20 sm:p-8 lg:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-purple-300/10 blur-2xl" />

            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 shadow-lg backdrop-blur-md sm:h-16 sm:w-16">
                  <BusFront size={30} />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles size={16} className="text-yellow-300" />

                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-100 sm:text-sm">
                      Special Student Facility
                    </span>
                  </div>

                  <h3 className="text-2xl font-black sm:text-3xl">
                    Free Student Transportation
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
                    Convenient transportation support for eligible students,
                    making it easier and more comfortable to attend classes.
                  </p>
                </div>
              </div>

              <div className="shrink-0 rounded-2xl bg-white/10 px-5 py-3 text-center backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-100">
                  Student Benefit
                </p>
                <p className="mt-1 font-black text-white">FREE TRANSPORT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
              Our Highlights
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Everything Students Need to
              <span className="text-indigo-600"> Keep Growing</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We create an environment where students can learn, practice, ask
              questions and continuously improve their skills.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-indigo-700 shadow-sm">
              Student Benefits
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              A Learning Environment Designed for
              <span className="text-indigo-600"> Students</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our aim is to make learning practical, accessible and engaging
              while helping students build confidence in their skills.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-4 text-sm font-semibold transition hover:-translate-y-1 hover:shadow-md ${
                    index === 0
                      ? "border-indigo-200 bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                      : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Target size={25} />
              </div>

              <div>
                <h3 className="text-xl font-black">Our Learning Approach</h3>
                <p className="text-sm text-slate-500">
                  Simple. Practical. Focused.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {learningModel.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>

                      <p className="text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEARNING JOURNEY ================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
              Learning Journey
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Learn. Practice. Build.
              <span className="text-indigo-600"> Grow.</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A simple learning journey that helps students move from
              understanding concepts to applying their skills.
            </p>
          </div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {learningSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative rounded-3xl border border-slate-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-indigo-100">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-black">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STUDENT ENVIRONMENT ================= */}
      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-indigo-200">
              Student Environment
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Learn in a
              <span className="text-indigo-300"> Supportive Environment</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Students need more than just course content. They need
              opportunities to practice, ask questions, receive guidance and
              build confidence.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Practical computer-based learning",
                "Personal attention and doubt support",
                "Project and assignment practice",
                "Career-oriented guidance",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-sm font-medium text-slate-200 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <Laptop className="text-indigo-300" size={28} />
              <h3 className="mt-5 text-xl font-black">Practical</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Learn by doing and practicing.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <Users className="text-indigo-300" size={28} />
              <h3 className="mt-5 text-xl font-black">Support</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Get guidance whenever needed.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <Code2 className="text-indigo-300" size={28} />
              <h3 className="mt-5 text-xl font-black">Projects</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Apply your skills practically.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <Rocket className="text-indigo-300" size={28} />
              <h3 className="mt-5 text-xl font-black">Growth</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Keep learning and improving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 to-purple-700 p-8 text-center text-white shadow-2xl shadow-indigo-500/20 sm:p-12 lg:p-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <Rocket size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-black sm:text-4xl">
            Ready to Build Your Skills?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-indigo-100">
            Start your learning journey with Indian Institute of Skills &
            Language and take the next step towards your goals.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 transition hover:-translate-y-1 hover:bg-indigo-50"
            >
              View All Courses
              <BookOpen size={18} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white transition hover:bg-white/20"
            >
              Contact IISL
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER INFO ================= */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-black text-slate-900">
              Indian Institute of Skills & Language
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Practical Learning • Skill Development • Career Preparation
            </p>
          </div>

          <p className="text-sm text-slate-500">Learn Today. Grow Tomorrow.</p>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
