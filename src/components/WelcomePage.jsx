import React from 'react';
import { Heart } from 'lucide-react';
import ImageUploader from './ImageUploader';

export default function WelcomePage({ images, onImageUpload, onContinue }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 animate-gradient">
      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-white/30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            fontSize: `${20 + Math.random() * 30}px`
          }}
          fill="currentColor"
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Images */}
        <div className="flex gap-6 mb-8">
          {[0, 1, 2].map((index) => (
            <ImageUploader
              key={index}
              image={images[index]}
              onUpload={(e) => onImageUpload(index, e)}
            />
          ))}
        </div>

        {/* Birthday Message */}
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-7xl font-bold text-white mb-4 drop-shadow-2xl animate-pulse">
            Happy Birthday
          </h1>
          <h2 className="text-6xl font-bold text-yellow-300 drop-shadow-2xl animate-bounce">
            Rhea! 💕
          </h2>
          <p className="text-2xl text-white/90 mt-6 italic">
            Mahal Kita, My Beautiful Filipina Queen
          </p>
        </div>

        {/* Sparkles Effect */}
        <div className="mb-8">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"
              style={{
                left: '50%',
                top: '50%',
                animationDelay: `${i * 0.1}s`,
                transform: `translate(-50%, -50%) rotate(${i * 12}deg) translateY(-150px)`
              }}
            />
          ))}
        </div>

        {/* Button */}
        <button
          onClick={onContinue}
          className="group relative px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <span className="relative z-10">Continue to Surprise 🎁</span>
          <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}
