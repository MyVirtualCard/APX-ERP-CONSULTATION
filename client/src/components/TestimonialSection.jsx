import React, { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nitesh Giria",
    role: "Director",
    company: "Girias Investment Pvt Ltd.,",
    location: "Chennai, Tamil Nadu, India.",
    stores: "200+ Stores",
    image: "https://apxsolution.in/assets/images/testimonials/girias.png",
    review:
      "APX has been a family to us since last 20 years. I got associated with APX when we had just 2 Showroom, Also I was the 2nd customer to APX. Today we have 70 Showroom. APX has a big hand in our growth. Hope to grown even bigger with APX in future. On an average I get at least 2 to 3 calls every week from people to take demo of their software, I just cut the call by saying that we have a IN-HOUSE software..that is how APX family has been treating us from last 20 years. We have had small difference in past which is a part of any family but the service and relationships has grown day after day from last 20 year. All the best to APX family for the future. God bless.",
  },
  {
    id: 2,
    name: "Yogesh Poojara",
    role: "Founder",
    company: "Poojara Telecom Pvt. Ltd.,",
    location: "Rajkot, Gujarat, India.",
    stores: "400+ Stores",
    image: "https://apxsolution.in/assets/images/testimonials/poojara.png",
    review:
      "For any mobile retailer, it becomes significant to manage stock with dates, inventories, dispatch and so on, but we must say choosing APX was a correct decision for us as they made it far easier for us although it looked harder. It is smoother to access and run the APX along with easy processing. Works totally like a miracle for us making our working patterns more smoother and clearer.",
  },
  {
    id: 3,
    name: "Rahil Poojara",
    role: "FOUNDER AND CEO",
    company: "Hari Om Communication LLP,",
    location: "Rajkot, Gujarat, India.",
    stores: "85+ Stores",
    image: "https://apxsolution.in/assets/images/testimonials/hariom.png",
    review:
      "Dealing into a distributor and dealer network it is important for us to maintain every bit of data and keep it handy and safe. APX Solution gave us an excellent solution through APX and built an extraordinary software to maintain database properly, make it accessible as well as with highest security, with best applied filters and hence made it more easier for anyone to understand and use it in whole team. We are thankful to APX Solution for working out such amazing APX for us.",
  },
  {
    id: 4,
    name: "Harsh Kotak",
    role: "DIRECTOR & FOUNDER",
    company: "Phonewale Limited,",
    location: "Gujarat, India.",
    stores: "500+ Stores",
    image: "https://apxsolution.in/assets/images/testimonials/phonewale.png",
    review:
      "Implementing APX ERP has been one of the best decisions for our organization. With over 500+ retail stores across multiple states, managing operations, finance, inventory, and customer data was becoming increasingly complex. APX ERP streamlined everything into one integrated platform, giving us complete control and visibility across all functions.The system is robust, user-friendly, and highly adaptable to our business needs. It has helped us improve efficiency, strengthen financial reconciliation, manage stock seamlessly, and empower our teams with real-time insights through automation and reporting.Most importantly, the APX team has been a true partner—understanding our challenges and customizing solutions that truly add value. Today, we are more agile, data-driven, and confident in scaling our business further, thanks to APX ERP.We highly recommend APX ERP to any fast-growing retail organization that wants reliability, transparency, and growth-driven technology.",
  },
  {
    id: 5,
    name: "Navaz Currimbhoy",
    role: "DIRECTOR",
    company: "CURRIMBHOYS Home Products P Ltd.,",
    location: "Chennai, Tamil Nadu, India.",
    stores: "100+ Stores",
    image: "https://apxsolution.in/assets/images/testimonials/currimbhoys.png",
    review:
      "Looking back, amongst the smartest things we did (about 15 years ago) when we diversified and opened branches was not to try rebuilding an Perpetual Inventory Software for our shop and instead just sign up with APX.15 years later, we feel that it was a wise decision to have left the business of analysing, designing, upgrading, etc. to the professionals at APX and enjoy the efficiency of the software through which we have got so much more clarity in to many key area’s our business - especially Inventory and Accounts.We congratulate the team at APX for understanding our needs and adapting so efficiently and promptly to our needs. It is also important to add that not only did the design and operating of APX bring better governance, it was easy to get our staff (most of which are high school dropouts) to use the same.",
  },
  {
    id: 6,
    name: "K.Krishna Pavan",
    role: "CMD",
    company: "Hello Mobiles Pvt Ltd. (Happi Mobiles),",
    location: "Hyderabad, Telangana, India.",
    stores: "75+ Stores",
    image: "https://apxsolution.in/assets/images/testimonials/hello.png",
    review:
      "We are very glad to share our experience on APX software User Friendly Robust efficient and best service support.  Mobile retail life line and highest regards to the team for the intensive support at any time",
  },
  {
    id: 7,
    name: "Kishor Patel",
    role: "MANAGING DIRECTOR",
    company: "Umiya Mobile Limited",
    location: "Gujarat, India.",
    stores: "300+ Stores",
    image: "https://apxsolution.in/assets/images/testimonials/umiya.png",
    review:
      "When we first adopted APX accounting software, our operations were limited to just two branches in Gujarat. Today, with over 300 branches across Gujarat, Maharashtra, and 3 more states, APX has been a constant companion in our journey. Its scalability, accuracy, and reliability have supported our expansion every step of the way.",
  },
];

const TestimonialSection = () => {
  const [active, setActive] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden bg-[#071120] py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-50px] w-[350px] h-[350px] bg-blue-600/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-cyan-400 font-semibold tracking-[3px] uppercase text-sm">
              Testimonials
            </span>

            <h2 className="mt-4 text-2xl md:text-5xl font-black text-white leading-tight max-w-2xl">
              Trusted by Leading Retail & Distribution Brands
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center text-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center text-white"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
          {/* Gradient Line */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* LEFT */}
            <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-white/10 p-4 md:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Image */}
                <div className="relative">
                  <img
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    className="w-28 h-28 rounded-3xl object-cover border border-white/10"
                  />

                  <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-cyan-400 text-black flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Quote />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-white">
                    {testimonials[active].name}
                  </h3>

                  <p className="mt-2 text-cyan-400 font-semibold uppercase tracking-wide text-sm">
                    {testimonials[active].role}
                  </p>

                  <div className="mt-6 space-y-2 text-slate-300 leading-7">
                    <p>{testimonials[active].company}</p>
                    <p>{testimonials[active].location}</p>

                    <div className="inline-flex mt-3 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 font-semibold">
                      {testimonials[active].stores}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Count */}
              <div className="mt-12 flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      active === index ? "w-12 bg-cyan-400" : "w-3 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-3 p-4 md:p-12 flex flex-col justify-between">
              {/* Label */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-cyan-400 uppercase tracking-[3px] text-sm font-semibold">
                  Client Experience
                </span>

                <span className="text-white/40 font-bold text-sm">
                  0{active + 1}/0{testimonials.length}
                </span>
              </div>

              {/* Review */}
              <div className="mt-10">
                <p className="text-white text-sm md:text-lg leading-[1.9] font-medium">
                  “{testimonials[active].review}”
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

                  <span className="text-slate-400">
                    Trusted by 10,000+ businesses across India
                  </span>
                </div>

                <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
