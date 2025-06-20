import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-[#f4f1ed] font-mono py-10 border-t-2 border-[#ffc600] mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
        <div>
          <h3 className="text-lg font-bold uppercase tracking-widest">
            About ThriftTime Machine
          </h3>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            ThriftTime Machine is your pixel-powered portal to the past.
            Discover vintage collectibles, retro tech, and 90s treasures from a
            curated time capsule. Powered by nostalgia.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <img
            src="/pixel-tv.png"
            alt="Pixel CRT TV"
            className="w-20 sm:w-24 h-auto"
          />
        </div>

        <div className="mt-6 max-w-md mx-auto text-left">
          <h4 className="text-sm uppercase font-bold tracking-wider mb-2">
            Join our Retro Newsletter
          </h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="you@aol.com"
              className="bg-[#111] text-[#ffc600] placeholder-[#888] border border-[#ffc600] px-3 py-2 text-xs w-full"
            />
            <button
              type="submit"
              className="bg-[#ffc600] text-black px-4 py-2 text-xs font-bold border border-[#111] hover:bg-[#e0b200]"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs uppercase mt-6">
          <a href="#" className="hover:text-[#ffc600]">
            Contact
          </a>
          <a href="#" className="hover:text-[#ffc600]">
            Help
          </a>
          <a href="#" className="hover:text-[#ffc600]">
            Legal
          </a>
        </div>

        <div className="text-xs mt-6 border-t border-[#333] pt-4">
          <p>
            © {new Date().getFullYear()} ThriftTime Machine. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
