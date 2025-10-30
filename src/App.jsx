import React, { useState, useRef } from 'react';
import WelcomePage from './components/WelcomePage';
import CakePage from './components/CakePage';
import { Music, Volume2 } from 'lucide-react';

export default function App() {
  const [page, setPage] = useState('welcome');
  const [images, setImages] = useState([null, null, null]);
  const [customMessage, setCustomMessage] = useState(
    "My Dearest Rhea,\n\nOn this special day, I want you to know how much you mean to me. Your smile lights up my world, and every moment with you is a treasure. You make every day feel like a celebration.\n\nHappy Birthday, my love! Here's to many more beautiful memories together.\n\nWith all my heart,\nYours Always 💕"
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImages = [...images];
        newImages[index] = event.target.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/audio/2022/03/23/audio_4c1d6cf9ae.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Control */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
      >
        {isPlaying ? <Volume2 className="text-white" /> : <Music className="text-white" />}
      </button>

      {page === 'welcome' && (
        <WelcomePage
          images={images}
          onImageUpload={handleImageUpload}
          onContinue={() => setPage('cake')}
        />
      )}

      {page === 'cake' && (
        <CakePage
          customMessage={customMessage}
          setCustomMessage={setCustomMessage}
          onBack={() => setPage('welcome')}
        />
      )}
    </div>
  );
}
