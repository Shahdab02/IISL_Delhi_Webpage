import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MessageCircle, MessageSquareText } from "lucide-react";

import Topbar from "./Component/Topbar/Topbar";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import About from "./Pages/About/About";
import Course from "./Pages/Course/Course";
import Admission from "./Pages/Admission/Admission";
import Contact from "./Pages/Contact/Contact";
import WhyUs from "./Pages/WhyUs/WhyUs";
import Home from "./Pages/Home/Home";
import Media from "./Pages/Media/Media";
import TechService from "./Pages/TechService/TechService";

function AppContent() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("iisl-theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("iisl-theme", isDarkMode ? "dark" : "light");
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
          className="inline-flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white text-xs font-bold text-[#2d0d4d] shadow-md transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a2d8f] sm:h-9 sm:w-auto sm:justify-start sm:rounded-lg sm:px-2.5 sm:shadow-md"
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
