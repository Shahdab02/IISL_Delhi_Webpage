import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import logo from "../../assets/logo.jpeg";

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
              className="h-14 w-auto object-contain"
            />
            <div className="hidden sm:block leading-tight">
              <div className="text-[2rem] font-black tracking-tight text-[#2d0d4d]">
                IISL
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#5f4f71] font-semibold">
                Indian Institute of Skills &amp; Languages
              </div>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-7 lg:gap-9 text-[#2d0d4d]">

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
                        ? "text-[#2d0d4d] font-semibold"
                        : "text-[#2d0d4d]/80 hover:text-[#2d0d4d]"
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
                      bg-[#2d0d4d]
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

          </div>

          {/* ================= DESKTOP BUTTON ================= */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#2d0d4d] shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a2d8f]"
            >
              {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <Link
              to="/admission"
              className="
                px-7 py-3
                rounded-full
                bg-[#5a2d8f]
                text-white
                text-sm
                font-bold
                shadow-md
                hover:bg-[#4b2378]
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
              className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#2d0d4d] shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a2d8f]"
            >
              {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <span className="text-2xl">☰</span>
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
