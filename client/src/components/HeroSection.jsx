import React, { useState } from "react";
import { useRef } from "react";
import {
  Rocket,
  Package,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import TestimonialSection from "./TestimonialSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const errorTimeoutRef = useRef(null);
/* FORM DATA */

const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
city: "",
businessType: "",
outlets: "",
erpInterest: "",
});

/* ERRORS */

const [errors, setErrors] = useState({});

/* HANDLE CHANGE */

const handleChange = (e) => {
const { name, value } = e.target;

setFormData((prev) => ({
...prev,
[name]: value,
}));

/* REMOVE FIELD ERROR */

setErrors((prev) => ({
...prev,
[name]: "",
}));
};

/* VALIDATE FORM */

const validateForm = () => {
let newErrors = {};

/* NAME */

if (!formData.name.trim()) {
newErrors.name = "Name is required!";
}

/* EMAIL */

if (!formData.email.trim()) {
newErrors.email = "Email is required!";
} else if (
!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(formData.email)
) {
newErrors.email = "Invalid email address!";
}

/* PHONE */

if (!formData.phone.trim()) {
newErrors.phone = "Phone number is required!";
} else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
newErrors.phone = "Enter valid 10 digit mobile number";
}

/* CITY */

if (!formData.city.trim()) {
newErrors.city = "City is required!";
}

/* BUSINESS TYPE */

if (!formData.businessType) {
newErrors.businessType = "Please select business type!";
}

/* OUTLETS */

if (!formData.outlets) {
newErrors.outlets = "Please select outlet count!";
}

/* ERP INTEREST */

if (!formData.erpInterest) {
newErrors.erpInterest = "Please choose one option!";
}

/* SET ERRORS */

setErrors(newErrors);

/* AUTO CLEAR ERRORS */

if (errorTimeoutRef.current) {
clearTimeout(errorTimeoutRef.current);
}

if (Object.keys(newErrors).length > 0) {
errorTimeoutRef.current = setTimeout(() => {
setErrors({});
}, 3000);
}

return Object.keys(newErrors).length === 0;
};

/* HANDLE SUBMIT */

const handleSubmit = async (e) => {
e.preventDefault();

if (!validateForm()) return;

try {
setLoading(true);
/* API CALL */

const response = await fetch(
  `${import.meta.env.VITE_BACKEND_API}/api/consultation`,
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(formData),
  }
);

const data = await response.json();

/* SUCCESS */

if (data.success) {
  toast.success("Consultation Request Submitted Successfully");

  /* RESET FORM */

  setFormData({
    name: "",
    email: "",
    phone: "",
    city: "",
    businessType: "",
    outlets: 0,
    erpInterest: "",
  });
} else {
  toast.error(data.message || "Something went wrong");
}


} catch (error) {
console.log(error);


toast.error("Server Error");


} finally {
setLoading(false);
}
};


  const features = [
    {
      icon: `📦`,
      title: "Inventory Management",
      desc: "Barcode, stock transfer, warehouse control and automation.",
    },
    {
      icon: `💰`,
      title: "Sales & Billing",
      desc: "Fast billing, payment tracking and finance workflow automation.",
    },
    {
      icon: `📊`,
      title: "Reports & Analytics",
      desc: "Real-time reports, profit analysis and smart dashboards.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020817] text-white min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-blue-700/20 blur-[120px]" />
      {/* Navbar */}
      <Navbar />
      <div className="max-w-8xl mx-auto px-2 lg:px-8 py-[10vh] sm:py-[10vh] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start py-4">
          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            {/* <div className="sm:inline-flex  hidden items-center gap-2 border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-xl">
              <Rocket size={16} />
              THE ULTIMATE ERP FOR RETAIL & DISTRIBUTION
            </div> */}
            {/* Badge */}
            <div className="hidden sm:flex items-center">
              <div className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#8BD3B4]/20 bg-white/[0.04] px-6 py-3 backdrop-blur-2xl transition-all duration-500 hover:border-[#FF642E]/30">
                {/* GLOW */}
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#8BD3B4]/10 to-[#FF642E]/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* ICON */}
                <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#8BD3B4] to-[#FF642E] text-[#071120] shadow-lg shadow-[#FF642E]/20">
                  <Rocket size={18} strokeWidth={2.5} />
                </div>

                {/* TEXT */}
                <div className="relative flex flex-col">
                  <span className="text-[11px] uppercase tracking-[3px] text-[#8BD3B4] font-bold">
                    THE ULTIMATE ERP For Retail & Distribution
                  </span>
                </div>

                {/* DOT */}
                <div className="relative w-2.5 h-2.5 rounded-full bg-[#FF642E] animate-pulse" />
              </div>
            </div>
            {/* Heading */}
            <h2 className="mt-4 sm:mt-8 text-3xl sm:text-5xl lg:text-5xl leading-tight font-black tracking-tight text-white">
              Accelerate Your <br />
              <span className="bg-gradient-to-r from-[#8BD3B4] to-[#ff7e4f] bg-clip-text text-transparent">
                Retail & Distribution
              </span>{" "}
              Business with{" "}
              <span className="bg-gradient-to-r from-[#8BD3B4] to-[#ff7e4f] bg-clip-text text-transparent">
                APX ERP
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-slate-300 text-base sm:text-xl leading-8 max-w-2xl">
              APX ERP simplifies inventory, billing, finance, CRM,
              multi-location management, and order processing with intelligent
              automation built for modern retail and distribution businesses.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              {/* PRIMARY BUTTON */}
              <button className="bg-gradient-to-r from-[#8BD3B4] to-[#ff7e4f] hover:scale-105 text-[#071120] font-black px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(255,100,46,0.25)] hover:shadow-[0_0_60px_rgba(139,211,180,0.35)]">
                Book Free Demo
              </button>

              {/* SECONDARY BUTTON */}
              <Link
                target="_blank"
                to={"https://apxsolution.in/erp"}
                className="group border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-xl flex items-center justify-center gap-3"
              >
                Explore ERP Features
                <span className="group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Link>
            </div>
            {/* Feature Cards */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#8BD3B4]/40"
                >
                  {/* TOP GLOW */}
                  <div className="absolute top-[-40px] right-[-40px] w-[120px] h-[120px] bg-[#FF642E]/10 blur-[70px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* ICON */}
                  <div className="relative">
                    <div className="w-15 h-15 rounded-[12px] bg-gradient-to-br from-[#8BD3B4] to-[#ff7e4f] flex items-center justify-center text-[#071120] shadow-[0_0_40px_rgba(255,100,46,0.25)] group-hover:scale-110 transition-all duration-500">
                      {/* BIG ICON */}
                      <span className="scale-[2]">{item.icon}</span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-4">
                    <h3 className="text-lg font-black text-white leading-snug group-hover:text-[#8BD3B4] transition-all duration-300 h-10">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-slate-400 leading-8 text-[15px] h-25">
                      {item.desc}
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="mt-8 flex items-center gap-2">
                    <div className="w-10 h-[3px] rounded-full bg-[#8BD3B4]" />
                    <div className="w-4 h-[3px] rounded-full bg-[#FF642E]" />
                  </div>

                  {/* HOVER BORDER EFFECT */}
                  <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-[#FF642E]/20 pointer-events-none transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="order-1 lg:order-2 relative">
            {/* Badge */}
            {/* <div className="sm:hidden  flex items-center gap-2 border border-cyan-400/20 bg-cyan-500/10 text-cyan-200 px-3 py-3 rounded-full text-xs  backdrop-blur-xl mx-auto my-3 justify-center">
             
              THE ULTIMATE ERP FOR RETAIL & DISTRIBUTION
            </div> */}
            {/* Badge */}
            <div className="flex sm:hidden items-center my-4 mx-auto w-full  justify-center place-items-center">
              <div className="group relative inline-flex items-center gap-3 overflow-hidden  rounded-xl sm:rounded-full border border-[#8BD3B4]/20 bg-white/[0.04] px-6 py-3 backdrop-blur-2xl transition-all duration-500 hover:border-[#FF642E]/30">
                {/* GLOW */}
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#8BD3B4]/10 to-[#FF642E]/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* ICON */}
                {/* <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#8BD3B4] to-[#FF642E] text-[#071120] shadow-lg shadow-[#FF642E]/20">
                  <Rocket size={18} strokeWidth={2.5} />
                </div> */}

                {/* TEXT */}
                <div className="relative flex flex-col">
                  <span className="text-[11px] uppercase tracking-[3px] text-[#8BD3B4] font-bold">
                    THE ULTIMATE ERP For Retail & Distribution
                  </span>
                </div>

                {/* DOT */}
                <div className="relative w-2.5 h-2.5 rounded-full bg-[#FF642E] animate-pulse" />
              </div>
            </div>
            <div className="bg-[#081529]/95 border border-white/10 rounded-[22px] p-3 sm:p-5 lg:p-5 shadow-2xl backdrop-blur-xl">
              {/* Badge */}
              {/* <div className="inline-flex bg-cyan-400 text-black font-semibold px-5 py-3 rounded-full text-xs sm:text-sm">
                GET ERP CONSULTATION
              </div> */}
              {/* Badge */}
              <div className="inline-flex items-center gap-3 relative overflow-hidden rounded-xl sm:rounded-full border border-[#8BD3B4]/20 bg-white/[0.05] px-2 py-3 backdrop-blur-2xl">
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8BD3B4]/10 to-[#FF642E]/10" />

                {/* LIVE DOT */}
                <div className="relative w-3 h-3 rounded-full bg-[#FF642E] animate-pulse shadow-[0_0_15px_rgba(255,100,46,0.7)]" />

                {/* TEXT */}
                <div className="relative flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[3px] text-[#8BD3B4] font-black">
                    Free Expert Session
                  </span>

                  <span className="text-white font-semibold text-xs sm:text-sm">
                    Get ERP Consultation
                  </span>
                </div>
              </div>
              {/* Heading */}
              <h2 className="mt-7 text-3xl sm:text-4xl font-black leading-tight">
                Let’s Build Your Smart ERP Workflow
              </h2>

              <p className="mt-5 text-slate-400 leading-7">
                Talk with ERP experts and discover the right solution for your
                retail or distribution business.
              </p>

              {/* FORM */}

              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                {/* ROW 1 */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* NAME */}
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full h-14 px-5 rounded-sm bg-slate-200 text-black outline-none border-2 transition-all duration-300 ${
                        errors.name
                          ? "border-[#86CCB0]"
                          : "border-transparent focus:border-cyan-400"
                      }`}
                    />

                    {errors.name && (
                      <p className="text-[#86CCB0] text-sm mt-2">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      E-mail *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full h-14 px-5 rounded-sm bg-slate-200 text-black outline-none border-2 transition-all duration-300 ${
                        errors.email
                          ? "border-[#86CCB0]"
                          : "border-transparent focus:border-cyan-400"
                      }`}
                    />

                    {errors.email && (
                      <p className="text-[#86CCB0] text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* ROW 2 */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* PHONE */}
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full h-14 px-5 rounded-sm bg-slate-200 text-black outline-none border-2 transition-all duration-300 ${
                        errors.phone
                          ? "border-[#86CCB0]"
                          : "border-transparent focus:border-cyan-400"
                      }`}
                    />

                    {errors.phone && (
                      <p className="text-[#86CCB0] text-sm mt-2">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* CITY */}
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      City *
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className={`w-full h-14 px-5 rounded-sm bg-slate-200 text-black outline-none border-2 transition-all duration-300 ${
                        errors.city
                          ? "border-[#86CCB0]"
                          : "border-transparent focus:border-cyan-400"
                      }`}
                    />

                    {errors.city && (
                      <p className="text-[#86CCB0] text-sm mt-2">
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>

                {/* BUSINESS TYPE */}

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    What is your line of business? *
                  </label>

                  <input
                    type="text"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="Enter your BusinessType"
                    className={`w-full h-14 px-5 rounded-sm bg-slate-200 text-black outline-none border-2 transition-all duration-300 ${
                      errors.city
                        ? "border-[#86CCB0]"
                        : "border-transparent focus:border-cyan-400"
                    }`}
                  />

                  {errors.businessType && (
                    <p className="text-[#86CCB0] text-sm mt-2">
                      {errors.businessType}
                    </p>
                  )}
                </div>

                {/* OUTLETS */}

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    How many outlets/branches do you have? *
                  </label>

                  <input
                    type="number"
                    name="outlets"
                    value={formData.outlets}
                    onChange={handleChange}
                    placeholder="Enter your Outlet Count"
                    className={`w-full h-14 px-5 rounded-sm bg-slate-200 text-black outline-none border-2 transition-all duration-300 ${
                      errors.city
                        ? "border-[#86CCB0]"
                        : "border-transparent focus:border-cyan-400"
                    }`}
                  />

                  {errors.outlets && (
                    <p className="text-[#86CCB0] text-sm mt-2">
                      {errors.outlets}
                    </p>
                  )}
                </div>

                {/* ERP QUESTION */}

                <div>
                  <label className="text-sm text-slate-300 mb-4 block leading-relaxed">
                    Do you wish to cover your entire business operations with
                    our single ERP software - APX? *
                  </label>

                  <div className="space-y-3">
                    {/* OPTION 1 */}
                    <label
                      className={`relative flex items-center justify-between rounded-sm border-2 px-5 py-3 cursor-pointer transition-all duration-300 ${
                        formData.erpInterest === "Complete Solution"
                          ? "border-cyan-400 bg-cyan-400/10 text-white"
                          : "border-slate-600 bg-slate-200 hover:border-cyan-300 text-black"
                      }`}
                    >
                      <div>
                        <h4 className=" font-semibold text-sm sm:text-base">
                          Yes, I need a complete solution
                        </h4>

                        <p className="text-slate-500 text-xs sm:text-sm mt-1">
                          Manage billing, stock, CRM & accounts
                        </p>
                      </div>

                      <input
                        type="radio"
                        name="erpInterest"
                        value="Complete Solution"
                        checked={formData.erpInterest === "Complete Solution"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-cyan-500"
                      />
                    </label>

                    {/* OPTION 2 */}
                    <label
                      className={`relative flex items-center justify-between rounded-sm border-2 px-5 py-3 cursor-pointer transition-all duration-300 ${
                        formData.erpInterest === "Pricing First"
                          ? "border-cyan-400 bg-cyan-400/10 text-white"
                          : "border-slate-600 bg-slate-200 hover:border-cyan-300 text-black"
                      }`}
                    >
                      <div>
                        <h4 className=" font-semibold text-sm sm:text-base">
                          Yes, but want pricing first
                        </h4>

                        <p className="text-slate-500 text-xs sm:text-sm mt-1">
                          I want to compare plans & pricing
                        </p>
                      </div>

                      <input
                        type="radio"
                        name="erpInterest"
                        value="Pricing First"
                        checked={formData.erpInterest === "Pricing First"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-cyan-500"
                      />
                    </label>

                    {/* OPTION 3 */}
                    <label
                      className={`relative flex items-center justify-between rounded-sm border-2 px-5 py-3 cursor-pointer transition-all duration-300 ${
                        formData.erpInterest === "Need More Details"
                          ? "border-cyan-400 bg-cyan-400/10 text-white"
                          : "border-slate-600 bg-slate-200 hover:border-cyan-300 text-black"
                      }`}
                    >
                      <div>
                        <h4 className=" font-semibold text-sm sm:text-base">
                          Maybe, need more details
                        </h4>

                        <p className="text-slate-500 text-xs sm:text-sm mt-1">
                          Explain features & business benefits
                        </p>
                      </div>

                      <input
                        type="radio"
                        name="erpInterest"
                        value="Need More Details"
                        checked={formData.erpInterest === "Need More Details"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-cyan-500"
                      />
                    </label>

                    {/* OPTION 4 */}
                    <label
                      className={`relative flex items-center justify-between rounded-sm border-2 px-5 py-3 cursor-pointer transition-all duration-300 ${
                        formData.erpInterest === "Just Exploring"
                          ? "border-cyan-400 bg-cyan-400/10 text-white"
                          : "border-slate-600 bg-slate-200 hover:border-cyan-300 text-black"
                      }`}
                    >
                      <div>
                        <h4 className=" font-semibold text-sm sm:text-base">
                          I'm Just Exploring
                        </h4>

                        <p className="text-slate-500 text-xs sm:text-sm mt-1">
                          Looking for future ERP possibilities
                        </p>
                      </div>

                      <input
                        type="radio"
                        name="erpInterest"
                        value="Just Exploring"
                        checked={formData.erpInterest === "Just Exploring"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-cyan-500"
                      />
                    </label>
                  </div>

                  {errors.erpInterest && (
                    <p className="text-[#86CCB0] text-sm mt-3">
                      {errors.erpInterest}{" "}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#8BD3B4] to-[#FF642E] py-4 font-black text-[#071120] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,100,46,0.35)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-all duration-1000" />

                  <div className="relative flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-[3px] border-[#071120]/30 border-t-[#071120] rounded-full animate-spin" />

                        <span className="tracking-wide">
                          Submitting Request...
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="w-3 h-3 rounded-full bg-[#071120] animate-pulse" />

                        <span className="tracking-wide text-[12px] sm:text-lg">
                          REQUEST FREE ERP DEMO
                        </span>

                        <span className="text-xl group-hover:translate-x-1 transition-all duration-300">
                          →
                        </span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Testimonial */}
        <div>
          <TestimonialSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
