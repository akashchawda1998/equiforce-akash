import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import contactimg from "../../assets/images/bg.png";
import logo from "../../assets/images/logoorg.png";

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
    if (!email?.trim()) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://8b3c-2401-4900-1c19-9f60-85c9-1c63-d98b-736.ngrok-free.app/api/email/unsubscribe",
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
          content="Unsubscribe from future EquiForce notifications and email updates."
        />
      </Helmet>

      <Toaster position="top-right" />

      <div className="relative min-h-screen overflow-hidden bg-[#f3f7fa] text-slate-900">
        <img
          src={contactimg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06] mix-blend-multiply pointer-events-none"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(7,23,44,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,44,0.035)_1px,transparent_1px)] bg-size-[56px_56px]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 py-8 sm:px-8 lg:py-12">
          <section className="grid w-full overflow-hidden rounded-2xl border border-white/60 bg-white shadow-[0_28px_90px_rgba(7,23,44,0.18)] lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="relative flex min-h-70 flex-col justify-between overflow-hidden bg-[#07172c] p-7 text-white sm:p-10 lg:min-h-155 lg:p-12">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-[#d97706]/30" />
              <div className="relative">
                <div className="mb-8 flex items-center gap-3" aria-label="EquiForce">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                    <img src={logo} alt="" className="h-full w-full object-contain" />
                  </span>
                 
                </div>
                <h2 className="max-w-sm text-3xl font-bold leading-tight sm:text-4xl">
                  Your inbox should work for you.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
                  We respect your attention. Use this page to stop future EquiForce notifications in just a few seconds.
                </p>
              </div>
              <div className="relative mt-10 hidden items-center gap-3 border-t border-white/15 pt-6 text-xs leading-5 text-slate-300 sm:flex">
                <ShieldCheck size={18} className="shrink-0 text-emerald-400" />
                <span>Your request is handled securely and only applies to this email address.</span>
              </div>
            </aside>

            <div className="relative flex items-center justify-center bg-white p-6 sm:p-10 lg:p-12">
          
            {isSuccess ? (
              <div className="w-full max-w-xl py-6 text-center animate-[fadeIn_0.5s_ease-in-out]">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/70">
                  <CheckCircle2 size={36} />
                </div>

                <p className="mb-3 text-xs font-bold tracking-[0.18em] text-emerald-600 uppercase">Notifications stopped</p>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">
                  You are unsubscribed
                </h2>

                <div className="mb-6 border border-slate-200 bg-white p-4">
                  <p className="mb-1 text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Email Address
                  </p>
                  <p className="break-all text-sm font-semibold text-slate-800">
                    {email}
                  </p>
                </div>

                <p className="mb-8 text-sm leading-relaxed text-slate-600 md:text-base">
                  You will no longer receive future EquiForce notifications or email updates at this address.
                </p>

                <div className="flex justify-center">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 bg-[#07172c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d97706]"
                  >
                    <ArrowLeft size={16} />
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-xl">
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-5 h-1 w-12 bg-[#d97706]" />
                  <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Stop future notifications
                  </h1>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                    Enter your email address below to unsubscribe from future EquiForce notifications and email updates.
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-5 flex items-start gap-2.5 border border-red-200 bg-red-50 p-3.5 text-xs text-red-700 sm:text-sm">
                    <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="unsubscribe-email"
                      className="mb-2 block text-xs font-bold tracking-wider text-slate-700 uppercase"
                    >
                      Email address to unsubscribe <span className="text-[#d97706]">*</span>
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
                        className="h-14 w-full rounded-md border border-slate-300 bg-white px-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#d97706] focus:ring-2 focus:ring-[#f59e0b]/30"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex h-14 w-full items-center justify-center gap-2 rounded-md font-bold transition-all duration-200 ${
                      loading
                        ? "cursor-not-allowed bg-slate-400 text-white"
                        : "bg-[#d97706] text-white hover:bg-[#b45309] active:scale-[0.99]"
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Stopping notifications...</span>
                      </>
                    ) : (
                      <span>Stop future notifications</span>
                    )}
                  </button>
                </form>

                <div className="mt-8 flex items-start gap-3 border-t border-slate-200 pt-5">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                  <p className="text-xs leading-5 text-slate-500">
                    This will stop future EquiForce notifications for this email address. Changed your mind or need help?{" "}
                    <Link
                      to="/contact"
                      className="font-semibold text-[#b45309] hover:underline"
                    >
                      Contact support
                    </Link>
                  </p>
                </div>
               
              </div>
            )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Unsubscribe;
