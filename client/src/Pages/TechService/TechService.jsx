import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Check,
  Code2,
  Globe2,
  Layers3,
  MessageCircle,
  PenLine,
  Phone,
  Search,
  ShoppingBag,
  Sparkles,
  Video,
} from "lucide-react";

const WHATSAPP_NUMBER = "919310772538";
const PHONE_NUMBER = "+919310772538";

const seoPackages = [
  {
    name: "SEO Basic",
    price: "₹4,999+",
    suffix: "one-time package",
    description: "A strong starting point to make your website easier to find.",
    features: [
      "Keyword research",
      "On-page SEO",
      "Meta title and description optimization",
      "Image optimization",
      "Sitemap and Google Search Console setup/check",
      "Monthly performance report",
    ],
  },
  {
    name: "SEO Growth",
    price: "₹7,999+",
    suffix: "monthly",
    description: "Consistent local visibility and content for steady growth.",
    features: [
      "Complete on-page SEO for the agreed scope",
      "Local SEO optimization",
      "Google Business Profile optimization",
      "Keyword and competitor research",
      "4 SEO blog posts per month",
      "Technical SEO check",
      "Monthly performance reports",
    ],
  },
  {
    name: "SEO Professional",
    price: "₹9,999+",
    suffix: "monthly",
    description: "A deeper SEO program for businesses ready to compete.",
    features: [
      "Advanced on-page and technical SEO",
      "8 SEO blog posts per month",
      "Local SEO improvements",
      "Internal linking optimization",
      "Schema markup where applicable",
      "Competitor analysis",
      "Quality backlink outreach",
      "Monthly reports",
    ],
  },
  {
    name: "SEO Premium",
    price: "₹14,999+",
    suffix: "monthly",
    description: "A comprehensive strategy for long-term reach and authority.",
    featured: true,
    features: [
      "Advanced technical SEO",
      "12 SEO content pieces",
      "Multi-location SEO strategy",
      "Competitor and backlink-gap analysis",
      "Keyword tracking",
      "Conversion improvement recommendations",
      "Monthly strategy meeting",
    ],
  },
];

const websitePackages = [
  {
    name: "Starter Website",
    price: "₹9,999+",
    suffix: "project package",
    description: "Everything you need to get your business online professionally.",
    icon: Globe2,
    features: [
      "Professional website design",
      "Mobile-responsive layout",
      "Contact form",
      "Social media integration",
      "WhatsApp and click-to-call integration",
      "Website deployment",
      "4 AI-generated posts and 2 videos",
    ],
  },
  {
    name: "Business Website",
    price: "₹14,999+",
    suffix: "project package",
    description: "A custom business presence with the content to bring it to life.",
    icon: Layers3,
    features: [
      "Custom website design",
      "Mobile-friendly, responsive pages",
      "Enquiry and contact form",
      "WhatsApp integration",
      "Gallery and testimonials",
      "Blog and video section",
      "Social media integration and deployment",
      "6 AI-generated posts and 4 videos",
    ],
  },
  {
    name: "Premium Website",
    price: "₹22,999+",
    suffix: "project package",
    description: "A tailored experience for brands that need more flexibility.",
    icon: Sparkles,
    featured: true,
    features: [
      "One-to-one custom UI/UX",
      "Advanced animations and interactions",
      "Content sections",
      "Blog and video management",
      "Enquiry form",
      "Third-party and analytics integration",
      "8 AI-generated posts and 6 videos",
    ],
  },
  {
    name: "E-commerce Website",
    price: "₹32,999+",
    suffix: "project package",
    description: "A complete online store to showcase and sell your products.",
    icon: ShoppingBag,
    features: [
      "Online product store",
      "Product and category management",
      "Shopping cart and checkout",
      "Payment integration",
      "Order management",
      "Admin dashboard",
      "Responsive design",
      "10 AI-generated posts and 8 videos",
    ],
  },
];

const createWhatsAppLink = (packageName) => {
  const message = `Hello IISL, I'm interested in the ${packageName} package. Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

function PackageCard({ item, category }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
        item.featured
          ? "border-[#5a2d8f] bg-[#1f1230] text-white shadow-[#1f1230]/15"
          : "border-slate-200 bg-white text-slate-900 hover:border-[#5a2d8f]/30"
      }`}
    >
      {item.featured && (
        <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#e3c6ff]">
          <Sparkles size={13} aria-hidden="true" />
          Popular choice
        </span>
      )}

      <div className="flex items-center gap-3">
        {item.icon ? (
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
              item.featured
                ? "bg-white/10 text-[#e3c6ff]"
                : "bg-[#5a2d8f]/10 text-[#5a2d8f]"
            }`}
          >
            <item.icon size={21} aria-hidden="true" />
          </span>
        ) : (
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
              item.featured
                ? "bg-white/10 text-[#e3c6ff]"
                : "bg-[#5a2d8f]/10 text-[#5a2d8f]"
            }`}
          >
            <Search size={21} aria-hidden="true" />
          </span>
        )}
        <p
          className={`text-sm font-semibold ${
            item.featured ? "text-[#e3c6ff]" : "text-[#5a2d8f]"
          }`}
        >
          {category}
        </p>
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight">{item.name}</h3>
      <p
        className={`mt-2 min-h-12 text-sm leading-6 ${
          item.featured ? "text-white/70" : "text-slate-600"
        }`}
      >
        {item.description}
      </p>

      <div className="mt-6 border-y border-current/10 py-5">
        <p className="text-3xl font-extrabold tracking-tight">{item.price}</p>
        <p
          className={`mt-1 text-xs ${
            item.featured ? "text-white/60" : "text-slate-500"
          }`}
        >
          {item.suffix}
        </p>
      </div>

      <ul className="mt-5 flex-1 space-y-3">
        {item.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-5">
            <Check
              size={17}
              className={`mt-0.5 shrink-0 ${
                item.featured ? "text-[#d9b3ff]" : "text-[#5a2d8f]"
              }`}
              aria-hidden="true"
            />
            <span className={item.featured ? "text-white/85" : "text-slate-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={createWhatsAppLink(item.name)}
        target="_blank"
        rel="noreferrer"
        className={`mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
          item.featured
            ? "bg-white text-[#2d0d4d] hover:bg-[#f4eaff] focus-visible:outline-white"
            : "bg-[#5a2d8f] text-white hover:bg-[#4b2378] focus-visible:outline-[#5a2d8f]"
        }`}
      >
        <MessageCircle size={17} aria-hidden="true" />
        Enquire on WhatsApp
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6e42a0]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1f1230] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

const TechService = () => {
  return (
    <div className="overflow-hidden bg-[#faf9fc]">
      <section className="relative isolate overflow-hidden bg-[#1f1230] text-white">
        <div className="absolute -left-36 -top-36 -z-10 h-112 w-md rounded-full bg-[#7546aa]/30 blur-3xl" />
        <div className="absolute -right-40 top-12 -z-10 h-104 w-104 rounded-full bg-[#d9b3ff]/15 blur-3xl" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-size-[48px_48px] opacity-[0.08]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-[#ead9ff]">
              <Sparkles size={16} aria-hidden="true" />
              Digital services, designed for growth
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Make your next
              <span className="text-[#d9b3ff]"> online move </span>
              count.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              From a polished new website to a smarter SEO strategy, IISL helps
              your business build a stronger, more discoverable digital presence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#website-packages"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#2d0d4d] transition hover:-translate-y-0.5 hover:bg-[#f4eaff]"
              >
                Explore packages
                <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/919310772538?text=Hello%20IISL%2C%20I%27d%20like%20to%20discuss%20your%20digital%20services."
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Talk to our team
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={17} className="text-[#d9b3ff]" aria-hidden="true" />
                Clear package inclusions
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={17} className="text-[#d9b3ff]" aria-hidden="true" />
                Direct team support
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-4xl bg-[#8a55b1]/20 blur-2xl" />
            <div className="relative rounded-4xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-medium text-white/60">Your digital toolkit</p>
                  <p className="mt-1 text-xl font-bold">Built around your goals</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d9b3ff]/15 text-[#e6cfff]">
                  <BarChart3 size={22} aria-hidden="true" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-5">
                {[
                  { icon: Code2, title: "Websites", detail: "From starter to store" },
                  { icon: Search, title: "SEO", detail: "From basics to premium" },
                  { icon: PenLine, title: "Content", detail: "Posts included" },
                  { icon: Video, title: "Video", detail: "AI-generated options" },
                ].map(({ icon: Icon, title, detail }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <Icon size={19} className="text-[#d9b3ff]" aria-hidden="true" />
                    <p className="mt-4 font-bold">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">{detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#d9b3ff]/10 px-4 py-3.5 text-sm text-[#f1e5ff]">
                <Bot size={19} className="shrink-0" aria-hidden="true" />
                <span>Need help choosing? Chat with us about your project.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-sm font-semibold text-slate-700">
            Find the right service for your next step
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="#website-packages"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#5a2d8f]/40 hover:text-[#5a2d8f]"
            >
              Website development
            </a>
            <a
              href="#seo-packages"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#5a2d8f]/40 hover:text-[#5a2d8f]"
            >
              SEO packages
            </a>
          </div>
        </div>
      </section>

      <section
        id="website-packages"
        className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Web design & development"
            title="A website that works as hard as you do."
            description="Choose a professional starting point, grow into a custom business site, or launch a complete online store. Every package includes a responsive design and the practical features listed below."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {websitePackages.map((item) => (
              <PackageCard
                key={item.name}
                item={item}
                category="Website package"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="seo-packages"
        className="scroll-mt-28 border-y border-slate-200/80 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Search engine optimization"
            title="Be easier to find. Keep growing."
            description="Compare four SEO options—from essential setup to ongoing content, local optimization, and strategic support. Monthly packages are clearly labelled."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {seoPackages.map((item) => (
              <PackageCard key={item.name} item={item} category="SEO package" />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-7 rounded-4xl bg-[#f0e9f7] p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5a2d8f]">
              Have a different scope in mind?
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1f1230] sm:text-3xl">
              Let’s find the right fit for your business.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Tell us what you’re building. We’ll help you discuss the package,
              timeline, and any requirements specific to your project.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="https://wa.me/919310772538?text=Hello%20IISL%2C%20I%27d%20like%20to%20discuss%20a%20custom%20digital%20services%20package."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#5a2d8f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4b2378]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp us
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#5a2d8f]/20 bg-white px-5 py-3 text-sm font-bold text-[#4b2378] transition hover:border-[#5a2d8f]/50"
            >
              <Phone size={17} aria-hidden="true" />
              Call 93107 72538
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechService;
