import React, { useState } from "react";
import { MapPin, ChevronDown, Mail } from "lucide-react";
import contactimg from "../../assets/images/bg.png";
import bgchatboat from "../../assets/images/bgchat.jpeg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ContactPage = () => {

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

    try {
      const res = await fetch(
        "https://745c-2405-201-300b-a0f0-7914-2d6a-87de-48cf.ngrok-free.app/api/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "akashchawda1998@gmail.com@",
            subject: "New Inquiry from Equoforce",
            text: `
              Name: ${formData.firstName} ${formData.lastName}
              Email: ${formData.email}
              Company: ${formData.company}
              Service: ${formData.service}
              Message: ${formData.message}
            `,
            html: `
              <h2>New Inquiry</h2>
              <p><b>Name:</b> ${formData.firstName} ${formData.lastName}</p>
              <p><b>Email:</b> ${formData.email}</p>
              <p><b>Company:</b> ${formData.company}</p>
              <p><b>Service:</b> ${formData.service}</p>
              <p><b>Message:</b> ${formData.message}</p>
            `,
          }),
        }
      );

      const data = await res.json();
      console.log("Success:", data);
    toast.success("Enquiry Submitted Successfully !");


    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send email");
    }
  };


  const inputStyle =
    "w-full h-12 px-4 border border-gray-300 rounded-md bg-white text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-base"; // Added text-base to prevent iOS zoom

  return (
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
          alt="background design"
          className="absolute bottom-0 left-0 w-full h-1/2 md:h-full object-cover opacity-30 pointer-events-none"
        />
      </section>


      {/* MAIN CONTENT SECTION */}
      <section className="px-4 pb-20 -mt-12 md:-mt-24 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT: CONTACT FORM */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                Send us a Message
              </h2>

           <form className="space-y-5" onSubmit={handleSubmit}>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      name="firstName"
      type="text"
      placeholder="First Name *"
      className={inputStyle}
      onChange={handleChange}
    />
    <input
      name="lastName"
      type="text"
      placeholder="Last Name *"
      className={inputStyle}
      onChange={handleChange}
    />
  </div>

  <input
    name="email"
    type="email"
    placeholder="Business Email *"
    className={inputStyle}
    onChange={handleChange}
  />

  <input
    name="company"
    type="text"
    placeholder="Company Name *"
    className={inputStyle}
    onChange={handleChange}
  />

  <select
    name="service"
    className={`${inputStyle} appearance-none pr-10`}
    onChange={handleChange}
  >
    <option value="">Select Service</option>
    <option>Investment Operations & Reconciliation</option>
    <option>Performance Measurement</option>
    <option>GIPS-focused Composite Management</option>
    <option>AI-Powered Investment Reporting</option>
    <option>Consulting</option>
  </select>

  <textarea
    name="message"
    rows="4"
    placeholder="How can we help you?"
    onChange={handleChange}
    className="w-full text-black p-4 border border-gray-300 rounded-md"
  />

  <button className="w-full md:w-auto bg-[#d97706] hover:bg-[#b46002] text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-md active:scale-95" type="submit">Submit Inquiry</button>
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
                      email: "jane@equiforcesolutions.com",
                    },
                    {
                      name: "Vincent Tran, CIPM",
                      email: "vince@equiforcesolutions.com",
                    },
                    {
                      name: "Pushpendra Thakur",
                      email: "pushpendra@equiforcesolutions.com",
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
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                  Our Offices
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {[{ city: "Los Angeles, CA" }, { city: "Indore, India" }].map(
                    (loc, index) => (
                      <div key={index} className="flex items-start gap-4 p-4">
                        <div className="text-[#d97706] mt-1 shrink-0">
                          <MapPin size={22} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">{loc.city}</p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <img src={bgchatboat} className="hidden img-fluid" />

      {/* CTA SECTION - Mobile stacking optimized */}
      <section className="bg-[#0B2341] text-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Try for Free</h3>
            <p className="text-gray-300 text-sm mb-6">
              Schedule a live platform demo with our technical experts.
            </p>

            <Link to="/contact">
              <button className="w-full md:w-auto border border-[#d97706] text-[#d97706] px-8 py-3 rounded-lg font-bold hover:bg-[#d97706] hover:text-white transition-all">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
