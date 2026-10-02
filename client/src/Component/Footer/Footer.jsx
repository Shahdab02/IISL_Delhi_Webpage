import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f1230] text-white mt-16">
      <div className="max-w-375 mx-auto px-4 md:px-2 lg:px-3 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="IISL" className="h-12 w-auto object-contain" />
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white">IISL</h3>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9b3ff]">Indian Institute of Skills &amp; Languages</p>
              </div>
            </div>
            <p className="text-sm text-white/75 leading-7">
              Empowering students with industry-focused learning, practical mentorship, and career-driven education for a brighter future.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/why-us" className="hover:text-white transition">Why Us</Link></li>
              <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Programs</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li><a href="#" className="hover:text-white transition">Professional Courses</a></li>
              <li><a href="#" className="hover:text-white transition">Career Guidance</a></li>
              <li><a href="#" className="hover:text-white transition">Live Projects</a></li>
              <li><a href="#" className="hover:text-white transition">Placement Support</a></li>
              <li><a href="#" className="hover:text-white transition">Admission Help</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>🏢 Rohini Sector 23, Delhi</li>
              <li>📞 +91-9310772538</li>
              <li>📞 +91-8810282586</li>
              <li>📍 Near Govt. School</li>
              <li>✉️ iisldelhi@gmail.com</li>
              <li>⏰ Mon - Sat: 9:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/65">
          <p>© {currentYear} IISL. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
