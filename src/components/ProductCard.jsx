import React, { useEffect, useRef } from "react";
import useSound from "use-sound";
import beepSound from "/sounds/retro_beep.wav";
import { useCart } from "../context/CartContext"; // at top


const ProductCard = ({ product }) => {
  const [play] = useSound(beepSound, {
    volume: 0.4,
    onplay: () => console.log("🔊 Beep on click"),
  });

  const audioRef = useRef(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load();
    }
  }, []);

  const handleClick = () => {
    // Try useSound
    play();

    // Fallback direct play
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } catch (error) {
        console.warn("Audio play blocked:", error);
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#fffaf0] border-2 border-[#1e1e1e] shadow-xl rounded-md p-4 transition-transform hover:scale-105 font-mono"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-3 border"
      />
      <h3 className="text-lg font-bold uppercase">{product.name}</h3>
      <p className="text-sm text-gray-700">
        {product.description.slice(0, 60)}...
      </p>
      <p className="mt-2 text-[#222] font-semibold">{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 w-full bg-black text-white py-2 text-sm font-bold rounded hover:bg-[#222]"
      >
        + Add to Cart
      </button>

      {/* Fallback audio tag */}
      <audio
        ref={audioRef}
        src="/sounds/retro_beep.wav"
        preload="auto"
        hidden
      />
    </div>
  );
};

export default ProductCard;
