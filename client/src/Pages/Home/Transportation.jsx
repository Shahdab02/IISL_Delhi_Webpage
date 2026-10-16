import {
  BusFront,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const Transportation = () => {
  const benefits = [
    {
      icon: BusFront,
      title: "Free Transportation",
      description:
        "Eligible students can access transportation support without additional transportation charges.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Convenient",
      description:
        "A convenient transportation facility designed to make students' daily travel easier.",
    },
    {
      icon: Route,
      title: "Route-Based Service",
      description:
        "Transportation availability depends on available routes and pickup locations.",
    },
    {
      icon: Clock3,
      title: "Scheduled Pickup & Drop",
      description:
        "Students can use transportation according to the available institute schedule.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Enquire",
      description:
        "Contact our team and ask about transportation availability from your location.",
    },
    {
      number: "02",
      title: "Share Location",
      description:
        "Provide your pickup location and course details to our team.",
    },
    {
      number: "03",
      title: "Route Check",
      description:
        "Our team will check whether your location is covered by the available route.",
    },
    {
      number: "04",
      title: "Start Learning",
      description:
        "Once confirmed, attend your classes with transportation support.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white">
        {/* Background Decorations */}
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Hero Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-md">
                <Sparkles size={17} className="text-yellow-300" />
                Special Student Facility
              </div>

              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Free Student
                <span className="block text-indigo-300">Transportation</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-indigo-100 sm:text-lg">
                Indian Institute of Skills & Language provides transportation
                support for eligible students on available routes, helping make
                the journey to class easier and more convenient.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-900 shadow-xl transition hover:-translate-y-1 hover:bg-indigo-50"
                >
                  Check Your Route
                  <MapPin size={18} />
                </a>

                <a
                  href="/admission"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Apply Now
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 shadow-xl">
                    <BusFront size={52} />
                  </div>

                  <p className="mt-6 text-sm font-bold uppercase tracking-wider text-indigo-200">
                    Student Benefit
                  </p>

                  <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                    FREE TRANSPORT
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-indigo-100">
                    Convenient transportation support for eligible students and
                    available routes.
                  </p>

                  <div className="mt-7 grid w-full grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <MapPin size={23} className="mx-auto text-indigo-200" />
                      <p className="mt-2 text-sm font-bold">Route Based</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4">
                      <Users size={23} className="mx-auto text-indigo-200" />
                      <p className="mt-2 text-sm font-bold">Student Focused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  QUICK INFO  */}
      <section className="relative -mt-8 px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70 sm:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <BusFront size={23} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Facility
              </p>
              <p className="font-black text-slate-900">Free Transportation</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Route size={23} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Service
              </p>
              <p className="font-black text-slate-900">Route Based</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <MapPin size={23} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Location
              </p>
              <p className="font-black text-slate-900">Rohini, Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS  */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
              Transportation Benefits
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Making Your Learning Journey
              <span className="text-indigo-600"> Easier</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our transportation facility is designed to provide additional
              convenience to students who meet the applicable route and
              eligibility conditions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-black">{benefit.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*  HOW IT WORKS  */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
              How It Works
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Get Transportation Support in
              <span className="text-indigo-600"> 4 Simple Steps</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="transport-step-card rounded-3xl border border-slate-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-indigo-100">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <CheckCircle2 size={21} />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-black">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTE INFORMATION  */}
      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-indigo-200">
              Route Information
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Check Transportation
              <span className="text-indigo-300"> Availability</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Transportation availability depends on route, pickup location,
              schedule and applicable student eligibility. Contact our team to
              confirm whether transportation is available from your area.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Share your pickup location",
                "Tell us your course and class timing",
                "Our team checks route availability",
                "Receive transportation confirmation",
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

          {/* Location Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300">
              <MapPin size={28} />
            </div>

            <h3 className="mt-6 text-2xl font-black">Institute Location</h3>

            <p className="mt-4 leading-7 text-slate-300">
              Indian Institute of Skills & Language
              <br />
              647 Gram Sabha
              <br />
              Rohini Sector 23, Delhi
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-indigo-900 transition hover:bg-indigo-50"
            >
              Contact for Route Details
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      {/*  FAQ  */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
              Frequently Asked
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Transportation
              <span className="text-indigo-600"> FAQs</span>
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold">
                Is transportation completely free?
              </summary>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Transportation is offered free of charge for eligible students
                and available routes, subject to institute transportation
                policies.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold">
                Is transportation available from every location?
              </summary>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Transportation availability depends on the current route and
                pickup location. Please contact the institute to confirm your
                area.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold">
                How can I check my route?
              </summary>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Contact the IISL team and provide your pickup location. Our team
                can guide you regarding available transportation routes.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 to-purple-700 p-8 text-center text-white shadow-2xl shadow-indigo-500/20 sm:p-12 lg:p-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <BusFront size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-black sm:text-4xl">
            Want to Check Your Transportation Route?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-indigo-100">
            Contact Indian Institute of Skills & Language and check whether
            transportation support is available from your location.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 transition hover:-translate-y-1 hover:bg-indigo-50"
            >
              Check My Route
              <MapPin size={18} />
            </a>

            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white transition hover:bg-white/20"
            >
              Call Now
              <Phone size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;
