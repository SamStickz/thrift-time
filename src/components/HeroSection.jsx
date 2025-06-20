import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#c7b198] text-[#1e1e1e] py-16 md:py-20 text-center shadow-inner border-b-4 border-[#1e1e1e] px-4">
      <h1
        className="text-4xl md:text-6xl font-bold uppercase tracking-widest drop-shadow-sm"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        ThriftTime Machine
      </h1>
      <p className="mt-6 text-base md:text-xl max-w-2xl mx-auto font-mono">
        🕹️ Step into a pixel-perfect time capsule. Browse rare finds, retro
        gadgets, and nostalgic treasures from the golden days.
      </p>
    </div>
  );
};

export default HeroSection;
