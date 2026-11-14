import { MapPin, Phone } from "lucide-react";

const Topbar = () => {
  const textContent = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {/* IISL Tagline */}
      <p className="text-[15px] font-semibold tracking-[0.04em] text-white md:text-[17px]">
        IISL
        <span className="mx-2 font-normal text-white/40">|</span>
        Training Institute
        <span className="mx-2 font-normal text-white/40">|</span>
        Digital Agency
        <span className="mx-2 font-normal text-white/40">|</span>
        Build Your Future
      </p>

      {/* Separator */}
      <span className="text-white/30">•</span>

      {/* Office Address */}
      <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-white md:text-[15px]">
        <MapPin className="h-4 w-4 shrink-0" />
        <span>
          Office Address: 647, Gram Sabha Main Rd, Gram Sabha, Rohini Extension,
          Budh Vihar, Delhi, 110085, India
        </span>
      </div>

      {/* Separator */}
      <span className="text-white/30">•</span>

      {/* Phone 1 */}
      <a
        href="tel:+919310772538"
        className="flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-75 md:text-[15px]"
      >
        <Phone className="h-4 w-4" />
        <span>+91-9310772538</span>
      </a>

      {/* Separator */}
      <span className="text-white/30">•</span>

      {/* Phone 2 */}
      <a
        href="tel:+918810282586"
        className="flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-75 md:text-[15px]"
      >
        <Phone className="h-4 w-4" />
        <span>+91-8810282586</span>
      </a>
    </div>
  );

  return (
    <div className="relative isolate w-full overflow-hidden border-b border-white/10 bg-[#082657] text-white">
      {/* Background Glow */}
      <span
        className="pointer-events-none absolute left-[-5%] top-1/2 h-20 w-40 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      />

      <span
        className="pointer-events-none absolute right-[-5%] top-1/2 h-20 w-40 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Marquee Area */}
      <div className="relative w-full overflow-hidden">
        <div className="topbar-marquee flex w-max py-2.5">{textContent}</div>
      </div>

      {/* Animation */}
      <style>{`
        .topbar-marquee {
          animation: topbarMove 18s linear infinite;
        }

        @keyframes topbarMove {
          0% {
            transform: translateX(100vw);
          }

          88% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(-100%);
          }
        }

        @media (max-width: 768px) {
          .topbar-marquee {
            animation-duration: 14s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .topbar-marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Topbar;