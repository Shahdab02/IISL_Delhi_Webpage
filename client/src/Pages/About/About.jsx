// import {
//   Award,
//   BookOpen,
//   BriefcaseBusiness,
//   CheckCircle2,
//   Code2,
//   GraduationCap,
//   Laptop,
//   Languages,
//   MapPin,
//   Rocket,
//   Sparkles,
//   Target,
//   Users,
//   Zap,
// } from "lucide-react";
// import certificate from "../../assets/nsdc_certificate.jpeg"

// const About = () => {
//   const courses = [
//     {
//       icon: Laptop,
//       title: "Basic Computer",
//       description:
//         "Build strong computer fundamentals, office productivity skills, typing, MS Word and essential digital skills.",
//     },
//     {
//       icon: BriefcaseBusiness,
//       title: "Digital Marketing",
//       description:
//         "Learn modern digital marketing concepts including social media, SEO, content marketing, advertising and analytics.",
//     },
//     {
//       icon: Code2,
//       title: "Full Stack Development",
//       description:
//         "Learn frontend, backend, databases, APIs and practical web development through project-based learning.",
//     },
//     {
//       icon: Languages,
//       title: "English Spoken",
//       description:
//         "Improve spoken English, vocabulary, grammar, pronunciation and professional communication confidence.",
//     },
//     {
//       icon: Languages,
//       title: "German Language",
//       description:
//         "Develop practical German language skills for communication, education, travel and professional opportunities.",
//     },
//     {
//       icon: Languages,
//       title: "French Language",
//       description:
//         "Learn French pronunciation, vocabulary, grammar, listening and everyday conversation skills.",
//     },
//   ];

//   const values = [
//     {
//       icon: Target,
//       title: "Career Focused",
//       text: "Our learning approach focuses on practical skills that students can use in academic and professional environments.",
//     },
//     {
//       icon: Laptop,
//       title: "Practical Learning",
//       text: "Students learn through hands-on practice, exercises, assignments and real-world applications.",
//     },
//     {
//       icon: Users,
//       title: "Personal Guidance",
//       text: "We encourage interaction, doubt solving and individual guidance to support every learner.",
//     },
//     {
//       icon: Rocket,
//       title: "Future Ready",
//       text: "We focus on relevant technology, communication and professional skills for today's changing world.",
//     },
//   ];

//   const promises = [
//     "Practical and hands-on training",
//     "Beginner to advanced learning",
//     "Supportive and experienced trainers",
//     "Modern computer learning environment",
//     "Real-world project exposure",
//     "Personal doubt-solving support",
//     "Interview and career guidance",
//     "Placement support",
//   ];

//   return (
//     <main className="overflow-hidden bg-white text-slate-900">
     
//       <section className="relative flex min-h-162.5 items-center overflow-hidden bg-slate-950">
//         {/* Background Effects */}
//         <div className="absolute inset-0">
//           <div className="absolute -left-40 -top-40 h-125 w-125 rounded-full bg-blue-600/30 blur-3xl" />
//           <div className="absolute -right-32 top-20 h-125 w-125 rounded-full bg-cyan-500/20 blur-3xl" />
//           <div className="absolute -bottom-48 left-[35%] h-125 w-125 rounded-full bg-blue-600/20 blur-3xl" />

//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.04) 1px, transparent 1px)",
//               backgroundSize: "28px 28px",
//             }}
//           />
//         </div>

//         <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
//           <div className="max-w-4xl">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-300 backdrop-blur-md">
//               <Sparkles size={16} />
//               About Indian Institute of Skills & Languages
//             </div>

//             {/* Heading */}
//             <h1 className="mt-7 text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-7xl">
//               Learn Skills.
//               <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 Build Your Future.
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
//               Indian Institute of Skills & Languages (IISL) is a skill-focused
//               education institute dedicated to practical computer education,
//               digital skills, full stack development and language learning.
//             </p>

//             {/* Location */}
//             <div className="mt-8 flex items-center gap-2 text-slate-300">
//               <MapPin size={19} className="text-cyan-400" />
//               <span>647 Gram Sabha, Rohini Sector 23, Delhi</span>
//             </div>

//             {/* Buttons */}
//             <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//               <a
//                 href="/courses"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
//               >
//                 Explore Courses
//                 <BookOpen size={19} />
//               </a>

//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10"
//               >
//                 Contact Us
//                 <MapPin size={19} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//      {/* status */}
//       <section className="relative z-10 -mt-12 px-5">
//         <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl lg:grid-cols-4">
//           {/* Stat 1 */}
//           <div className="border-r border-slate-100 p-7 text-center">
//             <div className="flex justify-center">
//               <Laptop className="text-blue-600" size={28} />
//             </div>

//             <h3 className="mt-3 text-3xl font-black text-slate-900">10+</h3>

//             <p className="mt-1 text-sm font-semibold text-slate-500">
//               Computers
//             </p>
//           </div>

//           {/* Stat 2 */}
//           <div className="border-r border-slate-100 p-7 text-center">
//             <div className="flex justify-center">
//               <BookOpen className="text-blue-600" size={28} />
//             </div>

//             <h3 className="mt-3 text-3xl font-black text-slate-900">6</h3>

//             <p className="mt-1 text-sm font-semibold text-slate-500">
//               Career Courses
//             </p>
//           </div>

//           {/* Stat 3 */}
//           <div className="border-r border-slate-100 p-7 text-center">
//             <div className="flex justify-center">
//               <Code2 className="text-blue-600" size={28} />
//             </div>

//             <h3 className="mt-3 text-3xl font-black text-slate-900">100%</h3>

//             <p className="mt-1 text-sm font-semibold text-slate-500">
//               Practical Focus
//             </p>
//           </div>

//           {/* Stat 4 */}
//           <div className="p-7 text-center">
//             <div className="flex justify-center">
//               <BriefcaseBusiness className="text-blue-600" size={28} />
//             </div>

//             <h3 className="mt-3 text-2xl font-black text-slate-900">Support</h3>

//             <p className="mt-1 text-sm font-semibold text-slate-500">
//               Placement Assistance
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* who we are*/}
//       <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-12">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* LEFT */}
//           <div>
//             <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
//               Who We Are
//             </span>

//             <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
//               Education That Goes
//               <span className="block text-blue-600">
//                 Beyond the Classroom.
//               </span>
//             </h2>

//             <p className="mt-7 text-lg leading-8 text-slate-600">
//               Indian Institute of Skills & Languages (IISL) is a computer
//               education, digital skills and language learning institute based in
//               Rohini Sector 23, Delhi.
//             </p>

//             <p className="mt-5 leading-8 text-slate-600">
//               Our goal is to make learning practical, accessible and
//               career-oriented. We help students develop technical knowledge,
//               communication skills and confidence through structured training.
//             </p>

//             <p className="mt-5 leading-8 text-slate-600">
//               Our courses are designed for learners at different levels, from
//               beginners who want to build strong fundamentals to learners who
//               want to develop advanced technical and professional skills.
//             </p>

//             {/* Highlight */}
//             <div className="mt-8 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600">
//                 <GraduationCap className="text-white" size={25} />
//               </div>

//               <div>
//                 <h3 className="font-bold text-slate-900">
//                   Learn • Practice • Build • Grow
//                 </h3>

//                 <p className="mt-1 text-sm leading-6 text-slate-600">
//                   A learning approach focused on practical knowledge, confidence
//                   and career preparation.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CARD */}
//           <div className="relative">
//             <div className="absolute -inset-5 rounded-3xl bg-linear-to-r from-blue-500/20 to-cyan-400/20 blur-3xl" />

//             <div className="relative rounded-3xl bg-slate-950 p-7 shadow-2xl sm:p-9">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
//                   <GraduationCap className="text-white" size={30} />
//                 </div>

//                 <div>
//                   <p className="text-sm text-slate-400">
//                     Our Learning Philosophy
//                   </p>

//                   <h3 className="text-xl font-bold text-white sm:text-2xl">
//                     Learn • Practice • Build • Grow
//                   </h3>
//                 </div>
//               </div>

//               <div className="mt-9 space-y-5">
//                 {[
//                   [
//                     "01",
//                     "Learn",
//                     "Understand concepts with clear and structured guidance.",
//                   ],
//                   [
//                     "02",
//                     "Practice",
//                     "Apply knowledge through practical exercises and activities.",
//                   ],
//                   [
//                     "03",
//                     "Build",
//                     "Create projects and develop useful real-world skills.",
//                   ],
//                   [
//                     "04",
//                     "Grow",
//                     "Develop confidence and prepare for professional opportunities.",
//                   ],
//                 ].map(([number, title, text]) => (
//                   <div
//                     key={number}
//                     className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4"
//                   >
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 font-bold text-blue-300">
//                       {number}
//                     </div>

//                     <div>
//                       <h4 className="font-bold text-white">{title}</h4>

//                       <p className="mt-1 text-sm leading-6 text-slate-400">
//                         {text}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 
//           OUR COURSES
//       */}
//       <section className="bg-slate-50 py-24">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
//               Our Courses
//             </span>

//             <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
//               Skills Designed for
//               <span className="text-blue-600"> Real Opportunities</span>
//             </h2>

//             <p className="mt-5 leading-7 text-slate-600">
//               Explore our focused courses designed to help learners develop
//               technical, digital and communication skills.
//             </p>
//           </div>

//           {/* Course Cards */}
//           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {courses.map((course) => {
//               const Icon = course.icon;

//               return (
//                 <div
//                   key={course.title}
//                   className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
//                       <Icon size={27} />
//                     </div>

//                     <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-600">
//                       Career Focused
//                     </span>
//                   </div>

//                   <h3 className="mt-6 text-xl font-black text-slate-900">
//                     {course.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-600">
//                     {course.description}
//                   </p>

//                   <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
//                     <CheckCircle2 size={17} />
//                     Practical Learning
//                   </div>

//                   <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-blue-600">
//                     <CheckCircle2 size={17} />
//                     Placement Support
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 
//           OUR APPROACH
//        */}
//       <section className="bg-white py-24">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="max-w-3xl">
//             <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
//               Our Approach
//             </span>

//             <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
//               Learn Skills You Can
//               <span className="text-blue-600"> Actually Use.</span>
//             </h2>

//             <p className="mt-5 leading-7 text-slate-600">
//               Our training combines concepts, practical sessions, assignments,
//               projects and career guidance.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 icon: BookOpen,
//                 number: "01",
//                 title: "Learn",
//                 text: "Build strong fundamentals with structured lessons and trainer guidance.",
//               },
//               {
//                 icon: Laptop,
//                 number: "02",
//                 title: "Practice",
//                 text: "Apply concepts through practical exercises and hands-on sessions.",
//               },
//               {
//                 icon: Code2,
//                 number: "03",
//                 title: "Build",
//                 text: "Work on practical tasks and projects to strengthen your skills.",
//               },
//               {
//                 icon: Rocket,
//                 number: "04",
//                 title: "Grow",
//                 text: "Develop confidence and prepare for career opportunities.",
//               },
//             ].map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.number}
//                   className="group rounded-2xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
//                       <Icon size={26} />
//                     </div>

//                     <span className="text-4xl font-black text-slate-100 group-hover:text-blue-100">
//                       {item.number}
//                     </span>
//                   </div>

//                   <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-600">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 
//           CORE VALUES
//        */}
//       <section className="bg-slate-950 py-24">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="text-sm font-bold uppercase tracking-widest text-blue-400">
//               Our Core Values
//             </span>

//             <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
//               What We Believe In
//             </h2>

//             <p className="mt-5 leading-7 text-slate-400">
//               Our learning environment is built around practical education,
//               student support and continuous growth.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {values.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
//                     <Icon className="text-white" size={26} />
//                   </div>

//                   <h3 className="mt-6 text-xl font-bold text-white">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-400">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 
//           VISION & MISSION
//      */}
//       <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
//         <div className="grid gap-7 lg:grid-cols-2">
//           {/* Vision */}
//           <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 sm:p-10">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
//               <Target className="text-white" size={27} />
//             </div>

//             <h2 className="mt-7 text-3xl font-black">Our Vision</h2>

//             <p className="mt-5 leading-8 text-slate-600">
//               To create a trusted learning environment where students can
//               develop practical computer, digital and language skills and gain
//               the confidence needed for future academic and professional
//               opportunities.
//             </p>
//           </div>

//           {/* Mission */}
//           <div className="rounded-3xl bg-slate-950 p-8 sm:p-10">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
//               <Rocket className="text-white" size={27} />
//             </div>

//             <h2 className="mt-7 text-3xl font-black text-white">Our Mission</h2>

//             <p className="mt-5 leading-8 text-slate-400">
//               To bridge the gap between education and practical skills by
//               providing structured training, hands-on learning, mentorship and
//               career-oriented guidance across technology, digital and language
//               learning.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* OUR PROMISE */}
//       <section className="bg-slate-50 py-24">
//         <div className="mx-auto max-w-6xl px-5 sm:px-8">
//           <div className="text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
//               <Award className="text-white" size={30} />
//             </div>

//             <h2 className="mt-6 text-3xl font-black sm:text-4xl">
//               Our Promise to Every Learner
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
//               We are committed to creating a supportive environment where
//               students can learn, practice, improve and prepare for their next
//               opportunity.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {promises.map((promise) => (
//               <div
//                 key={promise}
//                 className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//               >
//                 <CheckCircle2 size={20} className="shrink-0 text-blue-600" />

//                 <span className="text-sm font-semibold text-slate-700">
//                   {promise}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//      {/* final */}
//       <section className="px-5 py-20">
//         <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 p-8 text-center sm:p-12 lg:p-16">
//           <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
//           <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

//           <div className="relative">
//             <div className="inline-flex items-center gap-2 font-semibold text-blue-100">
//               <Zap size={18} />
//               Your Future Starts With a Skill
//             </div>

//             <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
//               Learn Today.
//               <span className="block">Build Tomorrow.</span>
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
//               Start your learning journey with Indian Institute of Skills &
//               Languages and develop practical skills for your future.
//             </p>

//             <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//               <a
//                 href="/courses"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
//               >
//                 Explore Courses
//                 <BookOpen size={19} />
//               </a>

//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
//               >
//                 Get in Touch
//                 <MapPin size={19} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;





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
  ShieldCheck,
  Clock,
  Building2,
  FileCheck2,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import certificate from "../../assets/nsdc_certificate.jpeg";
import marketingCertificate from "../../assets/optimized/marketing_certificate.webp";

const courses = [
  {
    icon: Laptop,
    title: "Basic Computer & MS Office",
    category: "Computer Education",
    description:
      "Build strong computer fundamentals, typing, MS Word, Excel, PowerPoint, internet skills and everyday digital confidence.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Digital Marketing",
    category: "Digital Skills",
    description:
      "Learn SEO, social media marketing, Google Ads, Meta Ads, content marketing and digital campaign management.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    category: "Technology",
    description:
      "Develop frontend and backend skills with HTML, CSS, JavaScript, React, Node.js, databases, APIs and practical projects.",
  },
  {
    icon: Languages,
    title: "English Speaking",
    category: "Language Learning",
    description:
      "Improve spoken English, vocabulary, grammar, pronunciation, communication and interview confidence.",
  },
  {
    icon: Languages,
    title: "German Language",
    category: "Foreign Languages",
    description:
      "Learn German vocabulary, grammar, pronunciation and everyday conversations for education, travel and professional goals.",
  },
  {
    icon: Languages,
    title: "French Language",
    category: "Foreign Languages",
    description:
      "Develop French speaking, listening, reading and writing skills through structured language practice.",
  },
];

const values = [
  {
    icon: Target,
    title: "Career-Oriented Learning",
    text: "We focus on developing useful skills that support academic growth and professional development.",
  },
  {
    icon: Laptop,
    title: "Practical Education",
    text: "Students get opportunities to apply concepts through exercises, assignments and hands-on practice.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    text: "We encourage questions, interaction and individual guidance throughout the learning journey.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    text: "We help learners build confidence, improve their abilities and prepare for future opportunities.",
  },
];

const promises = [
  "Practical and hands-on learning",
  "Beginner-friendly teaching approach",
  "Guidance from trainers",
  "Computer-based learning environment",
  "Assignments and project exposure",
  "Doubt-solving support",
  "Communication and interview guidance",
  "Placement assistance",
];

const learningSteps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Understand concepts through structured lessons and trainer guidance.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Strengthen your knowledge through practical exercises and activities.",
    icon: Laptop,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Work on assignments and projects to develop useful real-world skills.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Improve your confidence and prepare for academic and career opportunities.",
    icon: Rocket,
  },
];

const credentialDetails = [
  ["Trainer Name", "Sumit Aggarwal"],
  ["Trainer ID", "TRB696049"],
  ["Assessment Result", "Successfully Cleared"],
  ["Trainer Grade", "Grade B"],
  ["Qualification", "Assistant Mason"],
  ["Qualification Pack", "ICE/CON/Q0102 – Version 3.0"],
  ["NSQF Level", "Level 3"],
  [
    "Issuing Organisation",
    "Integrated Council for Entrepreneurship and Skilling (ICES)",
  ],
  ["Date of Issue", "04 November 2026"],
  ["Valid Up To", "04 November 2028"],
];

const About = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[580px] items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/25 blur-3xl" />
          <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-3xl" />

          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur">
              <Sparkles size={17} />
              Welcome to Indian Institute of Skills & Languages
            </div>

            <h1 className="mt-7 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Learn Skills.
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Build Your Future.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              At IISL, we believe that education should prepare you for real
              opportunities. Develop practical computer, technology, digital
              marketing and language skills through structured learning,
              hands-on practice and personal guidance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <MapPin size={19} className="text-cyan-400" />
              647 Gram Sabha, Rohini Sector 23, Delhi – 110086
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore Our Courses
                <BookOpen size={19} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Enquire for Admission
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* INSTITUTE HIGHLIGHTS */}
      <section className="relative z-10 -mt-12 px-5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl lg:grid-cols-4">
          {[
            { icon: Laptop, number: "10+", label: "Computers" },
            { icon: BookOpen, number: "6", label: "Featured Courses" },
            { icon: Code2, number: "Practical", label: "Learning Approach" },
            {
              icon: BriefcaseBusiness,
              number: "Career",
              label: "Placement Assistance",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="border-b border-r border-slate-100 p-6 text-center last:border-r-0 sm:p-7 lg:border-b-0"
              >
                <Icon className="mx-auto text-blue-600" size={29} />
                <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
                  {item.number}
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              More Than Education.
              <span className="block text-blue-600">
                A Step Towards Your Future.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Indian Institute of Skills & Languages (IISL) is a skill-focused
              educational institute located in Rohini, Delhi. We aim to make
              quality skill development accessible to students, beginners,
              freshers and working professionals.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our learning programmes cover computer education, full stack
              development, digital marketing, English communication and foreign
              languages. We combine structured lessons with practical activities
              to help students understand not just what to learn, but how to
              apply it.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you are starting your first computer course, preparing for
              a professional career or improving your communication skills, IISL
              provides a supportive environment to help you progress with
              confidence.
            </p>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex items-start gap-3">
                <BriefcaseBusiness
                  size={21}
                  className="mt-0.5 shrink-0 text-blue-700"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-bold text-slate-900">
                    More than a training institute
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    IISL also works as a digital agency, helping businesses
                    with website development, SEO, advertising, e-commerce and
                    social media.
                  </p>
                  <a
                    href="/tech-service"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:underline"
                  >
                    Explore agency services
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                <GraduationCap className="text-white" size={26} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Learn • Practice • Build • Grow
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Our approach focuses on practical knowledge, personal guidance
                  and continuous improvement.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl bg-slate-950 p-7 shadow-2xl sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                  <GraduationCap className="text-white" size={30} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">
                    Our Learning Philosophy
                  </p>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Education With Purpose
                  </h3>
                </div>
              </div>

              <div className="mt-9 space-y-5">
                {learningSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">
                          {step.number}. {step.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NSDC / SKILL INDIA TRAINER CREDENTIAL */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300">
              <ShieldCheck size={17} />
              Trainer Qualification & Credential
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Recognised Skill Development.
              <span className="block text-amber-400">
                A Commitment to Better Learning.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              At IISL, we value professional development and skill-based
              education. We are proud to showcase the trainer credential of
              Sumit Aggarwal, carrying Skill India and NSDC branding, for his
              successfully cleared trainer assessment.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* CERTIFICATE IMAGE */}
            <div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white p-3 shadow-2xl sm:p-5">
                <a
                  href={certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View full trainer certificate"
                >
                  <img
                    src={certificate}
                    alt="Skill India and NSDC branded trainer certificate of Sumit Aggarwal"
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full rounded-xl object-contain transition duration-300 hover:scale-[1.01]"
                  />
                </a>
              </div>

              <p className="mt-4 text-center text-sm text-slate-400">
                Official certificate image displayed for public information.
                Click the image to view it in full size.
              </p>
            </div>

            {/* CERTIFICATE DETAILS */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15">
                  <Award className="text-amber-400" size={30} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                    Certified Trainer
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    Sumit Aggarwal
                  </h3>
                </div>
              </div>

              <p className="mt-6 leading-7 text-slate-300">
                The certificate records successful completion of the trainer
                assessment for the Assistant Mason qualification, with a Grade B
                result, under NSQF Level 3.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                {credentialDetails.map(([label, value], index) => (
                  <div
                    key={label}
                    className={`flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-start sm:justify-between sm:gap-5 ${
                      index !== credentialDetails.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="text-sm font-semibold text-white sm:max-w-[60%] sm:text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
                <FileCheck2
                  size={22}
                  className="mt-0.5 shrink-0 text-amber-400"
                />
                <div>
                  <h4 className="font-bold text-amber-300">
                    Certificate Information
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Issuing organisation shown on the certificate: Integrated
                    Council for Entrepreneurship and Skilling (ICES). The
                    credential relates to the named trainer and the specific
                    Assistant Mason qualification.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                Transparency note: This is an individual trainer credential. It
                does not represent institute-wide NSDC accreditation,
                affiliation or NSDC certification of every IISL course. Students
                should check the specific certification offered for their chosen
                course before admission.
              </p>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12">
            <a
              href={marketingCertificate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Dr. Sumit Aggarwal's Social Media Marketing certificate at full size"
              className="group rounded-2xl bg-slate-950 p-2 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-amber-950/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 sm:p-3"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-slate-900 sm:aspect-[3/2]">
                <img
                  src={marketingCertificate}
                  alt="Certificate of excellence awarded to Dr. Sumit Aggarwal for completing Social Media Marketing and passing the skill test"
                  width="2339"
                  height="1654"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="flex items-center justify-between gap-3 px-2 pb-1 pt-4 text-sm font-semibold text-amber-200">
                Social Media Marketing Certificate
                <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-slate-300 transition group-hover:text-white sm:text-sm">
                  View full size
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </span>
            </a>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300">
                <Award size={17} aria-hidden="true" />
                Social Media Marketing
              </span>
              <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">
                Practical skills start with curious trainers.
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Our instructor completed Social Media Marketing training and
                passed the skill test. This individual credential reflects a
                commitment to continued learning and helps students see the
                value of building relevant digital skills.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                This is an individual trainer credential, not an institute-wide
                accreditation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COURSES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              What You Can Learn
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Choose the Right Skills.
              <span className="text-blue-600"> Shape Your Career.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore our learning programmes designed to develop computer,
              technology, digital marketing and communication skills.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <div
                  key={course.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">
                    {course.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    <CheckCircle2 size={17} />
                    Practical Learning Approach
                  </div>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:text-blue-600"
                  >
                    Enquire About This Course
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              View All Course Details
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE IISL */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Why Choose IISL?
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              A Better Learning Experience
              <span className="text-blue-600"> Starts Here.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We focus on the things that matter to students and their families:
              quality learning, guidance, practical exposure and a supportive
              environment.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-7 transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                    <Icon className="text-white" size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOR PARENTS AND STUDENTS */}
      <section className="bg-blue-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              For Students & Parents
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Your Learning Journey.
              <span className="block text-blue-600">Our Guidance.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Choosing an institute is an important decision. At IISL, we
              encourage students and parents to understand the course, training
              approach and learning outcomes before admission.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                <GraduationCap className="text-white" size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-black">For Students</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Build confidence and develop skills that support your education
                and career goals.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Learn at your current skill level",
                  "Develop practical computer skills",
                  "Work on assignments and projects",
                  "Improve communication and confidence",
                  "Receive guidance for career preparation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-amber-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 shadow-xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500">
                <ShieldCheck className="text-white" size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-black text-white">
                For Parents
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                We believe parents should have clear information about the
                education and training their children receive.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Clear course information before admission",
                  "Guidance on suitable learning programmes",
                  "Practical learning and skill development",
                  "Supportive trainer interaction",
                  "Career and placement assistance information",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm font-medium text-slate-300"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-amber-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-7 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-400">
                We encourage parents to visit the institute, discuss course
                details and understand the learning process before making an
                admission decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
              <Award className="text-white" size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
              Our Promise to Every Learner
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              We aim to create an environment where every learner can
              understand, practice, improve and move forward with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise) => (
              <div
                key={promise}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <CheckCircle2 size={20} className="shrink-0 text-amber-400" />
                <span className="text-sm font-semibold text-slate-200">
                  {promise}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-7 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
              <Target className="text-white" size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-black">Our Vision</h2>

            <p className="mt-5 leading-8 text-slate-600">
              To become a trusted destination for practical skill development
              and career-oriented education, empowering learners with the
              knowledge, confidence and abilities needed to pursue their
              aspirations.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
              <Rocket className="text-white" size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-black text-white">Our Mission</h2>

            <p className="mt-5 leading-8 text-slate-400">
              To bridge the gap between theoretical education and practical
              skills by providing structured training, hands-on learning,
              personal guidance and career-focused education across technology,
              digital and language programmes.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Visit Our Institute
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Your Next Step Starts
              <span className="text-blue-600"> at IISL.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Visit us to discuss your interests, explore available courses and
              understand how our training programmes can support your goals.
            </p>

            <div className="mt-7 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <MapPin className="mt-1 shrink-0 text-blue-600" size={25} />
              <div>
                <h3 className="font-bold text-slate-900">
                  Indian Institute of Skills & Languages
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  647, Gram Sabha Main Road, Near Rohini Sector-23, Pooth Kalan,
                  Delhi – 110086, India.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Contact IISL
              <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Building2 size={29} />
            </div>

            <h3 className="mt-6 text-2xl font-black">
              Start With the Right Course
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Not sure which course is right for you? Talk to our team. We can
              help you understand available programmes, learning levels and
              admission information.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <BookOpen size={19} className="text-blue-600" />
                Course and fee information
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <Users size={19} className="text-blue-600" />
                Personal admission guidance
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <Clock size={19} className="text-blue-600" />
                Batch and schedule information
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL ADMISSION CTA */}
      <section className="px-5 py-20">
        <div className="brand-gradient relative mx-auto max-w-6xl overflow-hidden rounded-3xl p-8 text-center shadow-2xl sm:p-12 lg:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 font-semibold text-blue-100">
              <Zap size={18} />
              Your Future Starts With a Skill
            </div>

            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Don't Just Learn.
              <span className="block">Build Your Future.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
              Take the first step towards your goals with Indian Institute of
              Skills & Languages. Explore our courses and begin your learning
              journey with practical training and personal guidance.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
              >
                Explore Courses
                <BookOpen size={19} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
              >
                Admission Enquiry
                <MessageCircle size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
