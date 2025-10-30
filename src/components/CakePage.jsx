import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import BirthdayCake from './BirthdayCake';
import MessageScroll from './MessageScroll';

export default function CakePage({ customMessage, setCustomMessage, onBack }) {
  const [candlesLit, setCandlesLit] = useState([true, true, true, true, true]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-rose-600">
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-white/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            fontSize: `${15 + Math.random() * 25}px`
          }}
          fill="currentColor"
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Cake Section */}
        <BirthdayCake candlesLit={candlesLit} setCandlesLit={setCandlesLit} />

        {/* Message Scroll */}
        <MessageScroll
          customMessage={customMessage}
          setCustomMessage={setCustomMessage}
        />

        {/* Back Button */}
        <button
          onClick={onBack}
          className="mt-8 px-6 sm:px-8 py-3 bg-white/20 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
        >
          ← Back to Birthday Wishes
        </button>
      </div>
    </div>
  );
}
