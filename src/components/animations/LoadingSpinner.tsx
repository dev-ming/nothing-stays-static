const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-secondary/30 rounded-2xl p-8">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-secondary rounded-full animate-ping" />
        <div className="absolute inset-0 border-4 border-t-primary border-r-accent border-b-secondary border-l-transparent rounded-full animate-spin" />
        <div className="absolute inset-4 border-4 border-t-accent border-r-primary border-b-transparent border-l-secondary rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
