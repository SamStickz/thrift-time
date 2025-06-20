// src/components/ShutdownOverlay.jsx
import { useEffect, useState } from "react";

const ShutdownOverlay = () => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setTriggered(true);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return triggered ? (
    <div className="crt-shutdown fixed inset-0 z-[999999] bg-black"></div>
  ) : null;
};

export default ShutdownOverlay;
