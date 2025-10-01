// 컴포넌트 코드를 직접 포함하는 방식으로 변경

export const componentCodes: Record<string, { componentCode: string; cssCode: string }> = {
    'ButtonHover': {
        componentCode: `const ButtonHover = () => {
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
        cssCode: `/* 이 컴포넌트는 주로 Tailwind CSS 클래스를 사용합니다. */
/* 주요 클래스: hover:scale-110, hover:shadow-glow, transition-all */
/* 그라데이션 효과: bg-gradient-to-r, from-accent, to-primary */
/* 애니메이션: duration-300, duration-700, ease-in-out */`
    },
    'WaveText': {
        componentCode: `const WaveText = () => {
  const texts = ["HELLO!", "WAVE", "TEXT"];

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/40 to-primary/30 rounded-2xl p-8">
      <div className="space-y-6">
        {texts.map((text, textIndex) => (
          <div key={textIndex} className="flex gap-1 justify-center">
            {text.split('').map((char, index) => (
              <span
                key={index}
                className={\`font-bold bg-gradient-primary bg-clip-text text-transparent inline-block animate-bounce-soft \${textIndex === 0 ? 'text-4xl' : textIndex === 1 ? 'text-3xl' : 'text-2xl'
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
        cssCode: `/* 이 컴포넌트는 주로 Tailwind CSS 클래스를 사용합니다. */
/* 주요 클래스: animate-bounce-soft, bg-gradient-primary, bg-clip-text */
/* 텍스트 효과: text-transparent, font-bold, inline-block */
/* 애니메이션: animate-pulse, animationDelay 동적 설정 */`
    },
    'LoadingSpinner': {
        componentCode: `const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        
        {/* Inner Ring */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-accent/20 border-b-accent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
        
        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
    </div>
  );
};`,
        cssCode: `/* 이 컴포넌트는 주로 Tailwind CSS 클래스를 사용합니다. */
/* 주요 클래스: animate-spin, animate-pulse, border-4 */
/* 회전 효과: animationDirection: 'reverse', animationDuration: '0.8s' */
/* 위치 조정: absolute, top-1/2, left-1/2, transform -translate-x-1/2 -translate-y-1/2 */`
    },
    'CardFlip': {
        componentCode: `const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
      <div 
        className="perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={\`relative w-48 h-32 transform-style-preserve-3d transition-transform duration-700 \${isFlipped ? 'rotate-y-180' : ''}\`}>
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">Front</span>
          </div>
          
          {/* Back */}
          <div className="absolute inset-0 backface-hidden bg-gradient-secondary rounded-lg flex items-center justify-center rotate-y-180">
            <span className="text-foreground font-bold text-lg">Back</span>
          </div>
        </div>
      </div>
    </div>
  );
};`,
        cssCode: `/* 이 컴포넌트는 주로 Tailwind CSS 클래스를 사용합니다. */
/* 3D 효과: perspective-1000, transform-style-preserve-3d, backface-hidden */
/* 회전 효과: rotate-y-180, transition-transform duration-700 */
/* 상태 관리: useState로 isFlipped 상태 관리 */`
    },
    'ProgressBar': {
        componentCode: `const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
      <div className="w-full max-w-md space-y-4">
        {/* Animated Progress Bar */}
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-primary transition-all duration-500 ease-out"
            style={{ width: \`\${progress}%\` }}
          />
        </div>
        
        {/* Progress Text */}
        <div className="text-center">
          <span className="text-2xl font-bold text-primary">{progress}%</span>
        </div>
        
        {/* Step Progress */}
        <div className="flex justify-between">
          {[0, 25, 50, 75, 100].map((step) => (
            <div 
              key={step}
              className={\`w-3 h-3 rounded-full transition-all duration-300 \${progress >= step ? 'bg-primary' : 'bg-muted'}\`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};`,
        cssCode: `/* 이 컴포넌트는 주로 Tailwind CSS 클래스를 사용합니다. */
/* 프로그레스 바: bg-muted, rounded-full, overflow-hidden */
/* 애니메이션: transition-all duration-500 ease-out */
/* 상태 관리: useState, useEffect로 자동 진행률 업데이트 */
/* 스텝 표시: map으로 0, 25, 50, 75, 100% 점 표시 */`
    },
    'FloatingHearts': {
        componentCode: `const FloatingHearts = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8 relative overflow-hidden">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-4">Floating Hearts</h3>
        <p className="text-sm text-muted-foreground">Click to create hearts</p>
      </div>
      
      {/* Floating Hearts */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl animate-float"
          style={{
            left: \`\${20 + i * 15}%\`,
            bottom: '-2rem',
            animationDelay: \`\${i * 0.5}s\`,
            animationDuration: \`\${3 + i * 0.5}s\`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};`,
        cssCode: `/* 이 컴포넌트는 주로 Tailwind CSS 클래스를 사용합니다. */
/* 떠오르는 효과: animate-float, absolute positioning */
/* 애니메이션 지연: animationDelay, animationDuration 동적 설정 */
/* 레이아웃: relative overflow-hidden으로 컨테이너 설정 */
/* 이모지: ❤️ 이모지를 사용한 시각적 효과 */`
    },
    'MorphingShapes': {
        componentCode: `const MorphingShapes = () => {
  const [shape, setShape] = useState(0);
  
  const shapes = [
    "M50,10 L90,50 L50,90 L10,50 Z", // Diamond
    "M50,10 C80,10 90,50 50,90 C10,50 20,10 50,10 Z", // Circle-like
    "M25,25 L75,25 L75,75 L25,75 Z" // Square
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShape(prev => (prev + 1) % shapes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [shapes.length]);

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-4">Morphing Shapes</h3>
        <svg width="100" height="100" viewBox="0 0 100 100" className="mx-auto">
          <path
            d={shapes[shape]}
            fill="url(#gradient)"
            className="transition-all duration-1000 ease-in-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};`,
        cssCode: `/* 이 컴포넌트는 SVG와 CSS를 사용합니다. */
/* SVG path: M, L, C 명령어로 도형 정의 */
/* 모핑 효과: transition-all duration-1000 ease-in-out */
/* 그라데이션: linearGradient, stopColor로 색상 정의 */
/* 상태 관리: useState, useEffect로 2초마다 도형 변경 */`
    },
    'ParticleSystem': {
        componentCode: `const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create particles
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1
    }));

    setParticles(newParticles);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      newParticles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(var(--primary))';
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-4">Particle System</h3>
        <canvas
          ref={canvasRef}
          width={200}
          height={150}
          className="border border-border/50 rounded-lg"
        />
      </div>
    </div>
  );
};`,
        cssCode: `/* 이 컴포넌트는 Canvas API를 사용합니다. */
/* Canvas 렌더링: ctx.clearRect, ctx.beginPath, ctx.arc, ctx.fill */
/* 파티클 물리: 위치, 속도, 크기 속성으로 움직임 구현 */
/* 애니메이션 루프: requestAnimationFrame으로 부드러운 애니메이션 */
/* 경계 처리: 벽에 부딪히면 속도 반전 */`
    },
    'ScrollReveal': {
        componentCode: `const ScrollReveal = () => {
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

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                        className={\`h-full bg-gradient-primary transition-all duration-1000 \${
                            isVisible ? "w-full" : "w-0"
                        }\`}
                    />
                </div>

                {/* Floating Elements */}
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
        cssCode: `/* 이 컴포넌트는 Intersection Observer API를 사용합니다. */
/* 스크롤 감지: IntersectionObserver로 요소 가시성 감지 */
/* 애니메이션: opacity, translate-x, transition-all duration-700 */
/* 지연 효과: transitionDelay로 순차적 등장 */
/* 프로그레스 바: width 0%에서 100%로 애니메이션 */
/* 부동 요소: bounce-soft 애니메이션으로 생동감 추가 */`
    }
};

// 코드 추출 함수
export const extractCodeInDevelopment = async (componentName: string) => {
    const code = componentCodes[componentName];
    if (code) {
        return code;
    }

    // 기본 메시지 반환
    return {
        componentCode: `// ${componentName} 컴포넌트 코드\n// 코드를 찾을 수 없습니다.`,
        cssCode: `/* ${componentName} CSS 코드 */\n/* 코드를 찾을 수 없습니다. */`
    };
};
