import React from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handles scroll whether on "/" or from another route
  const scrollOrNavigate = (target) => {
    if (location.pathname === "/") {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 600,
        offset: -80,
      });
    } else {
      navigate("/", { state: { scrollTo: target } });
    }
  };

  return (
    <nav className="bg-[#1e1e1e] text-[#f4f1ed] font-mono border-b-2 border-[#ffc600] shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex flex-col md:flex-row items-center md:justify-start gap-4 md:gap-0">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 text-xl uppercase tracking-widest font-bold md:mr-auto">
          <img src="/thrifttime-logo.png" alt="Logo" className="w-6 h-6" />
          ThriftTime
        </div>

        {/* Centered nav links */}
        <div className="w-full md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {/* Home */}
            <li
              className="relative group cursor-pointer"
              onClick={() => scrollOrNavigate("hero")}
            >
              Home
              <span className="block h-[2px] bg-[#ffc600] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </li>

            {/* Shop */}
            <li
              className="relative group cursor-pointer"
              onClick={() => scrollOrNavigate("products")}
            >
              Shop
              <span className="block h-[2px] bg-[#ffc600] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </li>

            {/* Cart */}
            <li className="relative group cursor-pointer">
              <RouterLink to="/cart">Cart</RouterLink>
              <span className="block h-[2px] bg-[#ffc600] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
