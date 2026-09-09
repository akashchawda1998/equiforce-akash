import React, { useState } from "react";
import { MapPin, ChevronDown, Mail, Globe } from "lucide-react";
import contactimg from "../../assets/images/bg.png";
import bgchatboat from "../../assets/images/bgchat.jpeg";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // disable button

    try {
      const res = await fetch(
        "https://equoforce-api.vercel.app/api/email/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            businessEmail: formData.email,
            companyName: formData.company,
            service: formData.service,
            message: formData.message,
          }),
        }
      );

      const data = await res.json();
      console.log("Success:", data);

      toast.success("Enquiry Submitted Successfully !");

      setTimeout(() => {
        window.location.href = "/contact";
      }, 4000);

    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send email");
    } finally {
      setLoading(false); // re-enable button
    }
  };

  const inputStyle =
    "w-full h-12 px-4 border border-gray-300 rounded-md bg-white text-gray-700 placeholder:text-gray-400 outline-none"; // Added text-base to prevent iOS zoom

  return (
    <>
      <Helmet>

        <title>Request a Demo | Contact EquiForce</title>
 
        <meta name="description" content="Have questions or need a demo? Contact EquiForce to learn how our AI-powered platform can transform your Performance Measurement and Reporting Workflows.">

        </meta>

      </Helmet>

      <div className="bg-gray-50 min-h-screen">

        {/* HERO SECTION - Adjusted padding and removed fixed height */}
        <section className="relative bg-[#0B2341] text-white pt-24 pb-20 md:pt-30 md:pb-40 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Contact <span className="text-[#d97706]">Us</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
              Get in touch with our leadership team and explore our global office
              locations.
            </p>
          </div>

          <img
            src={contactimg}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-full h-1/2 md:h-full object-cover opacity-30 pointer-events-none"
          />
        </section>


        {/* MAIN CONTENT SECTION */}
        <section className="px-4 pb-20 -mt-12 md:-mt-24 relative z-20" id="contactus">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* LEFT: CONTACT FORM */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                  Send us a Message
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-firstName" className="block text-xs font-bold text-gray-700 mb-1">First Name *</label>
                      <input
                        id="contact-firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        placeholder="First Name *"
                        required
                        aria-required="true"
                        className={`${inputStyle} focus-visible:ring-2 focus-visible:ring-[#d97706]`}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-lastName" className="block text-xs font-bold text-gray-700 mb-1">Last Name *</label>
                      <input
                        id="contact-lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Last Name *"
                        required
                        aria-required="true"
                        className={`${inputStyle} focus-visible:ring-2 focus-visible:ring-[#d97706]`}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-gray-700 mb-1">Business Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Business Email *"
                      required
                      aria-required="true"
                      className={`${inputStyle} focus-visible:ring-2 focus-visible:ring-[#d97706]`}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-bold text-gray-700 mb-1">Company Name *</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company Name *"
                      required
                      aria-required="true"
                      className={`${inputStyle} focus-visible:ring-2 focus-visible:ring-[#d97706]`}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-gray-700 mb-1">Select Service *</label>
                    <select
                      id="contact-service"
                      name="service"
                      className={`${inputStyle} appearance-none pr-10 focus-visible:ring-2 focus-visible:ring-[#d97706]`}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        Select Service *
                      </option>
                      <option value="performance-measurement">Performance Measurement</option>
                      <option value="gips-composite-management"> GIPS® Composite Management</option>
                      <option value="ai-powered-reporting">AI-Powered Investment Reporting</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-gray-700 mb-1">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      placeholder="How can we help you?"
                      onChange={handleChange}
                      className="w-full text-black p-4 border border-gray-300 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full md:w-auto px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-md focus-visible:ring-2 focus-visible:ring-[#d97706]
    ${loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#d97706] hover:bg-[#b46002] text-white active:scale-95"}
  `}
                  >
                    {loading ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              </div>

              {/* RIGHT: LOCATIONS & DIRECT EMAILS */}
              <div className="order-1 lg:order-2 space-y-10 md:space-y-12">
                {/* DIRECT CONTACTS */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                    Direct Contact
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        name: "Jane Atmodjojo, CFA®, CIPM",
                        email: "jane@equiforce.ai",
                      },
                      {
                        name: "Vincent Tran, CIPM",
                        email: "vince@equiforce.ai",
                      },
                      {
                        name: "Pushpendra Thakur",
                        email: "pushpendra@equiforce.ai",
                      },
                    ].map((contact, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-orange-50 transition-colors group"
                      >
                        <div className="bg-orange-100 p-2.5 rounded-lg text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-colors">
                          <Mail size={18} />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm font-bold text-gray-800">
                            {contact.name}
                          </p>
                          <p className="text-xs md:text-sm text-gray-500 truncate">
                            {contact.email}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* OFFICE LOCATIONS */}
                <div>
                  <div className="flex items-center justify-between mb-6 border-b pb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      Our Offices
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 bg-amber-50 text-[#d97706] rounded-full border border-amber-200/80 shadow-xs">
                      <Globe size={13} className="text-[#d97706]" />
                      5 Locations
                    </span>
                  </div>

                  <div className="space-y-6">
                    {/* UNITED STATES SECTION */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-base">🇺🇸</span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          United States
                        </h4>
                      </div>

                      <div className="space-y-3">
                        {/* HQ Featured Card */}
                        <div className="p-4 rounded-2xl border border-amber-300/80 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/30 shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="flex items-start gap-3.5">
                            <div className="bg-[#d97706] text-white p-2.5 rounded-xl shadow-sm shrink-0 mt-0.5">
                              <MapPin size={20} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                                <p className="font-bold text-gray-900 text-base">
                                  Los Angeles, CA
                                </p>
                                <span className="inline-flex items-center gap-1 bg-[#d97706] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                                  Headquarter
                                </span>
                              </div>
                              <p className="text-xs font-semibold text-gray-700">
                                EquiForce Solutions Inc.
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                1575 Westwood Blvd Ste 302
                              </p>
                              <p className="text-xs text-gray-500">
                                Los Angeles, CA 90024
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Other US Offices Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {[
                            { city: "Las Vegas", state: "NV" },
                            { city: "Dallas", state: "TX" },
                            { city: "Boston", state: "MA" },
                          ].map((loc, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-200/80 bg-gray-50/50 hover:bg-orange-50/40 hover:border-amber-300 transition-all duration-200 group"
                            >
                              <div className="text-[#d97706] bg-amber-100/70 group-hover:bg-[#d97706] group-hover:text-white p-1.5 rounded-lg transition-colors shrink-0">
                                <MapPin size={16} />
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-gray-800 text-xs truncate">
                                  {loc.city}, {loc.state}
                                </p>
                                <p className="text-[10px] text-gray-400 font-medium">
                                  United States
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* INDIA SECTION */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-base">🇮🇳</span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          India
                        </h4>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200/80 bg-gray-50/50 hover:bg-orange-50/40 hover:border-amber-300 transition-all duration-200 group">
                        <div className="text-[#d97706] bg-amber-100/70 group-hover:bg-[#d97706] group-hover:text-white p-2 rounded-lg transition-colors shrink-0">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-sm">
                            Indore, India
                          </p>
                          <p className="text-xs text-gray-400 font-medium">
                            India Office
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <img src={bgchatboat} alt="" aria-hidden="true" className="hidden img-fluid" />

        {/* CTA SECTION - Mobile stacking optimized */}
        {/* <section className="bg-[#0B2341] text-white py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Try for Free</h3>
              <p className="text-gray-300 text-sm mb-6">
                Schedule a live platform demo with our technical experts.
              </p>

              <Link to="/contact#contactus">
                <button className="w-full md:w-auto border border-[#d97706] text-[#d97706] px-8 py-3 rounded-lg font-bold hover:bg-[#d97706] hover:text-white transition-all">
                  Request Demo
                </button>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default ContactPage;
