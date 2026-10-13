import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Users,
  Zap,
} from "lucide-react";

const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    mode: "",
    qualification: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const courses = [
    "Basic Computer & MS Office",
    "French lang",
    "Web Development",
    "Full Stack Development",
    "Digital Marketing",
    "English Spoken",
    "German lang",
  ];

  const benefits = [
    "Practical hands-on training",
    "Career-focused courses",
    "Project-based learning",
    "Personal guidance & doubt support",
    "Interview preparation",
    "Portfolio development",
    "Modern computer lab",
    "Online & offline learning options",
  ];

  const steps = [
    {
      number: "01",
      icon: Send,
      title: "Submit Enquiry",
      text: "Fill out the admission enquiry form with your basic details.",
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "Counselling",
      text: "Discuss your goals and choose a course according to your needs.",
    },
    {
      number: "03",
      icon: BookOpen,
      title: "Choose Course",
      text: "Select your preferred course, learning mode and batch.",
    },
    {
      number: "04",
      icon: GraduationCap,
      title: "Start Learning",
      text: "Complete admission formalities and begin your learning journey.",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // FORMSPREE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mdeakaag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          mode: formData.mode,
          qualification: formData.qualification,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
          mode: "",
          qualification: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert("Unable to submit your enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      alert(
        "Something went wrong. Please check your internet connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      {/*Hero */}
      <section className="relative min-h-155 flex items-center bg-[#1f1230] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-125 h-125 rounded-full bg-[#5a2d8f]/30 blur-3xl" />

          <div className="absolute top-20 -right-37.5 w-137.5 h-137.5 rounded-full bg-[#9b6ac2]/20 blur-3xl" />

          <div className="absolute -bottom-50 left-[35%] w-125 h-125 rounded-full bg-[#d9b3ff]/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Hero Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#d9b3ff] text-sm font-semibold">
                <Sparkles size={16} />
                Admissions Open
              </div>

              <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
                Start Your
                <span className="block bg-linear-to-r from-[#d9b3ff] via-[#b78add] to-[#9b6ac2] bg-clip-text text-transparent">
                  Learning Journey.
                </span>
              </h1>

              <p className="mt-7 text-base sm:text-lg leading-8 text-slate-300 max-w-xl">
                Choose a career-focused course, develop practical skills and
                take the next step toward your professional goals with IISL.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
                  <CheckCircle2 size={17} className="text-[#d9b3ff]" />
                  Practical Learning
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
                  <CheckCircle2 size={17} className="text-[#d9b3ff]" />
                  Career Focus
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
                  <CheckCircle2 size={17} className="text-[#d9b3ff]" />
                  Expert Guidance
                </div>
              </div>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="#admission-form"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#5a2d8f] hover:bg-[#4b2378] text-white font-bold transition shadow-xl shadow-[#5a2d8f]/20"
                >
                  Apply Now
                  <ArrowRight size={19} />
                </a>

                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition"
                >
                  Admission Process
                  <ChevronDown size={19} />
                </a>
              </div>
            </div>

            {/* Hero Admission Card */}
            <div className="relative">
              <div className="absolute -inset-5 bg-[#5a2d8f]/20 blur-3xl rounded-full" />

              <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-500 font-semibold">
                      Admission Enquiry
                    </p>

                    <h2 className="mt-1 text-2xl font-black">
                      Take the First Step
                    </h2>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#f3edf9] text-[#5a2d8f] flex items-center justify-center">
                    <GraduationCap size={26} />
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    ["01", "Choose your course"],
                    ["02", "Talk to our counsellor"],
                    ["03", "Select your batch"],
                    ["04", "Start your learning"],
                  ].map(([number, text]) => (
                    <div
                      key={number}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-50"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#5a2d8f] text-white flex items-center justify-center font-bold">
                        {number}
                      </div>

                      <span className="font-semibold text-slate-700">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-[#f3edf9]">
                  <MapPin className="text-[#5a2d8f] shrink-0" size={20} />

                  <div>
                    <p className="text-xs text-slate-500">Training Centre</p>

                    <p className="font-bold text-slate-800 text-sm">
                      647 Gram Sabha, Rohini Sector 23, Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="relative -mt-10 z-10 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="p-7 text-center border-r border-slate-100">
            <BookOpen className="mx-auto text-[#5a2d8f]" size={27} />

            <h3 className="mt-3 text-2xl font-black">20+</h3>

            <p className="text-sm text-slate-500 font-semibold">
              Skill Courses
            </p>
          </div>

          <div className="p-7 text-center lg:border-r border-slate-100">
            <Users className="mx-auto text-[#5a2d8f]" size={27} />

            <h3 className="mt-3 text-2xl font-black">Small</h3>

            <p className="text-sm text-slate-500 font-semibold">Batch Focus</p>
          </div>

          <div className="p-7 text-center border-r border-slate-100">
            <Zap className="mx-auto text-[#5a2d8f]" size={27} />

            <h3 className="mt-3 text-2xl font-black">Practical</h3>

            <p className="text-sm text-slate-500 font-semibold">Learning</p>
          </div>

          <div className="p-7 text-center">
            <LaptopIcon />

            <h3 className="mt-3 text-2xl font-black">10+</h3>

            <p className="text-sm text-slate-500 font-semibold">Computers</p>
          </div>
        </div>
      </section>

      {/*ADMISSION PROCESS */}
      <section
        id="process"
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28"
      >
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#5a2d8f] font-bold text-sm uppercase tracking-widest">
            Simple Admission Process
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black">
            Your Journey Starts
            <span className="text-[#5a2d8f]"> in 4 Steps</span>
          </h2>

          <p className="mt-5 text-slate-600 leading-7">
            We keep the admission process simple so you can focus on what
            matters most — learning.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative group p-7 bg-white rounded-2xl border border-slate-100 hover:border-[#d9c6ec] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#f3edf9] text-[#5a2d8f] flex items-center justify-center group-hover:bg-[#5a2d8f] group-hover:text-white transition">
                    <Icon size={26} />
                  </div>

                  <span className="text-4xl font-black text-slate-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 text-sm text-slate-600 leading-6">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/*  BENEFITS*/}
      <section className="bg-slate-50 py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#5a2d8f] font-bold text-sm uppercase tracking-widest">
                Why Start With Us?
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                More Than a Course.
                <span className="block text-[#5a2d8f]">
                  A Complete Learning Experience.
                </span>
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                IISL focuses on developing practical knowledge, confidence and
                career-oriented skills through structured training and guidance.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#5a2d8f] shrink-0 mt-0.5"
                    />

                    <span className="text-sm font-semibold text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 bg-linear-to-r from-[#5a2d8f]/20 to-[#d9b3ff]/20 blur-3xl rounded-full" />

              <div className="relative bg-[#1f1230] rounded-3xl p-7 sm:p-9">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#5a2d8f] flex items-center justify-center">
                    <ShieldCheck className="text-white" size={28} />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Learning Environment
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      Built for Growth
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    "Structured learning",
                    "Practical assignments",
                    "Project exposure",
                    "Trainer guidance",
                    "Career preparation",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#5a2d8f]/35 text-[#d9b3ff] flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                      <span className="text-slate-200 font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*    ADMISSION FORM */}
      <section
        id="admission-form"
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28"
      >
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          {/* LEFT INFO */}
          <div className="lg:sticky lg:top-24">
            <span className="text-[#5a2d8f] font-bold text-sm uppercase tracking-widest">
              Admission Enquiry
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-black leading-tight">
              Ready to Start
              <span className="block text-[#5a2d8f]">Your Journey?</span>
            </h2>

            <p className="mt-5 text-slate-600 leading-7">
              Fill out the form and our team can help you understand the
              available courses, learning options and admission process.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#eee5f7] text-[#5a2d8f] flex items-center justify-center">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-semibold">
                    Visit Us
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    647 Gram Sabha,
                    <br />
                    Rohini Sector 23, Delhi
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#eee5f7] text-[#5a2d8f] flex items-center justify-center">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-semibold">
                    Call / Enquiry
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    Contact our admission team
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#eee5f7] text-[#5a2d8f] flex items-center justify-center">
                  <Clock3 size={21} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-semibold">
                    Admission Support
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    Course & batch guidance available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-9">
            {submitted ? (
              <div className="min-h-125 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#f3edf9] text-[#5a2d8f] flex items-center justify-center">
                  <CheckCircle2 size={42} />
                </div>

                <h3 className="mt-6 text-3xl font-black">Enquiry Submitted!</h3>

                <p className="mt-4 max-w-md text-slate-600 leading-7">
                  Thank you for your interest in IISL. Our team will review your
                  enquiry and get in touch with you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 px-6 py-3 rounded-xl bg-[#5a2d8f] hover:bg-[#4b2378] text-white font-bold transition"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-black">
                    Admission Enquiry Form
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Please provide your details and course preference.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Full Name *
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#5a2d8f] focus:ring-4 focus:ring-[#5a2d8f]/10 transition"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Phone Number *
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter phone number"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#5a2d8f] focus:ring-4 focus:ring-[#5a2d8f]/10 transition"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#5a2d8f] focus:ring-4 focus:ring-[#5a2d8f]/10 transition"
                      />
                    </div>
                  </div>

                  {/* Qualification */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Qualification
                    </label>

                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      placeholder="e.g. 12th, Graduate, Student"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#5a2d8f] focus:ring-4 focus:ring-[#5a2d8f]/10 transition"
                    />
                  </div>

                  {/* Course */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Select Course *
                    </label>

                    <div className="relative">
                      <BookOpen
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />

                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="appearance-none w-full pl-11 pr-10 py-3.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#5a2d8f] focus:ring-4 focus:ring-[#5a2d8f]/10 transition"
                      >
                        <option value="">Select your course</option>

                        {courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={18}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Mode */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Learning Mode *
                    </label>

                    <select
                      name="mode"
                      value={formData.mode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#5a2d8f] focus:ring-4 focus:ring-[#5a2d8f]/10 transition"
                    >
                      <option value="">Select mode</option>

                      <option value="Offline">Offline</option>

                      <option value="Online">Online</option>

                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Message / Requirement
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your learning goal..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none resize-none focus:border-[#5a2d8f] focus:ring-4 focus:ring-[#5a2d8f]/10 transition"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold transition shadow-lg ${
                    loading
                      ? "bg-[#9b6ac2] cursor-not-allowed"
                      : "bg-[#5a2d8f] hover:bg-[#4b2378] shadow-[#5a2d8f]/20"
                  }`}
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      Submit Admission Enquiry
                      <ArrowRight size={19} />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  By submitting this form, you agree to be contacted regarding
                  your admission enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/*  FINAL CTA */}
      <section className="px-5 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-linear-to-br from-[#5a2d8f] via-[#4b2378] to-[#1f1230] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[#eadcf7] font-semibold">
              <Sparkles size={18} />
              IISL
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Your Next Chapter Starts Here.
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-[#eadcf7] leading-7">
              Choose your skill. Start learning. Build your confidence. Take the
              next step toward your goals.
            </p>

            <a
              href="#admission-form"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#4b2378] hover:bg-slate-100 font-bold transition"
            >
              Apply for Admission
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

//  SMALL LAPTOP ICON COMPONENT

const LaptopIcon = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#5a2d8f] mx-auto"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />

      <path d="M2 20h20" />
    </svg>
  );
};

export default Admission;
