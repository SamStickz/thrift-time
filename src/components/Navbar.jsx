import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#1e1e1e] text-[#f4f1ed] font-mono border-b-2 border-[#ffc600] shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex flex-col md:flex-row items-center md:justify-start gap-4 md:gap-0">
        {/* Logo on the left */}
        <div className="text-xl uppercase tracking-widest font-bold md:mr-auto">
          ThriftTime
        </div>

        {/* Centered nav links */}
        <div className="w-full md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "Shop", "Cart", "About"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                {item === "Cart" ? <a href="/cart">{item}</a> : item}
                <span className="block h-[2px] bg-[#ffc600] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
