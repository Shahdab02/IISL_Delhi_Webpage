import { useState } from "react";
import { ArrowRight, Camera, Film, Play, Sparkles, Video } from "lucide-react";

import iislimg1 from "../../assets/media/iislimg1.png";
import iislimg2 from "../../assets/media/iislimg2.jpeg";
import media1 from "../../assets/optimized/media1.jpg";
import media2 from "../../assets/optimized/media2.jpg";
import media3 from "../../assets/optimized/media3.jpg";
import media4 from "../../assets/optimized/media4.jpg";
import media5 from "../../assets/optimized/media5.jpg";
import media6 from "../../assets/optimized/media6.jpg";
import media8 from "../../assets/optimized/media8.jpg";
import media10 from "../../assets/optimized/media10.jpg";
import media11 from "../../assets/optimized/media11.jpg";
import media12 from "../../assets/optimized/media12.jpg";
import media13 from "../../assets/optimized/media13.jpg";
import mvideo1 from "../../assets/media/mvideo1.mp4";
import mvideo2 from "../../assets/media/mvideo2.mp4";
import mvideo3 from "../../assets/media/mvideo3.mp4";
import mvideo4 from "../../assets/media/mvideo4.mp4";

const mediaItems = [
  { type: "image", src: media1, width: 640, height: 480, title: "Campus Moment 1", tag: "Campus" },
  { type: "image", src: media2, width: 640, height: 480, title: "Campus Moment 2", tag: "Learning" },
  { type: "video", src: mvideo1, title: "Campus Video 1", tag: "Highlights" },
  { type: "image", src: media3, width: 640, height: 853, title: "Campus Moment 3", tag: "Events" },
  { type: "image", src: media4, width: 640, height: 853, title: "Campus Moment 4", tag: "Mentoring" },
  { type: "image", src: media5, width: 640, height: 853, title: "Campus Moment 5", tag: "Students" },
  { type: "video", src: mvideo2, title: "Campus Video 2", tag: "Training" },
  { type: "image", src: media6, width: 640, height: 853, title: "Campus Moment 6", tag: "Workshop" },
  { type: "image", src: media8, width: 640, height: 360, title: "Campus Moment 8", tag: "Campus" },
  { type: "video", src: mvideo3, title: "Campus Video 3", tag: "Success" },
  { type: "image", src: media10, width: 640, height: 853, title: "Campus Moment 10", tag: "Activities" },
  { type: "image", src: media11, width: 640, height: 853, title: "Campus Moment 11", tag: "Community" },
  { type: "video", src: mvideo4, title: "Campus Video 4", tag: "Story" },
  { type: "image", src: media12, width: 640, height: 853, title: "Campus Moment 12", tag: "Career" },
  { type: "image", src: media13, width: 640, height: 853, title: "Campus Moment 13", tag: "Celebration" },
];

const photoCount = mediaItems.filter((item) => item.type === "image").length;
const videoCount = mediaItems.filter((item) => item.type === "video").length;

const stats = [
  { label: "Photos", value: photoCount },
  { label: "Videos", value: videoCount },
  { label: "Campus Moments", value: photoCount + videoCount },
];

const categories = ["All", "Campus", "Learning", "Events", "Mentoring", "Career", "Highlights"];

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const heroVideo = mediaItems.find((item) => item.type === "video");
  const filteredMedia =
    selectedCategory === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.tag === selectedCategory);

  return (
    <div className="media-page bg-slate-50 text-slate-900">
      <section className="media-hero relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="media-hero-glow absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(90,45,143,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(217,179,255,0.20),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur-md">
                <Sparkles size={16} className="text-cyan-300" />
                IISL Media Gallery
              </div>

              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Moments that
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-400 bg-clip-text text-transparent">
                  define our campus energy
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Experience the vibrant life of IISL through student stories, classroom moments, workshops, celebrations, and inspiring learning journeys captured in one place.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  Explore Media
                  <ArrowRight size={18} />
                </a>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100">
                  <Camera size={16} className="text-cyan-300" />
                  Real campus moments
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-sm">
              {heroVideo && (
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black">
                  <video
                    src={heroVideo.src}
                    className="h-[360px] w-full object-cover"
                    controls
                    playsInline
                    muted
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
              >
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 text-left lg:mb-10">
            <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#66d8ff] sm:text-xs">
              Featured Moments
            </span>
            <h2 className="mt-4 text-[1.8rem] font-black leading-[0.98] tracking-[-0.06em] text-white sm:text-[3.2rem] lg:text-[4rem]">
              Celebrating IISL achievements
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#1A2C3E] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
              <img
                src={iislimg1}
                alt="IISL recognition and honorary doctorate award"
                loading="lazy"
                decoding="async"
                className="h-[420px] w-full rounded-[1.45rem] object-cover shadow-inner sm:h-[590px]"
              />
            </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#1A2C3E] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
              <img
                src={iislimg2}
                alt="IISL team celebrating an educational achievement"
                loading="lazy"
                decoding="async"
                className="h-[420px] w-full rounded-[1.45rem] object-cover shadow-inner sm:h-[590px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                Media Library
              </span>
              <h2 className="media-section-title mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Highlights from the IISL journey
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  className={`media-category-filter rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-5 text-sm text-slate-500" aria-live="polite">
            Showing {filteredMedia.length} {filteredMedia.length === 1 ? "item" : "items"}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>

          <div id="gallery" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredMedia.map((item, index) => (
              <div
                key={`${item.type}-${index}`}
                className="media-gallery-card group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative h-80 w-full bg-slate-950">
                      <video
                        src={item.src}
                        className="h-full w-full object-cover opacity-90"
                        muted
                        playsInline
                        loop
                        autoPlay
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 text-slate-900 shadow-xl backdrop-blur-sm">
                          <Play size={22} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-800">
                      {item.type === "image" ? <Camera size={12} /> : <Video size={12} />}
                      {item.type}
                    </span>
                    <span className="rounded-full border border-white/20 bg-slate-900/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.type === "image"
                      ? "A memorable IISL moment captured in a still frame, reflecting community, learning, and motivation."
                      : "A short visual story from the campus, highlighting energy, skills, and student engagement in action."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="brand-gradient mx-auto max-w-7xl rounded-[2rem] p-8 text-white shadow-2xl shadow-blue-900/20 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
                <Film size={16} className="text-cyan-200" />
                Campus Story
              </span>
              <h3 className="mt-5 text-3xl font-black sm:text-4xl">
                Every frame tells the story of learning, growth, and belonging.
              </h3>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Visit IISL
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
