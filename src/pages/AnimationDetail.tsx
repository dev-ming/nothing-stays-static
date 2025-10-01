import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Code, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonHover from "@/components/animations/ButtonHover";
import WaveText from "@/components/animations/WaveText";
import LoadingSpinner from "@/components/animations/LoadingSpinner";
import CardFlip from "@/components/animations/CardFlip";
import ProgressBar from "@/components/animations/ProgressBar";
import FloatingHearts from "@/components/animations/FloatingHearts";
import MorphingShapes from "@/components/animations/MorphingShapes";
import ParticleSystem from "@/components/animations/ParticleSystem";
import ScrollReveal from "@/components/animations/ScrollReveal";

const AnimationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const animations = [
        {
            id: 1,
            title: "Button Hover Effect",
            description: "마우스 호버 시 그라데이션과 글로우 효과가 적용되는 버튼 애니메이션입니다. 다양한 버튼 스타일을 포함하여 호버 효과의 다양한 구현 방법을 보여줍니다.",
            category: "interaction",
            technologies: ["CSS", "React"],
            component: <ButtonHover />,
            code: `const ButtonHover = () => {
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
};`,
            css: `.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 30px hsl(330 75% 60% / 0.3);
  transform: scale(1.1);
}

.gradient-overlay {
  background: linear-gradient(135deg, hsl(330 75% 60%), hsl(320 80% 70%));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hover-glow:hover .gradient-overlay {
  opacity: 1;
}

.shimmer-effect {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.7s ease;
}

.hover-glow:hover .shimmer-effect {
  transform: translateX(100%);
}`
        },
        {
            id: 2,
            title: "Wave Text Animation",
            description: "각 글자가 순차적으로 바운스하는 타이포그래피 애니메이션입니다. 텍스트의 각 문자에 개별적인 애니메이션을 적용하여 역동적인 효과를 만듭니다.",
            category: "typography",
            technologies: ["CSS", "React"],
            component: <WaveText />,
            code: `const WaveText = () => {
  const texts = ["HELLO!", "WAVE", "TEXT"];
  
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/40 to-primary/30 rounded-2xl p-8">
      <div className="space-y-6">
        {texts.map((text, textIndex) => (
          <div key={textIndex} className="flex gap-1 justify-center">
            {text.split('').map((char, index) => (
              <span
                key={index}
                className={\`font-bold bg-gradient-primary bg-clip-text text-transparent inline-block animate-bounce-soft \${
                  textIndex === 0 ? 'text-4xl' : textIndex === 1 ? 'text-3xl' : 'text-2xl'
                }\`}
                style={{
                  animationDelay: \`\${(textIndex * 0.5) + (index * 0.1)}s\`,
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
};`,
            css: `@keyframes bounce-soft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.animate-bounce-soft {
  animation: bounce-soft 1s ease-in-out infinite;
}

.gradient-text {
  background: linear-gradient(135deg, hsl(330 75% 60%), hsl(320 80% 70%), hsl(310 85% 75%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typing-cursor {
  animation: pulse 1s ease-in-out infinite;
}`
        },
        {
            id: 3,
            title: "Loading Spinner",
            description: "이중 회전 효과를 가진 로딩 스피너 애니메이션입니다. 두 개의 원이 서로 다른 속도로 회전하여 깊이감 있는 로딩 효과를 제공합니다.",
            category: "loading",
            technologies: ["CSS"],
            component: <LoadingSpinner />,
            code: `const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-accent rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
    </div>
  </div>
);`,
            css: `@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.spinner-outer {
  border: 4px solid hsl(330 75% 60% / 0.2);
  border-top: 4px solid hsl(330 75% 60%);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-inner {
  border: 4px solid transparent;
  border-top: 4px solid hsl(320 80% 70%);
  border-radius: 50%;
  animation: spin 0.8s linear infinite reverse;
}`
        },
        {
            id: 4,
            title: "3D Card Flip",
            description: "3D 변환을 활용한 카드 플립 애니메이션입니다. CSS 3D transform을 사용하여 입체적인 카드 뒤집기 효과를 구현했습니다.",
            category: "3d",
            technologies: ["CSS", "3D Transform"],
            component: <CardFlip />,
            code: `const CardFlip = () => (
  <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
    <div className="w-32 h-20 perspective-1000">
      <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180">
        <div className="absolute inset-0 w-full h-full bg-gradient-primary rounded-lg flex items-center justify-center backface-hidden">
          <span className="text-primary-foreground font-bold">Front</span>
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center backface-hidden rotate-y-180">
          <span className="text-white font-bold">Back</span>
        </div>
      </div>
    </div>
  </div>
);`,
            css: `.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.card-flip {
  transition: transform 0.7s ease;
}

.card-flip:hover {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}`
        },
        {
            id: 5,
            title: "Progress Bar",
            description: "인터랙티브한 프로그레스 바 애니메이션입니다. 버튼 클릭으로 진행률을 조절할 수 있으며, 부드러운 전환 효과를 제공합니다.",
            category: "interaction",
            technologies: ["CSS", "React"],
            component: <ProgressBar />,
            code: `const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
      <div className="w-full max-w-xs space-y-4">
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-primary h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: \`\${progress}%\` }}
          />
        </div>
        <Button 
          onClick={() => setProgress(prev => prev >= 100 ? 0 : prev + 25)}
          className="w-full"
        >
          {progress >= 100 ? "Reset" : "Add 25%"}
        </Button>
      </div>
    </div>
  );
};`,
            css: `.progress-bar {
  width: 100%;
  height: 12px;
  background-color: hsl(330 20% 96%);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, hsl(330 75% 60%), hsl(320 80% 70%), hsl(310 85% 75%));
  border-radius: 9999px;
  transition: width 1s ease-out;
}

.progress-button {
  width: 100%;
  padding: 0.5rem 1rem;
  background: hsl(330 75% 60%);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.progress-button:hover {
  background: hsl(330 75% 55%);
  transform: translateY(-1px);
}`
        },
        {
            id: 6,
            title: "Floating Hearts",
            description: "하트 이모지가 떠오르는 로맨틱한 애니메이션입니다. CSS 애니메이션을 활용하여 하트들이 부드럽게 떠오르는 효과를 구현했습니다.",
            category: "particle",
            technologies: ["CSS"],
            component: <FloatingHearts />,
            code: `const FloatingHearts = () => (
  <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8 relative overflow-hidden">
    <div className="text-4xl">💖</div>
    <div className="absolute inset-0">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl animate-float"
          style={{
            left: \`\${20 + i * 15}%\`,
            animationDelay: \`\${i * 0.5}s\`,
            animationDuration: \`\${3 + i * 0.5}s\`
          }}
        >
          💕
        </div>
      ))}
    </div>
  </div>
);`,
            css: `@keyframes float {
  0% { transform: translateY(100vh) scale(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-20vh) scale(1.5); opacity: 0; }
}

.animate-float {
  animation: float 3s ease-in infinite;
}

.floating-heart {
  position: absolute;
  font-size: 1.5rem;
  animation: float 3s ease-in infinite;
}

.heart-container {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}`
        },
        {
            id: 7,
            title: "Morphing Shapes",
            description: "SVG를 활용한 도형 변형 애니메이션입니다. 원, 사각형, 삼각형, 하트, 별 등 다양한 도형이 부드럽게 변형되는 효과를 보여줍니다.",
            category: "svg",
            technologies: ["SVG", "CSS"],
            component: <MorphingShapes />,
            code: `const MorphingShapes = () => {
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
          <svg viewBox="0 0 100 100" className="w-full h-full">
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
        
        <div className="flex justify-center space-x-2">
          {shapes.map((_, index) => (
            <div
              key={index}
              className={\`w-2 h-2 rounded-full transition-all duration-300 \${
                index === currentShape ? 'bg-primary' : 'bg-muted'
              }\`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};`,
            css: `.morphing-shape {
  transition: all 1s ease-in-out;
}

.shape-path {
  fill: url(#gradient);
  transition: d 1s ease-in-out;
}

.gradient-def {
  background: linear-gradient(135deg, hsl(330, 75%, 60%), hsl(320, 80%, 70%));
}

.progress-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.progress-indicator.active {
  background-color: hsl(330 75% 60%);
}

.progress-indicator.inactive {
  background-color: hsl(330 20% 96%);
}`
        },
        {
            id: 8,
            title: "Particle System",
            description: "Canvas를 활용한 인터랙티브 파티클 시스템입니다. 마우스 움직임에 반응하는 파티클들과 연결선을 통해 역동적인 시각 효과를 제공합니다.",
            category: "canvas",
            technologies: ["Canvas", "JavaScript"],
            component: <ParticleSystem />,
            code: `const ParticleSystem = () => {
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
      color: \`hsl(\${330 + Math.random() * 20}, 75%, 60%)\`
    });

    const initParticles = () => {
      particlesRef.current = Array.from({ length: 50 }, createParticle);
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = \`rgba(330, 75%, 60%, \${0.1 * (1 - distance / 100)})\`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

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
};`,
            css: `.particle-canvas {
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 0.5rem;
}

.particle-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.particle-info {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 0.5rem;
}`
        },
        {
            id: 9,
            title: "Scroll Reveal",
            description: "스크롤에 반응하는 요소 등장 애니메이션입니다. Intersection Observer API를 활용하여 요소가 뷰포트에 들어올 때 부드러운 등장 효과를 제공합니다.",
            category: "scroll",
            technologies: ["CSS", "Intersection Observer"],
            component: <ScrollReveal />,
            code: `const ScrollReveal = () => {
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
              className={\`p-4 bg-gradient-card border border-border/50 rounded-lg transition-all duration-700 \${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }\`}
              style={{
                transitionDelay: \`\${item.delay}s\`
              }}
            >
              <span className="text-foreground font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className={\`h-full bg-gradient-primary transition-all duration-1000 \${
              isVisible ? "w-full" : "w-0"
            }\`}
          />
        </div>

        <div className="relative">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={\`absolute w-4 h-4 bg-primary rounded-full transition-all duration-1000 \${
                isVisible ? "opacity-100" : "opacity-0"
              }\`}
              style={{
                left: \`\${20 + i * 30}%\`,
                top: "0",
                transitionDelay: \`\${0.8 + i * 0.2}s\`,
                animation: isVisible ? "bounce-soft 1s ease-in-out infinite" : "none",
                animationDelay: \`\${1 + i * 0.3}s\`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};`,
            css: `.scroll-reveal-item {
  opacity: 0;
  transform: translateX(2rem);
  transition: all 0.7s ease;
}

.scroll-reveal-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.progress-bar-reveal {
  width: 0%;
  transition: width 1s ease;
}

.progress-bar-reveal.visible {
  width: 100%;
}

.floating-dot {
  opacity: 0;
  transition: all 1s ease;
}

.floating-dot.visible {
  opacity: 1;
  animation: bounce-soft 1s ease-in-out infinite;
}

@keyframes bounce-soft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}`
        }
    ];

    const animation = animations.find(anim => anim.id === parseInt(id || "1"));

    if (!animation) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Animation Not Found</h1>
                    <Button onClick={() => navigate("/")}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Gallery
                    </Button>
                </div>
            </div>
        );
    }

    const copyToClipboard = async (code: string, type: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(type);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            onClick={() => navigate("/")}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Gallery
                        </Button>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Category:</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md">
                                {animation.category}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Animation Preview */}
                <Card className="mb-8 bg-gradient-card border-border/50 shadow-card">
                    <CardContent className="p-8">
                        <div className="text-center mb-6">
                            <h1 className="text-3xl font-bold text-foreground mb-2">{animation.title}</h1>
                            <p className="text-muted-foreground">{animation.description}</p>
                        </div>

                        <div className="aspect-video bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
                            {animation.component}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6 justify-center">
                            {animation.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Code Tabs */}
                <Card className="bg-gradient-card border-border/50 shadow-card">
                    <CardContent className="p-6">
                        <Tabs defaultValue="react" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="react">React Component</TabsTrigger>
                                <TabsTrigger value="css">CSS Styles</TabsTrigger>
                            </TabsList>

                            <TabsContent value="react" className="mt-6">
                                <div className="relative">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="absolute top-2 right-2 z-10"
                                        onClick={() => copyToClipboard(animation.code, 'react')}
                                    >
                                        {copiedCode === 'react' ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </Button>
                                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                                        <code>{animation.code}</code>
                                    </pre>
                                </div>
                            </TabsContent>

                            <TabsContent value="css" className="mt-6">
                                <div className="relative">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="absolute top-2 right-2 z-10"
                                        onClick={() => copyToClipboard(animation.css, 'css')}
                                    >
                                        {copiedCode === 'css' ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </Button>
                                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                                        <code>{animation.css}</code>
                                    </pre>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AnimationDetail;
