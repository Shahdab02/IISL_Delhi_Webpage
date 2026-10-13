import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
      <Navbar />

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
