import { Link } from "react-router-dom";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-[#1f1230] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="IISL"
                className="h-14 w-auto rounded-lg object-contain"
              />
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white">
                  IISL
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d9b3ff]">
                  Indian Institute of Skills &amp; Languages
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
              Empowering students with industry-focused learning, practical mentorship, and career-driven education for a brighter future.
            </p>

            <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-sm text-white/65">
                  <li><Link to="/" className="transition-colors hover:text-[#d9b3ff]">Home</Link></li>
                  <li><Link to="/about" className="transition-colors hover:text-[#d9b3ff]">About</Link></li>
                  <li><Link to="/why-us" className="transition-colors hover:text-[#d9b3ff]">Why Us</Link></li>
                  <li><Link to="/courses" className="transition-colors hover:text-[#d9b3ff]">Courses</Link></li>
                  <li><Link to="/contact" className="transition-colors hover:text-[#d9b3ff]">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
                  Programs
                </h4>
                <ul className="space-y-3 text-sm text-white/65">
                  <li><a href="#" className="transition-colors hover:text-[#d9b3ff]">Professional Courses</a></li>
                  <li><a href="#" className="transition-colors hover:text-[#d9b3ff]">Career Guidance</a></li>
                  <li><a href="#" className="transition-colors hover:text-[#d9b3ff]">Live Projects</a></li>
                  <li><a href="#" className="transition-colors hover:text-[#d9b3ff]">Placement Support</a></li>
                  <li><a href="#" className="transition-colors hover:text-[#d9b3ff]">Admission Help</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin size={19} className="mt-0.5 shrink-0 text-[#d9b3ff]" />
                <p className="text-sm leading-6 text-white/70">
                  Rohini Sector 23, Delhi
                  <br />
                  Near Govt. School
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={19} className="mt-0.5 shrink-0 text-[#d9b3ff]" />
                <div className="space-y-1 text-sm text-white/70">
                  <a href="tel:+919310772538" className="block transition-colors hover:text-white">
                    +91-9310772538
                  </a>
                  <a href="tel:+918810282586" className="block transition-colors hover:text-white">
                    +91-8810282586
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={19} className="mt-0.5 shrink-0 text-[#d9b3ff]" />
                <a
                  href="mailto:iisldelhi@gmail.com"
                  className="break-all text-sm text-white/70 transition-colors hover:text-white"
                >
                  iisldelhi@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 size={19} className="mt-0.5 shrink-0 text-[#d9b3ff]" />
                <p className="text-sm leading-6 text-white/70">
                  Mon - Sat
                  <br />
                  9:00 AM - 8:00 PM
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h5 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                Follow Us
              </h5>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919310772538"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-[#d9b3ff] hover:text-white"
                >
                  <MessageCircle
                    size={17}
                    aria-hidden="true"
                    className="text-[#25D366]"
                  />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/iisl_delhi/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-[#d9b3ff] hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-[17px] fill-none"
                    stroke="url(#instagram-gradient)"
                    strokeWidth="1.8"
                  >
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0" y1="24" x2="24" y2="0">
                        <stop offset="0%" stopColor="#FFDC80" />
                        <stop offset="50%" stopColor="#F56040" />
                        <stop offset="100%" stopColor="#C13584" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.75"
                      fill="url(#instagram-gradient)"
                      stroke="none"
                    />
                  </svg>
                  Instagram 
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61594584294014"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-[#d9b3ff] hover:text-white"
                >
                  <span aria-hidden="true" className="text-base font-black leading-none text-[#1877F2]">
                    f
                  </span>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row">
          <p>© {currentYear} IISL. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
