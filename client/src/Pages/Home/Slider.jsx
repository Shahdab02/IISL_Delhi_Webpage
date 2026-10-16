import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";
import hero5 from "../../assets/hero5.png";

const slides = [hero1, hero2, hero3, hero4, hero5];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStart = useRef(null);

  /*PREVIOUS  */
  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  /*NEXT  */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <main className="m-0 w-full bg-white p-0">
      {/*SLIDER */}
      <section
        className="relative m-0 w-full overflow-hidden p-0"
        onTouchStart={(event) => {
          const touch = event.changedTouches[0];
          touchStart.current = touch
            ? { x: touch.clientX, y: touch.clientY }
            : null;
        }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          const touch = event.changedTouches[0];
          touchStart.current = null;

          if (!start || !touch) return;

          const deltaX = touch.clientX - start.x;
          const deltaY = touch.clientY - start.y;

          if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
            setCurrentSlide((prev) =>
              deltaX < 0
                ? (prev + 1) % slides.length
                : (prev - 1 + slides.length) % slides.length,
            );
          }
        }}
      >
        {/* IMAGE WRAPPER */}
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

          {/* PREVIOUS BUTTON*/}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
              absolute
              hidden
              sm:flex
              left-4
              top-1/2
              z-30
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

          {/* NEXT BUTTON*/}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute
              hidden
              sm:flex
              right-4
              top-1/2
              z-30
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

          {/*COUNTER*/}
          <div
            className="
              absolute
              right-2
              top-2
              z-30
              rounded-full
              bg-black/50
              px-2.5
              py-1
              text-[10px]
              font-bold
              text-white
              shadow-lg
              backdrop-blur-md

              sm:right-6
              sm:top-6
              sm:px-4
              sm:py-2
              sm:text-sm
            "
          >
            {String(currentSlide + 1).padStart(2, "0")}
            <span className="mx-1 text-white/50">/</span>
            {String(slides.length).padStart(2, "0")}
          </div>

          {/* dots */}
          <div
            className="
              relative
              z-30
              flex
              items-center
              justify-center
              gap-0.5
              bg-slate-900
              px-2
              py-1
              sm:absolute
              sm:bottom-5
              sm:left-1/2
              sm:-translate-x-1/2
              sm:gap-2
              sm:rounded-full
              sm:bg-black/35
              sm:px-3
              sm:py-2
              sm:backdrop-blur-md
            "
          >
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : undefined}
                className={`
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-500
                  sm:h-auto
                  sm:w-auto
                  sm:p-0
                `}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 sm:h-2 ${
                    currentSlide === index
                      ? "w-5 bg-white sm:w-8"
                      : "w-1.5 bg-white/50 hover:bg-white sm:w-2"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Slider;
