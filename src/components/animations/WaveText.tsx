const WaveText = () => {
  const texts = ["HELLO!", "WAVE", "TEXT"];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/40 to-primary/30 rounded-2xl p-8">
      <div className="space-y-6">
        {texts.map((text, textIndex) => (
          <div key={textIndex} className="flex gap-1 justify-center">
            {text.split('').map((char, index) => (
              <span
                key={index}
                className={`font-bold bg-gradient-primary bg-clip-text text-transparent inline-block animate-bounce-soft ${textIndex === 0 ? 'text-4xl' : textIndex === 1 ? 'text-3xl' : 'text-2xl'
                  }`}
                style={{
                  animationDelay: `${(textIndex * 0.5) + (index * 0.1)}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}

        {/* Typing Effect */}
        <div className="text-center">
          <span className="text-lg text-muted-foreground font-mono">
            Typing Effect
          </span>
          <div className="mt-2 text-2xl font-bold text-primary">
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveText;
