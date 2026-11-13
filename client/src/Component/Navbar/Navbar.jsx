import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import logo from "../../assets/optimized/logo.jpg";

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  // Navbar links
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Tech Service",
      path: "/tech-service",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Why Us",
      path: "/why-us",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "Media",
      path: "/media",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        sticky top-0 left-0 w-full z-50 transition-all duration-300 border-b border-slate-200/60
        ${
          isScrolled
            ? "bg-white/95 shadow-md py-2.5 backdrop-blur-sm"
            : "bg-[#f3f3f3]/95 py-3 backdrop-blur-sm"
        }
      `}
    >
      <div className="max-w-375 mx-auto px-4 md:px-2 lg:px-3">
        <div className="flex items-center justify-between gap-6">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center gap-3 min-w-0"
          >
            <img
              src={logo}
              alt="IISL"
              width="300"
              height="300"
              fetchPriority="high"
              className="h-14 w-auto object-contain"
            />
            <div className="hidden sm:block leading-tight">
              <div className="navbar-brand-title text-[2rem] font-black tracking-tight text-[#082657]">
                IISL
              </div>
              <div className="navbar-brand-caption text-[10px] uppercase tracking-[0.22em] text-[#356ba8] font-semibold">
                Indian Institute of Skills &amp; Languages
              </div>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-7 lg:gap-9 text-[#082657]">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    group relative
                    font-medium
                    text-[15px]
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-[#082657] font-semibold"
                        : "text-[#082657]/80 hover:text-[#082657]"
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-2
                      h-0.5
                      bg-[#082657]
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  ></span>
                </Link>
              );
            })}
            <a
              href="https://blog.iisldelhi.com/all-blogs/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[15px] text-[#082657]/80 transition-all duration-300 hover:text-[#082657]"
            >
              Blog
            </a>

          </div>

          {/* ================= DESKTOP BUTTON ================= */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#082657] shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D91]"
            >
              {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <Link
              to="/admission"
              className="
                px-7 py-3
                rounded-full
                bg-[#0B3D91]
                text-white
                text-sm
                font-bold
                shadow-md
                hover:bg-[#093678]
                hover:shadow-lg
                transition-all duration-300
              "
            >
              Admission
            </Link>

          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#082657] shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D91]"
            >
              {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <span className="text-4xl">☰</span>
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed
          top-0
          left-0
          w-full
          h-screen
          bg-white
          z-50
          flex
          flex-col
          items-center
          justify-center
          gap-7
          transition-all
          duration-500
          ${
            isMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6"
          aria-label="Close menu"
        >
          <span className="text-2xl">✕</span>
        </button>

        {/* Mobile Logo */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 left-5"
        >
          <img
            src={logo}
            alt="IISL"
            width="300"
            height="300"
            loading="lazy"
            decoding="async"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Mobile Links */}
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`
                text-lg
                font-semibold
                transition-all
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }
              `}
            >
              {link.name}
            </Link>
          );
        })}
        <a
          href="https://blog.iisldelhi.com/all-blogs/"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg font-semibold text-gray-800 transition-all hover:text-blue-600"
        >
          Blog
        </a>

        {/* Mobile Admission Button */}
        <Link
          to="/admission"
          onClick={() => setIsMenuOpen(false)}
          className="
            mt-2
            px-2
            py-3
            rounded-full
            bg-blue-600
            text-white
            font-semibold
            shadow-lg
            hover:bg-blue-700
            transition-all
          "
        >
          Admission
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
