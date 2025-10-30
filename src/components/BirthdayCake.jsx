import React, { useState, useEffect, useRef } from 'react';

export default function BirthdayCake({ candlesLit, setCandlesLit }) {
  const [isListening, setIsListening] = useState(false);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const micStreamRef = useRef(null);

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;
      
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const microphone = audioContextRef.current.createMediaStreamSource(stream);
      
      microphone.connect(analyserRef.current);
      analyserRef.current.fftSize = 256;
      
      setIsListening(true);
      checkBlowing();
    } catch (err) {
      alert('Please allow microphone access to blow out the candles!');
    }
  };

  const checkBlowing = () => {
    if (!analyserRef.current) return;
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const check = () => {
      if (!isListening) return;
      
      analyserRef.current.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b) / bufferLength;
      
      if (average > 50) {
        const litCandles = candlesLit.filter(lit => lit).length;
        if (litCandles > 0) {
          const randomIndex = Math.floor(Math.random() * candlesLit.length);
          if (candlesLit[randomIndex]) {
            const newCandles = [...candlesLit];
            newCandles[randomIndex] = false;
            setCandlesLit(newCandles);
          }
        }
      }
      
      requestAnimationFrame(check);
    };
    
    check();
  };

  const stopListening = () => {
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach(track => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setIsListening(false);
  };

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, []);

  return (
    <div className="mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg px-4">
        Make a Wish! 🌟
      </h2>
      
      <div className="relative">
        {/* Cake */}
        <div className="relative">
          {/* Cake Layers */}
          <div className="w-48 sm:w-64 h-32 sm:h-40 mx-auto">
            {/* Top Layer */}
            <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-36 sm:w-48 h-12 sm:h-16 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-3xl border-4 border-pink-500 shadow-xl" />
            {/* Middle Layer */}
            <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-42 sm:w-56 h-12 sm:h-16 bg-gradient-to-b from-purple-300 to-purple-400 border-4 border-purple-500 shadow-xl" />
            {/* Bottom Layer */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 h-12 sm:h-16 bg-gradient-to-b from-rose-300 to-rose-400 rounded-b-3xl border-4 border-rose-500 shadow-xl" />
            
            {/* Candles */}
            <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4">
              {candlesLit.map((lit, i) => (
                <div key={i} className="relative">
                  {/* Candle */}
                  <div className="w-2 sm:w-3 h-10 sm:h-12 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-full border-2 border-yellow-500" />
                  {/* Flame */}
                  {lit && (
                    <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-3 sm:w-4 h-5 sm:h-6 bg-gradient-to-t from-yellow-500 via-orange-500 to-red-500 rounded-full animate-flicker" />
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 sm:w-2 h-3 sm:h-4 bg-yellow-200 rounded-full animate-flicker" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blow Instruction */}
        {candlesLit.some(lit => lit) && (
          <div className="text-center mt-20 sm:mt-24">
            <button
              onClick={isListening ? stopListening : startListening}
              className={`px-6 sm:px-8 py-3 text-sm sm:text-base ${isListening ? 'bg-red-500' : 'bg-green-500'} text-white font-bold rounded-full shadow-lg hover:scale-110 transition-transform duration-300`}
            >
              {isListening ? '🎤 Listening... Blow Now!' : '🎤 Click to Blow Candles'}
            </button>
          </div>
        )}

        {/* All Candles Blown */}
        {!candlesLit.some(lit => lit) && (
          <div className="text-center mt-20 sm:mt-24 animate-fadeIn">
            <p className="text-2xl sm:text-3xl font-bold text-yellow-300 drop-shadow-lg">
              🎉 Wish Granted! 🎉
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
