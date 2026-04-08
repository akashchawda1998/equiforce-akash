import { X } from "lucide-react";

const DemoModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      ></div>

      {/* RIGHT PANEL */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 md:p-8 h-full overflow-y-auto">

          {/* Close */}
          <button
            onClick={onClose}
            className="mb-6 text-gray-500 hover:text-black"
          >
            <X size={22} />
          </button>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Try for Free
          </h2>

          <p className="text-gray-600 mb-6">
            Explore how EquiForce can streamline your investment operations,
            improve performance visibility, and ensure reporting accuracy.
          </p>

          {/* FORM */}
          <div className="space-y-4">

            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Work Email"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none"
            />

            {/* Company */}
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none"
            />

            {/* Role */}
            <input
              type="text"
              placeholder="Your Role (e.g. Portfolio Manager)"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none"
            />

            {/* AUM */}
            {/* <select className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 outline-none">
              <option>Assets Under Management (AUM)</option>
              <option>$0 - $100M</option>
              <option>$100M - $1B</option>
              <option>$1B - $10B</option>
              <option>$10B+</option>
            </select> */}

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Tell us about your investment operations requirements"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none"
            ></textarea>

            {/* CTA */}
            <button className="w-full bg-gradient-to-r from-[#d97706] to-[#d97706] 
              hover:shadow-lg hover:shadow-cyan-400/40 text-white py-3 rounded-xl font-medium hover:scale-[1.02] transition">
              Request Demo
            </button>

            {/* Trust */}
            <p className="text-xs text-gray-500 text-center mt-2">
              ✔ No obligation • ✔ Secure & confidential • ✔ Expert consultation
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DemoModal;