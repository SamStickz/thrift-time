import { useRef, useEffect, useState } from "react";

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 0.25;
      if (!isMuted) {
        audio.play().catch((err) => {
          console.warn("🔇 Audio blocked until user interacts:", err.message);
        });
      } else {
        audio.pause();
      }
    }
  }, [isMuted]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="bg-black text-white px-3 py-1 rounded text-sm"
      >
        {isMuted ? "🔇 Turn Music On" : "🔊 Mute Music"}
      </button>
      <audio
        ref={audioRef}
        src="/sounds/chiptune_loop_30s.wav"
        preload="auto"
      />
    </div>
  );
};

export default BackgroundAudio;
