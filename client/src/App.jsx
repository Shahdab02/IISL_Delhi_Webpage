import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { MessageCircle, MessageSquareText } from "lucide-react";

import Topbar from "./Component/Topbar/Topbar";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home/Home";

const About = lazy(() => import("./Pages/About/About"));
const Course = lazy(() => import("./Pages/Course/Course"));
const Admission = lazy(() => import("./Pages/Admission/Admission"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const WhyUs = lazy(() => import("./Pages/WhyUs/WhyUs"));
const Media = lazy(() => import("./Pages/Media/Media"));
const TechService = lazy(() => import("./Pages/TechService/TechService"));

const pageMetadata = {
  "/": {
    title: "IISL Delhi | Skills & Language Courses in Rohini",
    description:
      "Learn practical computer, digital marketing, web development, and language skills at IISL in Rohini, Delhi. Explore courses and enquire about admissions.",
  },
  "/about": {
    title: "About IISL Delhi | Practical Skills & Language Learning",
    description:
      "Learn about Indian Institute of Skills & Languages, a practical skills and language learning institute in Rohini, Delhi.",
  },
  "/why-us": {
    title: "Why Choose IISL Delhi | Practical, Career-Focused Learning",
    description:
      "Discover IISL's practical learning, personal mentorship, career-focused skills, and student support in Rohini, Delhi.",
  },
  "/courses": {
    title: "Courses at IISL Delhi | Computer, Digital Marketing & Languages",
    description:
      "Explore computer, digital marketing, web development, English, German, and French courses at IISL in Rohini, Delhi.",
  },
  "/admission": {
    title: "Admissions at IISL Delhi | Enquire About Courses",
    description:
      "Explore the IISL admission process and enquire about practical skills and language courses in Rohini, Delhi.",
  },
  "/contact": {
    title: "Contact IISL Delhi | Rohini Sector 23",
    description:
      "Contact IISL about courses and admissions, or find the institute at Rohini Sector 23, Delhi.",
  },
  "/media": {
    title: "IISL Delhi Media Gallery | Campus Photos & Videos",
    description:
      "View campus, classroom, workshop, and student moments from Indian Institute of Skills & Languages in Delhi.",
  },
  "/tech-service": {
    title: "Website & SEO Services | IISL Delhi",
    description:
      "Explore website development and SEO services from IISL, alongside practical skills training in Delhi.",
  },
};

function AppContent() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] ?? pageMetadata["/"];
    const pageUrl = new URL(location.pathname, window.location.origin).href;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    const openGraphDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    const openGraphUrl = document.querySelector('meta[property="og:url"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );

    document.title = metadata.title;
    description?.setAttribute("content", metadata.description);
    canonical?.setAttribute("href", pageUrl);
    openGraphTitle?.setAttribute("content", metadata.title);
    openGraphDescription?.setAttribute("content", metadata.description);
    openGraphUrl?.setAttribute("content", pageUrl);
    twitterTitle?.setAttribute("content", metadata.title);
    twitterDescription?.setAttribute("content", metadata.description);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const contentSections = document.querySelectorAll(
      "main.flex-1 section, main.flex-1 article",
    );
    const revealTargets = Array.from(contentSections).filter(
      (element) => !element.matches("section") || !element.querySelector("article"),
    );

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    revealTargets.forEach((element) => {
      const siblings = Array.from(element.parentElement?.children ?? []);
      const siblingIndex = siblings
        .filter((sibling) => sibling.matches("article"))
        .indexOf(element);

      if (siblingIndex >= 0) {
        element.style.transitionDelay = `${Math.min(siblingIndex, 5) * 80}ms`;
      }

      element.classList.add("content-reveal");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      revealTargets.forEach((element) => {
        element.classList.remove("content-reveal", "is-visible");
        element.style.removeProperty("transition-delay");
      });
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((currentMode) => !currentMode)}
      />

      <main className="flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tech-service" element={<TechService />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/media" element={<Media />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      <div className="fixed bottom-3 right-3 z-50 flex flex-row gap-2 sm:bottom-5 sm:right-4 sm:flex-col sm:gap-1.5">
        <a
          href="https://wa.me/919310772538?text=Hello%20IISL%2C%20I%27d%20like%20to%20know%20more."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with IISL on WhatsApp"
          title="Chat with IISL on WhatsApp"
          className="inline-flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-amber-500 bg-yellow-400 text-xs font-bold text-slate-950 shadow-md transition hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 sm:h-9 sm:w-auto sm:justify-start sm:rounded-lg sm:px-2.5 sm:shadow-md"
        >
          <MessageCircle size={17} aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">WhatsApp</span>
        </a>
        <Link
          to="/contact"
          aria-label="Drop an enquiry"
          title="Drop an enquiry"
          className="quick-enquiry-action inline-flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white text-xs font-bold text-[#2d0d4d] shadow-md transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a2d8f] sm:h-9 sm:w-auto sm:justify-start sm:rounded-lg sm:px-2.5 sm:shadow-md"
        >
          <MessageSquareText size={17} aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">Enquiry</span>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
