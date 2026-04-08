import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

const NAVY = "#000E24";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
    // Add your authentication logic here
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Left Side: Branding/Info (Hidden on small mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-[#000E24] relative overflow-hidden flex-col justify-between p-12 lg:p-20">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        {/* <Link to="/" className="relative z-10 flex items-center gap-2 group w-fit">
          <FiArrowLeft className="text-white group-hover:-translate-x-1 transition-transform" />
          <span className="text-white/80 text-sm font-medium">Back to Home</span>
        </Link> */}

        <div className="relative z-10 mt-28">
          <img src={logo} className="h-12 mb-8" alt="EquiForce Logo" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            The Future of <br />
            <span className="text-[#d97706]">Investment Tech</span> <br />
            Starts Here.
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            Log in to manage your portfolio, track performance, and leverage AI-driven insights in real-time.
          </p>
        </div>

        {/* <div className="relative z-10 text-gray-500 text-sm">
          © 2026 EquiForce Solutions. All rights reserved.
        </div> */}
      </div>

      {/* Right Side: Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="md:hidden flex justify-center mb-10">
             <img src={logo} className="h-10" alt="logo" />
          </div>

          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2" style={{ color: NAVY }}>Welcome Back</h1>
            <p className="text-gray-500">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: NAVY }}>Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border  border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-black bg-gray-50/50"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-bold  " style={{ color: NAVY }}>Password</label>
                <Link to="/forgot-password" size="sm" className="text-cyan-600 text-xs font-bold hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border placeholder-mauve-400 text-black bg-gray-50/50 border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-gray-50/50"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              style={{ backgroundColor: NAVY }}
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-cyan-600 font-bold hover:underline">
                Request access
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;