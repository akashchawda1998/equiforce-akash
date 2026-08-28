import { useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const DemoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[999] transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
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
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="mb-6 text-gray-500 hover:text-black focus-visible:ring-2 focus-visible:ring-[#d97706] rounded-md p-1"
          >
            <X size={22} aria-hidden="true" />
          </button>

          {/* Heading */}
          <h2 id="demo-modal-title" className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Try for Free
          </h2>

          <p className="text-gray-600 mb-6">
            Explore how EquiForce can streamline your investment operations,
            improve performance visibility, and ensure reporting accuracy.
          </p>

          {/* FORM */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

            {/* Full Name */}
            <div>
              <label htmlFor="modal-fullname" className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
              <input
                id="modal-fullname"
                type="text"
                autoComplete="name"
                placeholder="Full Name"
                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="modal-email" className="block text-xs font-bold text-gray-700 mb-1">Work Email</label>
              <input
                id="modal-email"
                type="email"
                autoComplete="email"
                placeholder="Work Email"
                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="modal-company" className="block text-xs font-bold text-gray-700 mb-1">Company Name</label>
              <input
                id="modal-company"
                type="text"
                autoComplete="organization"
                placeholder="Company Name"
                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="modal-role" className="block text-xs font-bold text-gray-700 mb-1">Your Role</label>
              <input
                id="modal-role"
                type="text"
                autoComplete="organization-title"
                placeholder="Your Role (e.g. Portfolio Manager)"
                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="modal-message" className="block text-xs font-bold text-gray-700 mb-1">Requirements Message</label>
              <textarea
                id="modal-message"
                rows="4"
                placeholder="Tell us about your investment operations requirements"
                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
              ></textarea>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              onClick={onClose}
              className="block w-full text-center bg-gradient-to-r from-[#d97706] to-[#d97706] hover:shadow-lg hover:shadow-cyan-400/40 text-white py-3 rounded-xl font-medium hover:scale-[1.02] transition"
            >
              Request Demo
            </Link>

            {/* Trust */}
            <p className="text-xs text-gray-500 text-center mt-2">
              ✔ No obligation • ✔ Secure & confidential • ✔ Expert consultation
            </p>

          </form>

        </div>
      </div>
    </div>
  );
};

export default DemoModal;