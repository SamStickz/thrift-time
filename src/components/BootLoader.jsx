import React, { useEffect, useState } from "react";

const messages = [
  "[BOOT] Initializing ThriftTime Machine...",
  "[INFO] Loading modules: CRT_UI, CartEngine, TapeFeed",
  "[OK] Systems online.",
];

const BootLoader = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex < messages.length) {
      if (charIndex < messages[lineIndex].length) {
        const charTimer = setTimeout(() => {
          setCurrentMessage((prev) => prev + messages[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(charTimer);
      } else {
        const linePause = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
          setCurrentMessage("");
        }, 700);
        return () => clearTimeout(linePause);
      }
    } else {
      const doneTimer = setTimeout(() => setDone(true), 1000);
      return () => clearTimeout(doneTimer);
    }
  }, [charIndex, lineIndex]);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black text-[#00ff00] font-mono flex flex-col items-center justify-center text-sm">
      {messages.slice(0, lineIndex).map((msg, idx) => (
        <p key={idx} className="mb-1">
          {msg}
        </p>
      ))}
      {lineIndex < messages.length && (
        <p className="mb-1">
          {currentMessage}
          <span className="animate-blink">_</span>
        </p>
      )}
    </div>
  );
};

export default BootLoader;
