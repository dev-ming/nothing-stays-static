import { useState, useEffect, useRef } from "react";

const ScrollReveal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    const items = [
        { text: "Scroll", delay: 0 },
        { text: "Reveal", delay: 0.2 },
        { text: "Animation", delay: 0.4 },
        { text: "Effect", delay: 0.6 }
    ];

    return (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Scroll Reveal</h3>
                    <p className="text-sm text-muted-foreground">Scroll to see animation</p>
                </div>

                <div ref={elementRef} className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`p-4 bg-gradient-card border border-border/50 rounded-lg transition-all duration-700 ${isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-8"
                                }`}
                            style={{
                                transitionDelay: `${item.delay}s`
                            }}
                        >
                            <span className="text-foreground font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                        className={`h-full bg-gradient-primary transition-all duration-1000 ${isVisible ? "w-full" : "w-0"
                            }`}
                    />
                </div>

                {/* Floating Elements */}
                <div className="relative">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-4 h-4 bg-primary rounded-full transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                                }`}
                            style={{
                                left: `${20 + i * 30}%`,
                                top: "0",
                                transitionDelay: `${0.8 + i * 0.2}s`,
                                animation: isVisible ? "bounce-soft 1s ease-in-out infinite" : "none",
                                animationDelay: `${1 + i * 0.3}s`
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollReveal;
