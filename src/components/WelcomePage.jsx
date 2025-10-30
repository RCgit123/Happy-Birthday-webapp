import React from 'react';
import { Heart } from 'lucide-react';

export default function WelcomePage({ onContinue }) {
  // Image paths - these will be your actual photos
  const images = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg'
  ];

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
        <div className="flex gap-6 mb-8 flex-wrap justify-center">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl backdrop-blur-sm bg-white/20 transform hover:scale-110 transition-transform duration-300">
                <img 
                  src={image} 
                  alt={`Rhea photo ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Birthday Message */}
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 drop-shadow-2xl animate-pulse">
            Happy Birthday
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-yellow-300 drop-shadow-2xl animate-bounce">
            Rhea! 💕
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mt-6 italic px-4">
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
          className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <span className="relative z-10">Continue to Surprise 🎁</span>
          <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}v
