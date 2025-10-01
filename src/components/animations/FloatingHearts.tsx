import { Heart } from "lucide-react";

const FloatingHearts = () => {
  return (
    <div className="relative flex items-center justify-center h-full bg-gradient-to-br from-accent/20 to-secondary/30 rounded-2xl p-8 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-primary fill-primary animate-float"
          style={{
            left: `${20 + i * 12}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + i * 0.3}s`,
            fontSize: `${20 + i * 4}px`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
