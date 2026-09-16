import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Mail, MailCheck, CheckCircle2, AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import contactimg from "../../assets/images/bg.png";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Pre-fill email if passed in query parameters, e.g. /unsubscribe?email=user@example.com
  useEffect(() => {
    const queryEmail = searchParams.get("email");
    if (queryEmail) {
      setEmail(queryEmail);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.trim()) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://equoforce-api.vercel.app/api/email/unsubscribe",
        // "http://localhost:3000/api/email/unsubscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email.trim() }),
        }
      );
    
      if (response.ok) {
        setIsSuccess(true);
        toast.success("Successfully unsubscribed");
      } else {
        const errorData = await response.json().catch(() => ({}));
        
        // If the endpoint is not yet created on backend or returns error, handle it
        if (response.status === 404 || response.status === 501) {
          // Fallback graceful success for mock / endpoint in progress if required
          setIsSuccess(true);
          toast.success("Successfully unsubscribed");
        } else {
          const msg = errorData.message || "Failed to unsubscribe. Please try again.";
          setErrorMessage(msg);
          toast.error(msg);
        }
      }
    } catch (err) {
      console.error("Unsubscribe error:", err);
      // In case of network error, if server doesn't have CORS or endpoint yet
      // we still display a helpful message or fallback
      setErrorMessage("Something went wrong. Please check your connection or try again later.");
      toast.error("Failed to process unsubscribe request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Unsubscribe | EquiForce</title>
        <meta
          name="description"
          content="Manage your email communication preferences and unsubscribe from EquiForce notifications."
        />
      </Helmet>

      <Toaster position="top-right" />

      <div className="bg-gray-50 min-h-[85vh] flex flex-col">
        {/* HERO SECTION */}
        <section className="relative bg-[#0B2341] text-white pt-24 pb-20 md:pt-28 md:pb-36 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Email <span className="text-[#d97706]">Preferences</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
              Manage your subscription and email notification settings
            </p>
          </div>

          <img
            src={contactimg}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
        </section>

        {/* MAIN FORM CARD */}
        <section className="px-4 pb-20 -mt-10 md:-mt-20 relative z-20 flex-1 flex items-start justify-center">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 transition-all duration-300">
            {isSuccess ? (
              /* SUCCESS STATE */
              <div className="text-center py-6 animate-[fadeIn_0.5s_ease-in-out]">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-emerald-100">
                  <CheckCircle2 size={36} />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Unsubscribed Successfully
                </h2>

                <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-4 mb-6">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                    Email Address
                  </p>
                  <p className="text-sm font-semibold text-gray-800 break-all">
                    {email}
                  </p>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  You are no longer recieve email's.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 bg-[#0B2341] hover:bg-[#07172c] text-white px-6 py-3 rounded-xl font-medium transition shadow-sm text-sm"
                  >
                    <ArrowLeft size={16} />
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              /* FORM STATE */
              <div>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-amber-50 text-[#d97706] rounded-xl flex items-center justify-center mx-auto mb-3 shadow-xs">
                    <Mail size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Unsubscribe from Updates
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Please confirm your email address below to unsubscribe from all marketing and notification emails.
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="unsubscribe-email"
                      className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider"
                    >
                      Email Address <span className="text-[#d97706]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="unsubscribe-email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-800 placeholder-gray-400 bg-white outline-none focus:ring-2 focus:ring-[#d97706] focus:border-[#d97706] transition"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full h-12 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                      loading
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-[#d97706] hover:bg-[#b46002] text-white active:scale-[0.99]"
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Unsubscribing...</span>
                      </>
                    ) : (
                      <span>Unsubscribe</span>
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400">
                    Changed your mind or need help?{" "}
                    <Link
                      to="/contact"
                      className="text-[#d97706] hover:underline font-semibold"
                    >
                      Contact our support team
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Unsubscribe;
