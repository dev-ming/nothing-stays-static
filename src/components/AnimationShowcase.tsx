import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimationCard from "./AnimationCard";
import { animations, getAnimationsByCategory } from "@/lib/animations";

const AnimationShowcase = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("all");



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

    const filteredAnimations = getAnimationsByCategory(activeCategory);

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
                                preview={<animation.component />}
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
