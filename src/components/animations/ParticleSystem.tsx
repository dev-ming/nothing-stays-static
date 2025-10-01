import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
}

const ParticleSystem = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        const createParticle = (): Particle => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            color: `hsl(${330 + Math.random() * 20}, 75%, 60%)`
        });

        const initParticles = () => {
            particlesRef.current = Array.from({ length: 50 }, createParticle);
        };

        const updateParticles = () => {
            particlesRef.current.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Keep particles in bounds
                particle.x = Math.max(0, Math.min(canvas.width, particle.x));
                particle.y = Math.max(0, Math.min(canvas.height, particle.y));
            });
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            particlesRef.current.forEach((particle, i) => {
                particlesRef.current.slice(i + 1).forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(330, 75%, 60%, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });

            // Draw particles
            particlesRef.current.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();
            });

            ctx.globalAlpha = 1;
        };

        const animate = () => {
            updateParticles();
            drawParticles();
            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        initParticles();
        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8 relative overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full rounded-lg"
                style={{ background: "transparent" }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Particle System</h3>
                    <p className="text-sm text-muted-foreground">Interactive Network</p>
                </div>
            </div>
        </div>
    );
};

export default ParticleSystem;
