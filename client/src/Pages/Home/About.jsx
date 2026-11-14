

import {
  ArrowUpRight,
  BookOpen,
  MapPin,
  Award,
  CheckCircle2,
} from "lucide-react";
import trainerCert from "../../assets/nsdc_certificate.jpeg";

const learningAreas = [
  "Computer & professional education",
  "Digital skills and web development",
  "English and foreign language training",
  "Practical, career-focused learning",
];

const About = () => (
  <section className="bg-slate-50 px-5 py-14 text-slate-900 sm:px-8 lg:py-20">
    <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Trainer Certification */}
      <div className="relative">
        <div className="about-logo-panel flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-3 shadow-md sm:p-6">
          <img
            src={trainerCert}
            alt="NSDC Skill India Certified Trainer Certificate"
            width="1000"
            height="666"
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-xl border border-amber-100 bg-white px-4 py-3 shadow-lg sm:left-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
            <Award className="text-amber-700" size={23} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">
              NSDC / Skill India
            </p>
            <p className="text-xs text-slate-500">
              Certified Trainer Credential
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="pt-5 lg:pt-0">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
          About IISL
        </p>

        <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
          Learn Today. Build Skills. Shape Your Future.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-slate-600">
          At <strong>Indian Institute of Skills & Languages (IISL)</strong>, we
          believe that the right skills can transform your future. Located in
          Rohini, Delhi, we provide practical, career-focused training designed
          to help students develop real-world knowledge, professional confidence
          and industry-relevant skills.
        </p>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          From computer education and web development to digital skills and
          foreign languages, our learning approach focuses on practical
          understanding, personal guidance and continuous improvement. Whether
          you are a student, fresher or working professional, IISL helps you
          take the next step towards your goals.
        </p>

        {/* Learning Areas */}
        <ul className="mt-7 grid gap-4 sm:grid-cols-2">
          {learningAreas.map((area) => (
            <li
              key={area}
              className="flex items-start gap-3 text-sm font-semibold text-slate-700"
            >
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-amber-700"
                aria-hidden="true"
              />
              {area}
            </li>
          ))}
        </ul>

        {/* Trust Message */}
        <div className="about-trust-panel mt-7 rounded-xl border border-amber-100 bg-amber-50/70 p-4">
          <div className="flex items-start gap-3">
            <Award size={22} className="mt-0.5 shrink-0 text-amber-700" />
            <div>
              <h3 className="about-trust-heading font-bold text-slate-900">
                Commitment to Quality Skill Development
              </h3>
              <p className="about-trust-description mt-1 text-sm leading-6 text-slate-600">
                Our focus is on practical education, structured learning and
                qualified trainer guidance. We value recognised
                skill-development credentials and continuous learning.
              </p>
            </div>
          </div>
        </div>

        {/* Address */}
        <p className="mt-7 flex items-center gap-2 text-sm font-medium text-slate-600">
          <MapPin
            size={19}
            className="shrink-0 text-amber-700"
            aria-hidden="true"
          />
          647 Gram Sabha, Rohini Sector 23, Delhi - 110086
        </p>

        {/* CTA */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-700 px-5 py-3 font-bold text-white transition hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
          >
            Discover IISL
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>

          <a
            href="/courses"
            className="inline-flex items-center gap-2 rounded-lg border border-amber-700 px-5 py-3 font-bold text-amber-800 transition hover:bg-amber-50"
          >
            Explore Courses
            <BookOpen size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
