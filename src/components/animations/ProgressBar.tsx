import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(80);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-accent/30 rounded-2xl p-8">
      <div className="w-full max-w-xs space-y-4">
        <div className="relative h-6 bg-muted rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-300 animate-glow"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-right"
            style={{
              backgroundSize: '200% 100%',
              animation: 'slide-right 3s linear infinite'
            }}
          />
        </div>
        <p className="text-center font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
