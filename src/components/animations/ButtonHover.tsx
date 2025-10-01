const ButtonHover = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
      <div className="space-y-4">
        {/* Primary Button */}
        <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-glow">
          <span className="relative z-10">Hover Me!</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </button>

        {/* Secondary Button */}
        <button className="group relative px-6 py-3 border-2 border-primary text-primary rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground">
          <span className="relative z-10">Secondary</span>
          <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </button>

        {/* Ghost Button */}
        <button className="group relative px-6 py-3 text-primary rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:bg-primary/10">
          <span className="relative z-10">Ghost Button</span>
          <div className="absolute inset-0 rounded-full border-2 border-primary scale-0 group-hover:scale-100 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ButtonHover;
