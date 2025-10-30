import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';

export default function MessageScroll({ customMessage, setCustomMessage }) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="w-full max-w-2xl px-4">
      <div className="relative bg-amber-100 rounded-lg p-6 sm:p-8 shadow-2xl border-4 border-amber-600 transform hover:scale-105 transition-transform duration-300">
        {/* Edit Button */}
        <button
          onClick={() => setEditMode(!editMode)}
          className="absolute top-4 right-4 p-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300"
        >
          <Edit3 size={20} />
        </button>

        {/* Paper Texture Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-amber-200/50 rounded-lg pointer-events-none" />
        
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4 text-center font-serif">
            A Special Message for You
          </h3>
          
          {editMode ? (
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full h-48 sm:h-64 p-4 bg-white/50 border-2 border-amber-400 rounded text-amber-900 font-serif text-base sm:text-lg resize-none focus:outline-none focus:border-amber-600"
            />
          ) : (
            <p className="text-amber-900 text-base sm:text-lg leading-relaxed font-serif whitespace-pre-wrap">
              {customMessage}
            </p>
          )}
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-2 left-2 w-6 sm:w-8 h-6 sm:h-8 border-t-4 border-l-4 border-amber-700 rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-t-4 border-r-4 border-amber-700 rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-6 sm:w-8 h-6 sm:h-8 border-b-4 border-l-4 border-amber-700 rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-b-4 border-r-4 border-amber-700 rounded-br-lg" />
      </div>
    </div>
  );
}
