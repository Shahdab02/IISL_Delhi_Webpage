// import React from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Globe,
//   Clock,
//   Send,
//   MessageCircle,
//   ArrowRight,
// } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}
//       <section className="relative overflow-hidden bg-linear-to-br from-[#eef1ff] via-white to-[#fff7ed]">
//         {/* Background Decoration */}
//         <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#4b2e83]/10 blur-3xl" />

//         <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-3 lg:py-24">
//           <div className="max-w-3xl">
//             {/* Small Badge */}
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4b2e83]/20 bg-white px-4 py-2 text-sm font-semibold text-[#4b2e83] shadow-sm">
//               <MessageCircle size={17} />
//               We're Here to Help
//             </div>

//             {/* Heading */}
//             <h1 className="text-4xl font-extrabold leading-tight text-[#172554] sm:text-5xl lg:text-6xl">
//               Let's Start Your{" "}
//               <span className="text-[#4b2e83]">Learning Journey</span>
//             </h1>

//             {/* Description */}
//             <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
//               Have questions about our courses, admissions, training programs,
//               internships, or career opportunities?
//               <span className="font-semibold text-slate-800">
//                 {" "}
//                 We're here to help.
//               </span>
//             </p>

//             {/* Buttons */}
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <a
//                 href="#contact-form"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4b2e83] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#4b2e83]/20 transition hover:-translate-y-1 hover:bg-[#3d256b]"
//               >
//                 Contact Us
//                 <ArrowRight size={18} />
//               </a>

//               <a
//                 href="https://wa.me/919310772538"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-500 bg-white px-6 py-3.5 font-semibold text-green-600 transition hover:-translate-y-1 hover:bg-green-50"
//               >
//                 <MessageCircle size={19} />
//                 WhatsApp Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CONTACT INFORMATION
//       ===================================================== */}
//       <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-3">
//         {/* Section Heading */}
//         <div className="mb-10 text-center">
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4b2e83]">
//             Get In Touch
//           </p>

//           <h2 className="mt-3 text-3xl font-extrabold text-[#172554] sm:text-4xl">
//             We'd Love To Hear From You
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-slate-600">
//             Whether you are a student, parent, working professional, school,
//             college, or organization, connect with our team.
//           </p>
//         </div>

//         {/* Contact Cards */}
//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {/* ================= PHONE ================= */}
//           <a
//             href="tel:+919310772538"
//             className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#4b2e83]/30 hover:shadow-xl"
//           >
//             <div className="flex size-3 items-center justify-center rounded-xl bg-[#4b2e83]/10 text-[#4b2e83] transition group-hover:bg-[#4b2e83] group-hover:text-white">
//               <Phone size={23} />
//             </div>

//             <h3 className="mt-5 text-lg font-bold text-slate-800">Call Us</h3>

//             <p className="mt-2 text-sm text-slate-500">
//               9310772538
//               <br />
//               8810282586
//             </p>
//           </a>

//           {/* ================= EMAIL ================= */}
//           <a
//             href="mailto:iisldelhi@gmail.com"
//             className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#4b2e83]/30 hover:shadow-xl"
//           >
//             <div className="flex size-3 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
//               <Mail size={23} />
//             </div>

//             <h3 className="mt-5 text-lg font-bold text-slate-800">Email Us</h3>

//             <p className="mt-2 break-all text-sm text-slate-500">
//               iisldelhi@gmail.com
//             </p>
//           </a>

//           {/* ================= LOCATION ================= */}
//           <a
//             href="https://www.google.com/maps/search/?api=1&query=647+Gram+Sabha+Rohini+Sector+23+Delhi"
//             target="_blank"
//             rel="noreferrer"
//             className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#4b2e83]/30 hover:shadow-xl"
//           >
//             <div className="flex size-3 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
//               <MapPin size={23} />
//             </div>

//             <h3 className="mt-5 text-lg font-bold text-slate-800">Visit Us</h3>

//             <p className="mt-2 text-sm leading-6 text-slate-500">
//               647 Gram Sabha,
//               <br />
//               Main Location,
//               <br />
//               Rohini Sector 23,
//               <br />
//               Delhi, India
//             </p>
//           </a>

//           {/* ================= WEBSITE ================= */}
//           <a
//             href="https://eduvisionworld.org"
//             target="_blank"
//             rel="noreferrer"
//             className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#4b2e83]/30 hover:shadow-xl"
//           >
//             <div className="flex size-3 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition group-hover:bg-blue-500 group-hover:text-white">
//               <Globe size={23} />
//             </div>

//             <h3 className="mt-5 text-lg font-bold text-slate-800">Website</h3>

//             <p className="mt-2 text-sm text-slate-500">eduvisionworld.org</p>
//           </a>
//         </div>
//       </section>

//       {/* =====================================================
//           CONTACT FORM SECTION
//       ===================================================== */}
//       <section id="contact-form" className="bg-white py-16 sm:py-20">
//         <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-3">
//           {/* ================= LEFT CONTENT ================= */}
//           <div className="flex flex-col justify-center">
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4b2e83]">
//               Contact Us
//             </p>

//             <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#172554] sm:text-4xl">
//               Have Questions?
//               <br />
//               <span className="text-[#4b2e83]">Let's Talk.</span>
//             </h2>

//             <p className="mt-5 max-w-lg leading-7 text-slate-600">
//               Fill out the form and our team will get back to you. We can help
//               you choose the right course, understand admission details, and
//               guide you toward your career goals.
//             </p>

//             {/* Working Hours */}
//             <div className="mt-8 space-y-5">
//               <div className="flex items-start gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4b2e83]/10 text-[#4b2e83]">
//                   <Clock size={21} />
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-slate-800">Working Hours</h4>

//                   <p className="mt-1 text-sm text-slate-500">
//                     Monday – Saturday
//                   </p>

//                   <p className="text-sm text-slate-500">9:00 AM – 7:00 PM</p>
//                 </div>
//               </div>

//               {/* WhatsApp */}
//               <div className="flex items-start gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
//                   <MessageCircle size={21} />
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-slate-800">Quick Support</h4>

//                   <p className="mt-1 text-sm text-slate-500">
//                     Connect with our team on WhatsApp.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ================= FORM ================= */}
//           <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl sm:p-8">
//             <form className="space-y-5">
//               {/* Name + Phone */}
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Your Name
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Phone Number
//                   </label>

//                   <input
//                     type="tel"
//                     placeholder="Enter phone number"
//                     className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10"
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-slate-700">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10"
//                 />
//               </div>

//               {/* Course */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-slate-700">
//                   Interested Course
//                 </label>

//                 <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-600 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10">
//                   <option value="">Select a course</option>

//                   <option>Basic Computer & MS Office</option>
//                   <option>Web Development</option>
//                   <option>Full Stack Development</option>
//                   <option>Digital Marketing</option>
//                   <option>English Spoken</option>
//                   <option>German Langg.</option>
//                   <option>French Langg.</option>
//                 </select>
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-slate-700">
//                   Your Message
//                 </label>

//                 <textarea
//                   rows="5"
//                   placeholder="Write your message..."
//                   className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10"
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4b2e83] px-6 py-4 font-bold text-white shadow-lg shadow-[#4b2e83]/20 transition hover:-translate-y-1 hover:bg-[#3d256b]"
//               >
//                 Send Message
//                 <Send size={18} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           GOOGLE MAP SECTION
//       ===================================================== */}
//       <section className="bg-slate-50 py-16">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-3">
//           {/* Heading */}
//           <div className="mb-8 text-center">
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4b2e83]">
//               Find Us
//             </p>

//             <h2 className="mt-2 text-3xl font-extrabold text-[#172554] sm:text-4xl">
//               Visit IISL
//             </h2>

//             <p className="mt-3 text-slate-600">
//               Come visit us and start your learning journey.
//             </p>
//           </div>

//           {/* Map */}
//           <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
//             <iframe
//               title="IISL Location"
//               src="https://www.google.com/maps?q=647%20Gram%20Sabha%2C%20Rohini%20Sector%2023%2C%20Delhi&output=embed"
//               className="h-87.5 w-full border-0 sm:h-112.5"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}
//       <section className="px-5 py-16 sm:px-8">
//         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-[#382166] to-[#5b3aa0] px-6 py-12 text-center shadow-2xl sm:px-10">
//           {/* Decorations */}
//           <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10" />

//           <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-orange-400/20" />

//           <div className="relative">
//             <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//               Ready to Build Your Future?
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
//               Join IISL and take the next step toward your education, skills and
//               career.
//             </p>

//             {/* Buttons */}
//             <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
//               {/* Call */}
//               <a
//                 href="tel:+919310772538"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-[#4b2e83] transition hover:-translate-y-1 hover:shadow-xl"
//               >
//                 <Phone size={18} />
//                 Call Now
//               </a>

//               {/* WhatsApp */}
//               <a
//                 href="https://wa.me/919310772538"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
//               >
//                 <MessageCircle size={18} />
//                 WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdeakaag");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#eef1ff] via-white to-[#fff7ed]">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#4b2e83]/10 blur-3xl" />
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-3 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4b2e83]/20 bg-white px-4 py-2 text-sm font-semibold text-[#4b2e83] shadow-sm">
              <MessageCircle size={17} />
              We're Here to Help
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-[#172554] sm:text-5xl lg:text-6xl">
              Let's Start Your{" "}
              <span className="text-[#4b2e83]">Learning Journey</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Have questions about our courses, admissions, training programs,
              internships, or career opportunities?
              <span className="font-semibold text-slate-800">
                {" "}
                We're here to help.
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4b2e83] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#4b2e83]/20 transition hover:-translate-y-1 hover:bg-[#3d256b]"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/919310772538"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-500 bg-white px-6 py-3.5 font-semibold text-green-600 transition hover:-translate-y-1 hover:bg-green-50"
              >
                <MessageCircle size={19} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-3">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4b2e83]">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#172554] sm:text-4xl">
            We'd Love To Hear From You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Whether you are a student, parent, working professional, school,
            college, or organization, connect with our team.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* PHONE */}
          <a
            href="tel:+919310772538"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#4b2e83]/30 hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4b2e83]/10 text-[#4b2e83] transition group-hover:bg-[#4b2e83] group-hover:text-white">
              <Phone size={23} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Call Us
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              9310772538
              <br />
              8810282586
            </p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:iisldelhi@gmail.com"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#4b2e83]/30 hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
              <Mail size={23} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Email Us
            </h3>

            <p className="mt-2 break-all text-sm text-slate-500">
              iisldelhi@gmail.com
            </p>
          </a>

          {/* LOCATION */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=647+Gram+Sabha+Rohini+Sector+23+Delhi"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#4b2e83]/30 hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
              <MapPin size={23} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Visit Us
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              647 Gram Sabha,
              <br />
              Main Location,
              <br />
              Rohini Sector 23,
              <br />
              Delhi, India
            </p>
          </a>

          {/* WEBSITE */}
          <a
            href="https://eduvisionworld.org"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#4b2e83]/30 hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition group-hover:bg-blue-500 group-hover:text-white">
              <Globe size={23} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Website
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              eduvisionworld.org
            </p>
          </a>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM SECTION
      ===================================================== */}
      <section id="contact-form" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-3">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4b2e83]">
              Contact Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#172554] sm:text-4xl">
              Have Questions?
              <br />
              <span className="text-[#4b2e83]">Let's Talk.</span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              Fill out the form and our team will get back to you. We can help
              you choose the right course, understand admission details, and
              guide you toward your career goals.
            </p>

            {/* Working Hours */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4b2e83]/10 text-[#4b2e83]">
                  <Clock size={21} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">
                    Working Hours
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Monday – Saturday
                  </p>

                  <p className="text-sm text-slate-500">
                    9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">
                    Quick Support
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Connect with our team on WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl sm:p-8">
            {state.succeeded ? (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Send size={28} />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-800">
                  Message Sent Successfully!
                </h3>

                <p className="mt-3 max-w-md text-slate-600">
                  Thank you for contacting IISL. Our team will get back to you
                  as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10"
                    />

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10"
                    />

                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Course */}
                <div>
                  <label
                    htmlFor="course"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Interested Course
                  </label>

                  <select
                    id="course"
                    name="course"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-600 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10"
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    <option value="Basic Computer & MS Office">
                      Basic Computer & MS Office
                    </option>
                    <option value="Web Development">
                      Web Development
                    </option>
                    <option value="Full Stack Development">
                      Full Stack Development
                    </option>
                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>
                    <option value="English Spoken">
                      English Spoken
                    </option>
                    <option value="German Language">
                      German Language
                    </option>
                    <option value="French Language">
                      French Language
                    </option>
                  </select>

                  <ValidationError
                    prefix="Course"
                    field="course"
                    errors={state.errors}
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-[#4b2e83] focus:ring-4 focus:ring-[#4b2e83]/10"
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Form-level Error */}
                <ValidationError
                  errors={state.errors}
                  className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4b2e83] px-6 py-4 font-bold text-white shadow-lg shadow-[#4b2e83]/20 transition hover:-translate-y-1 hover:bg-[#3d256b] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state.submitting ? "Sending..." : "Send Message"}

                  {!state.submitting && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          GOOGLE MAP SECTION
      ===================================================== */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-3">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4b2e83]">
              Find Us
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#172554] sm:text-4xl">
              Visit IISL
            </h2>

            <p className="mt-3 text-slate-600">
              Come visit us and start your learning journey.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <iframe
              title="IISL Location"
              src="https://www.google.com/maps?q=647%20Gram%20Sabha%2C%20Rohini%20Sector%2023%2C%20Delhi&output=embed"
              className="h-87.5 w-full border-0 sm:h-112.5"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-5 py-16 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-[#382166] to-[#5b3aa0] px-6 py-12 text-center shadow-2xl sm:px-10">
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-orange-400/20" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Build Your Future?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
              Join IISL and take the next step toward your education, skills
              and career.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+919310772538"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-[#4b2e83] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="https://wa.me/919310772538"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

