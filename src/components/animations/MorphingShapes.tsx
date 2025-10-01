import { useState, useEffect } from "react";

const MorphingShapes = () => {
    const [currentShape, setCurrentShape] = useState(0);

    const shapes = [
        { name: "Circle", path: "M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10" },
        { name: "Square", path: "M10,10 L90,10 L90,90 L10,90 Z" },
        { name: "Triangle", path: "M50,10 L90,90 L10,90 Z" },
        { name: "Heart", path: "M50,85 C50,85 10,45 10,25 C10,15 20,10 30,15 C40,10 50,15 50,25 C50,15 60,10 70,15 C80,10 90,15 90,25 C90,45 50,85 50,85 Z" },
        { name: "Star", path: "M50,10 L60,40 L90,40 L70,60 L80,90 L50,70 L20,90 L30,60 L10,40 L40,40 Z" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentShape((prev) => (prev + 1) % shapes.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [shapes.length]);

    return (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
            <div className="text-center space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                    <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d={shapes[currentShape].path}
                            fill="url(#gradient)"
                            className="transition-all duration-1000 ease-in-out"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="hsl(330, 75%, 60%)" />
                                <stop offset="100%" stopColor="hsl(320, 80%, 70%)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                        {shapes[currentShape].name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Morphing Animation
                    </p>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center space-x-2">
                    {shapes.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentShape ? 'bg-primary' : 'bg-muted'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MorphingShapes;
