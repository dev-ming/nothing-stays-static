import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimationCard from "./AnimationCard";
import ButtonHover from "./animations/ButtonHover";
import WaveText from "./animations/WaveText";
import LoadingSpinner from "./animations/LoadingSpinner";
import CardFlip from "./animations/CardFlip";
import ProgressBar from "./animations/ProgressBar";
import FloatingHearts from "./animations/FloatingHearts";
import MorphingShapes from "./animations/MorphingShapes";
import ParticleSystem from "./animations/ParticleSystem";
import ScrollReveal from "./animations/ScrollReveal";

interface Animation {
    id: number;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    preview: React.ReactNode;
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

const AnimationShowcase = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("all");


    const animations: Animation[] = [
        {
            id: 1,
            title: "Button Hover Effect",
            description: "마우스 호버 시 그라데이션과 글로우 효과가 적용되는 버튼 애니메이션입니다.",
            category: "interaction",
            technologies: ["CSS", "React"],
            preview: <ButtonHover />,
            featured: true
        },
        {
            id: 2,
            title: "Wave Text Animation",
            description: "각 글자가 순차적으로 바운스하는 타이포그래피 애니메이션입니다.",
            category: "typography",
            technologies: ["CSS", "React"],
            preview: <WaveText />,
            featured: true
        },
        {
            id: 3,
            title: "Loading Spinner",
            description: "이중 회전 효과를 가진 로딩 스피너 애니메이션입니다.",
            category: "loading",
            technologies: ["CSS"],
            preview: <LoadingSpinner />
        },
        {
            id: 4,
            title: "3D Card Flip",
            description: "3D 변환을 활용한 카드 플립 애니메이션입니다.",
            category: "3d",
            technologies: ["CSS", "3D Transform"],
            preview: <CardFlip />
        },
        {
            id: 5,
            title: "Progress Bar",
            description: "인터랙티브한 프로그레스 바 애니메이션입니다.",
            category: "interaction",
            technologies: ["CSS", "React"],
            preview: <ProgressBar />
        },
        {
            id: 6,
            title: "Floating Hearts",
            description: "하트 이모지가 떠오르는 로맨틱한 애니메이션입니다.",
            category: "particle",
            technologies: ["CSS"],
            preview: <FloatingHearts />
        },
        {
            id: 7,
            title: "Morphing Shapes",
            description: "SVG를 활용한 도형 변형 애니메이션입니다.",
            category: "svg",
            technologies: ["SVG", "CSS"],
            preview: <MorphingShapes />,
            featured: true
        },
        {
            id: 8,
            title: "Particle System",
            description: "Canvas를 활용한 인터랙티브 파티클 시스템입니다.",
            category: "canvas",
            technologies: ["Canvas", "JavaScript"],
            preview: <ParticleSystem />
        },
        {
            id: 9,
            title: "Scroll Reveal",
            description: "스크롤에 반응하는 요소 등장 애니메이션입니다.",
            category: "scroll",
            technologies: ["CSS", "Intersection Observer"],
            preview: <ScrollReveal />
        }
    ];

    const categories = [
        { id: "all", name: "All" },
        { id: "interaction", name: "Interaction" },
        { id: "typography", name: "Typography" },
        { id: "loading", name: "Loading" },
        { id: "3d", name: "3D Effects" },
        { id: "particle", name: "Particle" },
        { id: "svg", name: "SVG" },
        { id: "canvas", name: "Canvas" },
        { id: "scroll", name: "Scroll" }
    ];

    const filteredAnimations = activeCategory === "all"
        ? animations
        : animations.filter(anim => anim.category === activeCategory);

    return (
        <section id="animations" className="py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance nanum-pen-script-regular">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">Animation</span>
                        <span className="text-foreground"> Gallery</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                        다양한 라이브러리와 기법을 활용한 애니메이션 연습 작품들입니다
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={activeCategory === category.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveCategory(category.id)}
                            className={activeCategory === category.id ? "bg-gradient-primary" : ""}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>

                {/* Animation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAnimations.map((animation, index) => (
                        <div
                            key={animation.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            className="animate-fade-in"
                        >
                            <AnimationCard
                                title={animation.title}
                                description={animation.description}
                                preview={animation.preview}
                                onClick={() => navigate(`/animation/${animation.id}`)}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AnimationShowcase;
