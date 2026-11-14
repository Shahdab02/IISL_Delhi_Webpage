import { ArrowUpRight, Award, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import marketingCertificate from '../../assets/optimized/marketing_certificate.webp'
import Slider from './Slider'
import WhyUs from './WhyUs'
import About from './About'
import Placement from './Placement'
import Transportation from './Transportation'
import Team from './Team'

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="bg-white px-5 py-14 text-slate-900 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0B3D91]">
              One IISL. Two ways to grow.
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              A training institute for people.
              <span className="block text-[#0B3D91]">
                A digital agency for businesses.
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              IISL helps learners build practical skills and helps businesses
              grow online with websites, SEO, digital advertising and social
              media services.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                <GraduationCap size={25} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-bold">Training Institute</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Practical computer, technology, digital marketing and language
                courses with trainer guidance in Rohini, Delhi.
              </p>
              <a
                href="/courses"
                className="mt-5 inline-flex items-center gap-2 font-bold text-[#0B3D91] hover:underline"
              >
                Explore courses
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>

            <article className="rounded-3xl border border-[#0B3D91]/20 bg-[#071b38] p-6 text-white sm:p-8">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#4DA3FF]/15 text-[#4DA3FF]">
                <BriefcaseBusiness size={24} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-bold">Digital Agency</h2>
              <p className="mt-3 leading-7 text-white/70">
                Business websites, SEO, Google and Meta Ads, e-commerce and
                social media support—all tailored to your goals.
              </p>
              <a
                href="/Agency-service"
                className="mt-5 inline-flex items-center gap-2 font-bold text-[#8fc8ff] hover:underline"
              >
                Explore agency services
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </section>
      <About />
      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-24">
        <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-amber-300">
              <Award size={17} aria-hidden="true" />
              Instructor achievement
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Better learning starts with lifelong learning.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Our instructor completed Social Media Marketing training and
              passed the skill test. We believe curious, continually learning
              trainers help inspire confident students.
            </p>
            <a
              href="/courses"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Explore courses
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          <a
            href={marketingCertificate}
            target="_blank"
            rel="noreferrer"
            aria-label="View Dr. Sumit Aggarwal's Social Media Marketing certificate at full size"
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-amber-300/50 hover:shadow-amber-950/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:p-5"
          >
            <div className="rounded-2xl bg-slate-950 p-2 sm:p-3">
              <img
                src={marketingCertificate}
                alt="Certificate of excellence awarded to Dr. Sumit Aggarwal for completing Social Media Marketing and passing the skill test"
                width="2339"
                height="1654"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-auto w-full rounded-xl object-contain sm:aspect-[3/2]"
              />
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4 sm:px-3">
              <span className="flex items-center gap-2 text-sm font-semibold text-amber-200">
                <Award size={18} aria-hidden="true" />
                Social Media Marketing
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition group-hover:text-white sm:text-sm">
                View certificate
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>
      </section>
      <WhyUs />
      <Transportation />
      <Placement />
      <Team />
    </div>
  );
}

export default Home