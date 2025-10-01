const WaveText = () => {
  const text = "HELLO!";
  
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/40 to-primary/30 rounded-2xl p-8">
      <div className="flex gap-1">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent inline-block animate-bounce-soft"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WaveText;
