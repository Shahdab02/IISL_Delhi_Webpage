import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import hero1 from "../../assets/hero1.jpeg";
import hero2 from "../../assets/hero2.jpeg";
import hero3 from "../../assets/hero3.jpeg";
import hero4 from "../../assets/hero4.jpeg";
import hero5 from "../../assets/hero5.jpeg";

const slides = [hero1, hero2, hero3, hero4, hero5];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  /* ================= PREVIOUS ================= */
  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  /* ================= NEXT ================= */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <main className="m-0 w-full bg-white p-0">
      {/* =====================================================
          SLIDER
          NO PADDING
          NO MARGIN
          NO GAP
      ====================================================== */}
      <section
        className="relative m-0 w-full overflow-hidden p-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* =================================================
            IMAGE WRAPPER

            IMPORTANT:
            No fixed height.
            Image controls its own height.
        ================================================== */}
        <div className="relative m-0 w-full p-0">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`IISL Slide ${index + 1}`}
              draggable="false"
              className={`
                block
                w-full
                h-auto
                select-none
                transition-opacity
                duration-700
                ease-in-out

                ${
                  currentSlide === index
                    ? "relative opacity-100"
                    : "absolute inset-0 opacity-0"
                }
              `}
            />
          ))}

          {/* =================================================
              PREVIOUS BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
              absolute
              left-4
              top-1/2
              z-30
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/45
              text-white
              shadow-lg
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/70

              sm:left-5
              sm:h-12
              sm:w-12

              md:left-7
              md:h-14
              md:w-14
            "
          >
            <ArrowLeft size={21} strokeWidth={2.5} className="md:h-6 md:w-6" />
          </button>

          {/* =================================================
              NEXT BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute
              right-4
              top-1/2
              z-30
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/45
              text-white
              shadow-lg
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/70

              sm:right-5
              sm:h-12
              sm:w-12

              md:right-7
              md:h-14
              md:w-14
            "
          >
            <ArrowRight size={21} strokeWidth={2.5} className="md:h-6 md:w-6" />
          </button>

          {/* =================================================
              COUNTER
          ================================================== */}
          <div
            className="
              absolute
              right-5
              top-5
              z-30
              rounded-full
              bg-black/50
              px-4
              py-2
              text-xs
              font-bold
              text-white
              shadow-lg
              backdrop-blur-md

              sm:right-6
              sm:top-6
              sm:text-sm
            "
          >
            {String(currentSlide + 1).padStart(2, "0")}
            <span className="mx-1 text-white/50">/</span>
            {String(slides.length).padStart(2, "0")}
          </div>

          {/* =================================================
              DOTS
          ================================================== */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              z-30
              flex
              -translate-x-1/2
              items-center
              gap-2
              rounded-full
              bg-black/35
              px-3
              py-2
              backdrop-blur-md
            "
          >
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    currentSlide === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50 hover:bg-white"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Slider;
