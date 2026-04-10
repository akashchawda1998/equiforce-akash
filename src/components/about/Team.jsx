import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// Note: Ensure these paths remain correct for your local environment
import img2 from "../../assets/images/pt.png";
import img1 from "../../assets/images/1.png";
import img3 from "../../assets/images/3.jpeg";
import img4 from "../../assets/images/default-avatar.jpeg";
import img5 from "../../assets/images/5.jpeg";
import img6 from "../../assets/images/6.jpeg";

import { FaFacebookF, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const team = [



  {

    name: "Jane Atmodjojo, CFA®, CIPM",
    email: "jane@equiforcesolutions.com",
    role: "CEO",
    role1: "Senior Consultant",

    img: img1,

    bio: [

      "Jane co founded EquiForce Solutions (EFS) in 2026 to modernize and streamline investment operations, performance measurement, and enterprise reporting for small and mid sized asset managers.  EFS combines purpose built, cost efficient modern technology with deep industry expertise to help firms elevate data quality, strengthen controls, and deliver more insightful reporting.",

      "Before launching EFS, Jane spent nearly 3 decades in leadership roles across investment operations, performance measurement and attribution, GIPS compliance, enterprise reporting, and data architecture. She has a proven track record of transforming back  and middle office functions, modernizing reporting infrastructures, and implementing scalable, high impact data and reporting solutions. Her career includes key roles at Oaktree Capital Management, Capital Group, Kayne Anderson Rudnick Investment Management, ACR Alpine Capital Research, and fintech innovator Wilshire Analytics.",

      "She holds a B.S. from the University of Southern California (cum laude) and has earned both the Chartered Financial Analyst® (CFA®) and the Certificate in Investment Performance Measurement (CIPM) designations."

    ]

  },





  {

    name: "Pushpendra Thakur",
    email: "pushpendra@equiforcesolutions.com",

        role: "Advisory CTO",


    img: img2,

    bio: [

      "Pushpendra Thakur is the Co-Founder and Chief Technology Officer of EquiForce Solutions (EFS), where he defines the firm’s technology vision and leads the architecture of scalable, high-performance platforms for investment operations, performance measurement, and enterprise reporting. Since co-founding EFS in 2026, he has focused on building purpose-engineered solutions that combine modern cloud architecture, data engineering, and AI to help asset managers improve data integrity, strengthen controls, and generate decision-grade insights. He is also the Founder of GoldenR Technology (2024), a fintech firm specializing in advanced data platforms and intelligent automation; through its strategic partnership with EFS, GoldenR enables the delivery of robust, next-generation data and analytics capabilities.",

      "With deep expertise in financial technology and enterprise data architecture, Pushpendra has a strong track record of delivering large-scale, high-impact solutions for global investment firms. His experience includes building industry-first platforms such as an integrated Form PF reporting solution and a fully automated FX trading system, as well as architecting high-performance data ecosystems capable of processing complex, multi-source portfolio data at scale. He has led cloud transformation initiatives, including migration to AWS-based data lakes, and designed end-to-end frameworks spanning data ingestion, validation, performance computation, and reporting—enabling firms to operate with greater efficiency, accuracy, and resilience."

    ]

  },



  {

    name: "Vincent Tran, CIPM",


    email:

      "vince@equiforcesolutions.com",

    role: "Chief Product Officer",
    role1: "Senior Consultant",

    img: img3,

    bio: [

      "Vincent co founded EquiForce Solutions (EFS) in 2026 with a mission to modernize and streamline investment operations, performance measurement, and enterprise reporting for small and mid sized asset managers. As Chief Product Officer, he leads the vision, strategy, and development of EFS’s product suite, ensuring the platform delivers scalable, intuitive, and data accurate solutions for complex investment workflows.",

      "Before launching EFS, Vincent spent more than 25 years in senior roles across portfolio accounting, investment operations, reconciliation, performance measurement, analytics, GIPS compliance, and reporting automation. He has a long track record of designing and implementing technology that automates processes, enhances data integrity, and enables firms to scale efficiently. His career includes senior positions at PIMCO, Macquarie Allegiance Capital, Oaktree Capital, Kayne Anderson Rudnick Investment Management, and ACR Alpine Capital Research.",

      "Vincent holds an MBA (with Distinction) from the New York Institute of Technology, a B.S. from Baylor University, and the Certificate in Investment Performance Measurement (CIPM) designation."

    ]

  },

  {

    name: "Steve",
    email:"steve@equiforcesolutions.com",
    role: "Head of Business",
    role1: "Development",
    img: img4,

    bio: [
      ""
    ]

  },





  {

    name: "Edmund J. Woo",
email:"edmund@equiforcesolutions.com",
    role: "Head of Client Relations",

    img: img5,

    bio: [

      "As Head of Client Relations at EquiForce Solutions (EFS), Edmund leads all aspects of client engagement, relationship management, and implementation success. He ensures that every client partnership is supported with clear communication, seamless onboarding, and long term strategic alignment.", "Before joining EFS, Edmund spent nearly three decades in senior client relations roles at Wilshire Analytics and Charles River Development, where he built deep expertise in managing complex client needs across investment technology and analytics platforms.", "Edmund holds an MBA and B.S. from the University of Arizona."

    ]

  },





  {

    name: "Dylan Tran",
email:"dylan@equiforcesolutions.com",
    role: "Analyst",

    img: img6,

    bio: [

      "As an Analyst at EquiForce Solutions (EFS), Dylan supports the firm’s data operations and implementation efforts. He is responsible for implementation of data validation, and quality control across client datasets, ensuring accuracy and consistency throughout the onboarding and reporting processes.", "Dylan holds a B.A. from the University of California, Los Angeles (UCLA)."

    ]

  },

];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (selectedMember) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedMember]);

  return (
    <section className="bg-gray-50 py-6 text-center relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Executive Leadership */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-30">
          Executive Leadership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-28 mb-20">
          {team.slice(0, 4).map((member, i) => (
            <MemberCard key={i} member={member} onSelect={setSelectedMember} />
          ))}
        </div>

        {/* Section 2: Client Relations */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-24 border-t border-gray-200 pt-16">
          Client Relations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-28 justify-center">
          {/* Empty divs to center the bottom two if needed, or just map them */}
          <div className="hidden lg:block"></div>
          {team.slice(4).map((member, i) => (
            <MemberCard key={i} member={member} onSelect={setSelectedMember} />
          ))}
        </div>
      </div>

      {/* MODAL PORTAL */}
      {selectedMember && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          <div className="flex items-start justify-center min-h-screen p-4 md:p-20">
            <div
              className="bg-white w-full max-w-4xl rounded-lg relative shadow-2xl p-8 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-black"
              >
                <IoClose />
              </button>

              {/* Top Section: Image + Name/Role */}
              <div className="flex items-center gap-6 md:gap-6 mb-2">

                {/* Left Image */}
                <div className="w-24 h-24 md:w-25 md:h-25 rounded-full overflow-hidden border-4 border-gray-200 flex-shrink-0">
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Name/Role */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl md:text-3xl text-gray-800 font-semibold mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-sm text-[#0066a1] font-bold uppercase tracking-wide">
                    {selectedMember.role}
                  </p>
                  {selectedMember.role1 && (
                    <p className="text-sm text-[#0066a1] font-bold uppercase tracking-wide">
                      {selectedMember.role1}
                    </p>
                  )}
                </div>
              </div>

              {/* Bio Section */}
              <div className="text-left text-gray-600 space-y-6 text-base md:text-md leading-relaxed border-t border-gray-100 pt-2 font-light max-w-3xl">
                {selectedMember.bio.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}

                {/* Highlighted Footer Text */}
                <p className="mt-12 text-sm italic pt-6 border-t border-gray-50">
                  Building the future of{" "}
                  <span className="text-[#d97706] font-semibold">
                    scalable, cost-efficient technology and advisory services
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

const MemberCard = ({ member, onSelect }) => (
  <div className="relative bg-white rounded-lg shadow-md pt-20 pb-6 px-6 flex flex-col items-center group transition-all hover:shadow-xl">
    {/* Profile Image */}
    <div
      onClick={() => onSelect(member)}
      className="absolute -top-16 left-1/2 transform -translate-x-1/2 cursor-pointer"
    >
      <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-blue-900 to-[#d97706]">
        <div className="w-full h-full rounded-full border-4 border-white overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* Name */}
    <h4 className="text-[#000E24] text-sm font-semibold mb-1 mt-10 text-center truncate max-w-full">
      {member.name}
    </h4>

    {/* Roles */}
    <div className="text-xs text-gray-500 uppercase tracking-widest mb-4 min-h-[40px] flex flex-col justify-center text-center">
      <p>{member.role}</p>
      <p className={member.role1 ? "mt-1" : "mt-1 opacity-0"}>{member.role1 || "-"}</p>
    </div>

    {/* Email */}
    <a
      href={`mailto:${member.email}`}
      className="text-yellow-600 text-xs font-semibold mb-6 hover:underline flex items-center gap-1"
    >
      <FaRegEnvelope /> {member.email}
    </a>

    {/* View Bio Button */}
    <button
      onClick={() => onSelect(member)}
      className="text-[#000E24] text-xs font-bold uppercase flex items-center hover:opacity-80 transition"
    >
      View Bio <span className="ml-1 text-lg">›</span>
    </button>
  </div>
);

export default Team;