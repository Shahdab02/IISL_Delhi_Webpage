import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Laptop,
  MessageCircle,
  Search,
  Sparkles,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  X,
} from "lucide-react";

const courses = [
  {
    title: "Basic Computer with MS Word",
    duration: "2 Months",
    level: "Beginner",
    description:
      "Learn essential computer basics, typing, document creation, professional formatting, and MS Word skills for daily office tasks and academic work.",
    skills: [
      "Computer Basics",
      "MS Word",
      "Typing",
      "Document Formatting",
      "Office Skills",
    ],
  },
  {
    title: "Digital Marketing",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Understand digital strategies, social media promotion, content planning, branding, and online growth fundamentals.",
    skills: ["SEO", "Social Media", "Content Marketing", "Branding", "Ads"],
  },
  {
    title: "Full Stack Web Development",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Build modern websites and applications using frontend and backend technologies with practical project experience.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Backend"],
  },
  {
    title: "English Language",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Improve speaking, grammar, vocabulary, reading, and professional communication in English.",
    skills: ["Speaking", "Grammar", "Vocabulary", "Reading", "Communication"],
  },
  {
    title: "French Language",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Learn foundational French communication, pronunciation, vocabulary, and everyday conversation skills.",
    skills: [
      "Pronunciation",
      "Conversation",
      "Grammar",
      "Vocabulary",
      "Listening",
    ],
  },
  {
    title: "German Language",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Develop basic German language skills for conversation, travel, work, and international communication.",
    skills: ["Speaking", "Listening", "Grammar", "Vocabulary", "Conversation"],
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const whatsappNumber = "919310772538";

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        course.title.toLowerCase().includes(search) ||
        course.description.toLowerCase().includes(search) ||
        course.skills.some((skill) => skill.toLowerCase().includes(search));

      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;

      return matchesSearch && matchesLevel;
    });
  }, [searchTerm, selectedLevel]);

  const handleEnquiry = (courseName) => {
    const message = `Hello IISL, I want to enquire about the ${courseName} course. Please share the admission and placement support details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLevel("All");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071b38]">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#0B3D91]/40 blur-3xl" />

        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              <Sparkles size={17} className="text-orange-300" />
              Learn • Practice • Grow • Get Career Support
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Explore Our
              <span className="block bg-linear-to-r from-blue-300 via-white to-orange-300 bg-clip-text text-transparent">
                Professional Courses
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Start from the basics and progress toward advanced skills with
              practical learning and placement support.
            </p>

            {/* Stats */}
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-black text-white">
                  {courses.length}+
                </p>
                <p className="mt-1 text-sm text-blue-100">
                  Professional Courses
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-black text-white">Beginner</p>
                <p className="mt-1 text-sm text-blue-100">Friendly Learning</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-black text-white">Advanced</p>
                <p className="mt-1 text-sm text-blue-100">Career Skills</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-black text-white">100%</p>
                <p className="mt-1 text-sm text-blue-100">Placement Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 rounded-t-[50%] bg-slate-50" />
      </section>

      {/* =====================================================
          PLACEMENT SUPPORT
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-[#0B3D91]/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#0B3D91]/5 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-600">
                <BriefcaseBusiness size={17} />
                Career & Placement Support
              </div>

              <h2 className="mt-4 text-2xl font-black text-[#071b38] sm:text-3xl">
                100% Placement Support
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Get career guidance, interview preparation, resume support,
                job-search assistance, and placement-oriented preparation after
                completing your course.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Resume Building",
                  "Interview Preparation",
                  "Career Guidance",
                  "Job Assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-amber-500"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-[#0B3D91]/10 text-[#0B3D91] lg:h-28 lg:w-28">
              <BriefcaseBusiness size={45} />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE INTRO
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0B3D91]">
            Our Courses
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071b38] sm:text-4xl">
            Find the right course for your goals
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Search by course name or skill and filter courses according to your
            current learning level.
          </p>
        </div>
      </section>

      {/* =====================================================
          SEARCH + FILTER
      ====================================================== */}
      <section className="sticky top-0 z-30 mx-auto mt-8 max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="course-filter-panel rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg shadow-slate-200/40 backdrop-blur-md">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses, skills..."
                className="course-search-input h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-11 text-sm font-medium text-slate-700 outline-none transition focus:border-[#0B3D91] focus:bg-white focus:ring-4 focus:ring-[#0B3D91]/10"
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition hover:bg-slate-300"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Level Filter */}
            <div className="flex flex-wrap gap-2">
              {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`course-level-filter rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                    selectedLevel === level
                      ? "bg-[#0B3D91] text-white shadow-md shadow-[#0B3D91]/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <p className="text-sm font-semibold text-slate-500">
              Showing{" "}
              <span className="font-black text-[#0B3D91]">
                {filteredCourses.length}
              </span>{" "}
              {filteredCourses.length === 1 ? "course" : "courses"}
            </p>

            {(searchTerm || selectedLevel !== "All") && (
              <button
                onClick={clearFilters}
                className="text-sm font-bold text-[#0B3D91] hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE GRID
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        {filteredCourses.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <article
                key={course.title}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0B3D91]/20 hover:shadow-2xl"
              >
                {/* Accent */}
                <div className="h-1.5 w-full bg-linear-to-r from-[#0B3D91] via-blue-500 to-orange-400" />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B3D91]/10 text-[#0B3D91] transition-all duration-300 group-hover:bg-[#0B3D91] group-hover:text-white">
                      <Laptop size={27} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                        course.level === "Advanced"
                          ? "bg-orange-50 text-orange-600"
                          : course.level === "Intermediate"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>

                  {/* Number */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="text-xs font-bold tracking-widest text-[#0B3D91]">
                      COURSE
                    </span>

                    <span className="text-xs font-bold text-slate-300">
                      #{String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px flex-1 bg-slate-100" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-2xl font-black leading-tight text-[#071b38] transition-colors duration-300 group-hover:text-[#0B3D91]">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  {/* Duration */}
                  <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0B3D91] shadow-sm">
                      <Clock3 size={19} />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Course Duration
                      </p>

                      <p className="mt-0.5 text-sm font-bold text-slate-700">
                        {course.duration}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                      What You Will Learn
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-amber-500"
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Placement Support */}
                  <div className="mt-6 flex items-center gap-2 rounded-xl border border-amber-100 bg-amber-50 px-3 py-2.5">
                    <BriefcaseBusiness size={17} className="text-amber-600" />

                    <span className="text-xs font-bold text-amber-700">
                      100% Placement Support
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-7">
                    <button
                      onClick={() => handleEnquiry(course.title)}
                      className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3D91] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-[#0B3D91]/20 transition-all duration-300 hover:bg-[#093678] hover:shadow-lg"
                    >
                      <MessageCircle size={18} />
                      Enquire Now
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Search size={28} />
            </div>

            <h3 className="mt-5 text-2xl font-black text-[#071b38]">
              No courses found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try another course name, skill, or remove the selected filter.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-[#0B3D91] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#093678]"
            >
              View All Courses
            </button>
          </div>
        )}
      </section>

      {/* =====================================================
          WHY LEARN WITH US
      ====================================================== */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0B3D91]">
              Learning Support
            </span>

            <h2 className="mt-3 text-3xl font-black text-[#071b38] sm:text-4xl">
              More than just a course
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Learn practical skills and prepare yourself for real-world
              opportunities with dedicated career support.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "Beginner Friendly",
                text: "Start learning from the fundamentals.",
              },
              {
                icon: Laptop,
                title: "Practical Learning",
                text: "Focus on useful skills and hands-on practice.",
              },
              {
                icon: Users,
                title: "Career Guidance",
                text: "Get guidance for your professional journey.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Placement Support",
                text: "Receive placement-oriented career assistance.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B3D91]/10 text-[#0B3D91]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-[#071b38]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-[32px] bg-[#071b38] px-6 py-14 text-center shadow-2xl sm:px-10 lg:px-16">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#0B3D91]/40 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-400/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-orange-300 backdrop-blur-md">
              <Sparkles size={27} />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black text-white sm:text-4xl">
              Start your learning journey today
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Choose your course, develop practical skills, and get career
              guidance with our placement support.
            </p>

            <button
              onClick={() => {
                const message =
                  "Hello IISL, I want to know more about your courses, admission process and placement support.";

                window.open(
                  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    message,
                  )}`,
                  "_blank",
                );
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#0B3D91] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageCircle size={19} />
              Talk to Us on WhatsApp
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
