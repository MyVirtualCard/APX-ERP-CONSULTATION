import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    "Home",
    "Features",
    "Solutions",
    "Pricing",
    "Testimonials",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-[#070B1A]/70 backdrop-blur-2xl border-b border-white/10" />

      {/* GLOW */}
      <div className="absolute top-[-100px] left-[20%] w-[300px] h-[300px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute top-[-120px] right-[10%] w-[250px] h-[250px] bg-blue-600/10 blur-[120px]" />

      <nav className="relative max-w-8xl mx-auto px-5 lg:px-8 h-[10vh] flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-1 cursor-pointer group">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            <img className="w-full h-8 sm:h-10" src={logo} alt="logo" />
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* CTA BUTTON */}
          <Link
            target="_blank"
            to={"https://apxsolution.in/contact#reach-out"}
            className=" flex items-center gap-2 bg-white text-[#071120] hover:bg-cyan-300 font-bold px-5 sm:px-7 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Get Free Trial
            <ArrowRight size={18} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          {/* <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center backdrop-blur-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button> */}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${
          mobileMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-[30px] border border-white/10 bg-[#0B1224]/95 backdrop-blur-2xl p-6 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href="/"
                className="group flex items-center justify-between px-5 py-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <span>{item}</span>

                <ArrowRight
                  size={18}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>

          {/* MOBILE CTA */}
          <button className="w-full mt-5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-4 rounded-2xl transition-all duration-300">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
