import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsPinterest,
  BsTwitterX,
  BsThreads,
} from "react-icons/bs";
import logo from "../assets/logo.png";
const Footer = () => {
  const menuLinks = [
    {
      id: 1,
      name: "Home",
      link: "https://apxsolution.in/",
    },
    {
      id: 2,
      name: "Company",
      link: "https://apxsolution.in/about",
    },
    {
      id: 3,
      name: "ERP Solutions",
      link: "https://apxsolution.in/erp",
    },
    {
      id: 4,
      name: "Clientele",
      link: "https://apxsolution.in/clients",
    },
    {
      id: 5,
      name: "Partners",
      link: "https://apxsolution.in/partners",
    },
    {
      id: 6,
      name: "Careers",
      link: "https://apxsolution.in/careers",
    },
    {
      id: 7,
      name: "Contact",
      link: "https://apxsolution.in/contact",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050B18] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-blue-600/10 blur-[140px]" />

      {/* TOP BORDER */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-8xl mx-auto px-5 lg:px-8 py-20 relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* LOGO + ABOUT */}
          <div className="lg:col-span-2">
            {/* LOGO */}
            <div className="flex items-center gap-1 cursor-pointer group">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                <img className="w-full h-8 sm:h-10" src={logo} alt="logo" />
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 text-slate-400 leading-8 max-w-xl text-base">
              APX ERP helps retail, wholesale, and distribution businesses
              automate inventory, billing, CRM, finance, and analytics with
              intelligent cloud-based workflow management.
            </p>
            {/* CTA BOX */}
            <div className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6">
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-black leading-tight">
                  Ready To Transform Your Business Workflow?
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                  Automate inventory, sales, CRM, finance, and reporting with
                  APX ERP.
                </p>

                <button
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="mt-6 h-14 px-8 rounded-xl bg-gradient-to-r from-[#8BD3B4] to-[#FF642E] text-[#071120] font-black hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,100,46,0.25)]"
                >
                  Book Free Consultation  &nbsp;  ↑
                </button>
              </div>
            </div>
            {/* SOCIAL */}
            <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4 mt-10">
              {[
                {
                  icon: <BsInstagram size={18} />,
                  link: "https://www.instagram.com/apx_solution/",
                  color: "hover:bg-pink-500",
                },

                {
                  icon: <BsFacebook size={18} />,
                  link: "https://www.facebook.com/apxsolution.in",
                  color: "hover:bg-blue-600",
                },

                {
                  icon: <BsYoutube size={18} />,
                  link: "https://www.youtube.com/@APXSolution-m7c",
                  color: "hover:bg-red-600",
                },

                {
                  icon: <BsPinterest size={18} />,
                  link: "https://in.pinterest.com/apxsolutionsite/",
                  color: "hover:bg-rose-600",
                },

                {
                  icon: <BsTwitterX size={18} />,
                  link: "https://x.com/apxsolution",
                  color: "hover:bg-white hover:text-black",
                },

                {
                  icon: <BsThreads size={18} />,
                  link: "https://www.threads.com/@apx_solution",
                  color: "hover:bg-white hover:text-black",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-14 h-14 rounded-[20px] shadow-lg shadow-black/20 border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${item.color}`}
                >
                  <span className="transition-transform duration-300 group-hover:scale-125">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-cyan-400 uppercase tracking-[3px] text-sm font-bold">
              Menu
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {menuLinks.map((item, index) => (
                <a
                  key={index}
                  target="_black"
                  href={item.link}
                  className="group flex items-center justify-between text-slate-400 font-medium hover:translate-x-2 hover:text-white transition-all duration-300"
                >
                  <span>{item.name}</span>

                  <ArrowUpRight
                    size={18}
                    className="opacity-100 sm:opacity-0  -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-cyan-400/20 transition-all duration-300">
            <h3 className="text-cyan-400 uppercase tracking-[3px] text-sm font-bold">
              Contact
            </h3>

            <div className="mt-8 space-y-8">
              {/* EMAIL */}
              <div>
                <div className="flex items-center gap-3 text-cyan-300">
                  <Mail size={18} />
                  <span className="font-semibold">Email</span>
                </div>

                <a
                  href="mailto:sales@apxsolution.in"
                  className="block mt-4 text-slate-300 hover:text-white transition-all duration-300"
                >
                  sales@apxsolution.in
                </a>
              </div>

              {/* PHONE */}
              <div>
                <div className="flex items-center gap-3 text-cyan-300">
                  <Phone size={18} />
                  <span className="font-semibold">Call</span>
                </div>

                <div className="mt-4 flex flex-col gap-3 text-slate-300">
                  <a
                    href="tel:+914442134770"
                    className="hover:text-white transition-all duration-300"
                  >
                    +91 44 4213 4770
                  </a>

                  <a
                    href="tel:+914449579771"
                    className="hover:text-white transition-all duration-300"
                  >
                    +91 44 4957 9771
                  </a>

                  <a
                    href="tel:+914448646772"
                    className="hover:text-white transition-all duration-300"
                  >
                    +91 44 4864 6772
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div>
                <div className="flex items-center gap-3 text-cyan-300">
                  <MapPin size={18} />
                  <span className="font-semibold">Location</span>
                </div>

                <p className="mt-4 text-slate-300 leading-7">
                  Chennai, Tamil Nadu,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 APX Solution. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-slate-500 text-sm">
              Built for Modern ERP Businesses
            </p>

            {/* SCROLL TOP */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group w-14 h-14 rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-500 flex items-center justify-center hover:scale-110 hover:-translate-y-1 shadow-lg shadow-cyan-500/10"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
