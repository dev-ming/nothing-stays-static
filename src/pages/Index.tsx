import { useState } from "react";
import AnimationCard from "@/components/AnimationCard";
import AnimationModal from "@/components/AnimationModal";
import { Sparkles } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";

interface Animation {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

const mockAnimations: Animation[] = [
  {
    id: 1,
    title: "Abstract Morphing Shapes",
    description: "3D 기하학적 형태가 부드럽게 변형되는 추상적인 애니메이션입니다.",
    thumbnail: thumb1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "0:15"
  },
  {
    id: 2,
    title: "Character Walk Cycle",
    description: "캐릭터의 자연스러운 걷기 사이클 애니메이션 연습작입니다.",
    thumbnail: thumb2,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "0:08"
  },
  {
    id: 3,
    title: "Particle Flow",
    description: "흐르는 파티클과 빛의 궤적을 표현한 모션 그래픽스입니다.",
    thumbnail: thumb3,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "0:20"
  },
  {
    id: 4,
    title: "Environment Study",
    description: "분위기 있는 환경을 표현한 2D 애니메이션 스터디입니다.",
    thumbnail: thumb4,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "0:12"
  },
  {
    id: 5,
    title: "Glitch Effect",
    description: "디지털 글리치 효과를 활용한 실험적인 애니메이션입니다.",
    thumbnail: thumb5,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "0:10"
  },
  {
    id: 6,
    title: "Kinetic Typography",
    description: "타이포그래피가 역동적으로 움직이는 모션 디자인입니다.",
    thumbnail: thumb6,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "0:18"
  }
];

const Index = () => {
  const [selectedAnimation, setSelectedAnimation] = useState<Animation | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Animation Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Animation Lab
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            실험적인 애니메이션과 모션 그래픽 작업을 모아둔 공간입니다
          </p>
        </div>
      </header>

      {/* Gallery Section */}
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl font-bold text-foreground">작품 갤러리</h2>
          <p className="text-muted-foreground">클릭하여 애니메이션을 감상하세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAnimations.map((animation, index) => (
            <div 
              key={animation.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimationCard
                title={animation.title}
                description={animation.description}
                thumbnail={animation.thumbnail}
                duration={animation.duration}
                onClick={() => setSelectedAnimation(animation)}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedAnimation && (
        <AnimationModal
          isOpen={!!selectedAnimation}
          onClose={() => setSelectedAnimation(null)}
          title={selectedAnimation.title}
          description={selectedAnimation.description}
          videoUrl={selectedAnimation.videoUrl}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Animation Lab. 모든 작품은 학습 및 연습 목적으로 제작되었습니다.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
