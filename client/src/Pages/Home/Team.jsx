import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Globe2,
  GraduationCap,
  Languages,
  Megaphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import sir from "../../assets/optimized/summit_sir.jpg";
// import shahdab from "../../assets/optimized/shahdab.jpg";
import shahdab from "../../assets/monu.jpeg"
import simmi from "../../assets/optimized/simmi.jpg";
import divya from "../../assets/optimized/divya.jpg";
import lakshay from "../../assets/optimized/lakshay.jpg";
import anushka from "../../assets/anushka.png";

const teamImageDimensions = {
  "Sumit Agarwal": { width: 600, height: 600 },
  "Lakshay Malhotra": { width: 600, height: 900 },
  "Md Shahdab": { width: 600, height: 795 },
  Simmi: { width: 600, height: 800 },
  "Divya Sharma": { width: 600, height: 779 },
  Anushka: { width: 600, height: 1067 },
};

const Team = () => {
  const teamMembers = [
    {
      name: "Sumit Agarwal",
      role: "Founder & Director",
      icon: Target,
      image: sir,
      color: "from-[#0B3D91] to-[#4DA3FF]",
      message:
        "Building a learning ecosystem where students gain practical skills, confidence, and career direction.",
      skills: ["Leadership", "Career Strategy", "Training"],
    },
    {
      name: "Lakshay Malhotra",
      role: "Head of Marketing",
      icon: Megaphone,
      image: lakshay,
      color: "from-[#0B3D91] to-[#4DA3FF]",
      message:
        "Connecting students with opportunities through strategic marketing, communication, and outreach.",
      skills: ["Marketing", "Branding", "Communication"],
    },
    {
      name: "Md Shahdab",
      role: "Head – Software Development & Technology",
      icon: Code2,
      image: shahdab,
      color: "from-cyan-500 to-blue-700",
      message:
        "Focused on technology, web development, and building practical digital solutions for students and businesses.",
      skills: ["React.js", "Node.js", "Full Stack"],
    },
    {
      name: "Simmi",
      role: "Associate Head – Programs & Digital Marketing",
      icon: Sparkles,
      image: simmi,
      color: "from-[#0B3D91] to-[#4DA3FF]",
      message:
        "Managing student programs and creating engaging digital initiatives that support learning and growth.",
      skills: ["Programs", "Digital Marketing", "Management"],
    },
    {
      name: "Divya Sharma",
      role: "Head – Student Mentorship & Languages",
      icon: Languages,
      image: divya,
      color: "from-amber-500 to-orange-700",
      message:
        "Helping students improve communication, language skills, confidence, and overall professional development.",
      skills: ["Mentorship", "Languages", "Personality Development"],
    },
    {
      name: "Anushka",
      role: "Head of German Language & faculty",
      icon: Languages,
      image: anushka,
      color: "from-amber-500 to-orange-700",
      message:
        "Teaching German language and guiding students as they build confidence and communication skills.",
      skills: ["German", "Language Teaching", "Communication"],
    },
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Technology",
      description:
        "Practical technology learning with modern development tools.",
    },
    {
      icon: Languages,
      title: "Languages",
      description:
        "Communication and language development for professional growth.",
    },
    {
      icon: Users,
      title: "Mentorship",
      description:
        "Personal guidance to help students choose the right career path.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Support",
      description:
        "Industry-focused preparation for internships and job opportunities.",
    },
  ];

  const supportCards = [
    {
      icon: GraduationCap,
      title: "Practical Learning",
      text: "Learn skills through real projects and practical activities.",
    },
    {
      icon: Users,
      title: "Personal Mentorship",
      text: "Get guidance based on your learning and career goals.",
    },
    {
      icon: Globe2,
      title: "Industry Skills",
      text: "Develop skills aligned with modern technology and business needs.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Preparation",
      text: "Prepare for interviews, internships, and professional opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* hero sectio */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur">
              <Users size={17} />
              Meet Our Team
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              The People
              <span className="block bg-linear-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Behind Your Career
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Meet the passionate professionals working together to provide
              students with practical education, mentorship, technology skills,
              communication development, and career support.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#team"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-blue-50"
              >
                Meet Our Team
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#support"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <BriefcaseBusiness size={18} />
                Career Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*HIGHLIGHTS SECTION*/}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Bring
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              More Than Just Teaching
            </h2>

            <p className="mt-4 text-slate-600">
              Our team combines technology, mentorship, communication, and
              career-focused support to create a complete learning experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*TEAM SECTION*/}
      <section id="team" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <Sparkles size={16} />
              Our Leadership
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Meet the Team
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              A dedicated team working behind the scenes to make learning more
              practical, engaging, and career-focused.
            </p>
          </div>

          {/* TEAM CARDS*/}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;

              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* image area */}
                  <div className="relative h-97.5 overflow-hidden bg-slate-900 sm:h-105">
                    {member.image ? (
                      <>
                        <img
                          src={member.image}
                          alt={member.name}
                          width={teamImageDimensions[member.name].width}
                          height={teamImageDimensions[member.name].height}
                          loading="lazy"
                          decoding="async"
                          style={
                            member.name === "Anushka"
                              ? { objectPosition: "center 10%" }
                              : undefined
                          }
                          className="absolute inset-0 z-20 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                        />

                        {/* Very light overlay */}
                        <div className="absolute inset-0 z-30 bg-black/5" />
                      </>
                    ) : (
                      <div
                        className={`absolute inset-0 flex items-center justify-center bg-linear-to-br ${member.color}`}
                      >
                        <div className="text-center text-white">
                          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
                            <Icon size={52} strokeWidth={1.5} />
                          </div>

                          <p className="mt-5 text-sm font-medium text-white/80">
                            Team Member
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Bottom Gradient */}
                    <div className="absolute inset-x-0 bottom-0 z-40 h-32 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Role Icon */}
                    <div className="absolute left-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md">
                      <Icon size={22} />
                    </div>

                    {/* Number */}
                    <div className="absolute right-5 top-5 z-50 text-5xl font-black text-white/20">
                      0{index + 1}
                    </div>
                  </div>

                  {/* content */}
                  <div className="p-6 sm:p-7">
                    <div className="mb-4">
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-blue-600">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-sm leading-7 text-slate-600">
                      {member.message}
                    </p>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Student Success */}
                    <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-500">
                      <CheckCircle2 size={16} className="text-amber-500" />
                      Dedicated to Student Success
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* career suports */}
      <section
        id="support"
        className="scroll-mt-20 bg-slate-950 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
                <BriefcaseBusiness size={16} />
                Career Support
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                We Don't Just Teach.
                <span className="block text-blue-400">
                  We Help You Move Forward.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Our team focuses on practical learning, personal mentorship,
                communication development, project exposure, and career
                preparation.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-slate-900 transition hover:bg-blue-50"
              >
                Talk to Our Team
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Support Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {supportCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                      <Icon size={22} />
                    </div>

                    <h3 className="font-bold text-white">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-linear-to-b from-slate-950 to-blue-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
            <Target size={30} />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Build Your Future?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Start your learning journey with a team that understands technology,
            education, mentorship, and career development.
          </p>

          <a
            href="/admission"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-slate-900 transition hover:bg-blue-50"
          >
            Start Your Journey
            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;