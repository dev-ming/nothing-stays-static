import { useState } from "react";
import { Sparkles } from "lucide-react";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8">
      <div 
        className="relative w-40 h-52 cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div 
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Sparkles className="w-12 h-12 text-white animate-bounce-soft" />
            <p className="text-white font-bold">Click Me!</p>
          </div>
          
          {/* Back */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-lg flex items-center justify-center rotate-y-180 backface-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-white font-bold text-center px-4">✨ Magic! ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
