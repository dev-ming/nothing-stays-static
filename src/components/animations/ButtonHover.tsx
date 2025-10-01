const ButtonHover = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
      <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-glow)]">
        <span className="relative z-10">Hover Me!</span>
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </button>
    </div>
  );
};

export default ButtonHover;
