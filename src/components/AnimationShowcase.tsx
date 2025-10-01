import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import AnimationCard from "./AnimationCard";
import { getAnimations, getAnimationsByCategory } from "@/lib/animations";

const AnimationShowcase = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("all");



    const categories = [
        { id: "all", name: t("gallery.categories.all") },
        { id: "interaction", name: t("gallery.categories.interaction") },
        { id: "typography", name: t("gallery.categories.typography") },
        { id: "loading", name: t("gallery.categories.loading") },
        { id: "3d", name: t("gallery.categories.3d") },
        { id: "particle", name: t("gallery.categories.particle") },
        { id: "svg", name: t("gallery.categories.svg") },
        { id: "canvas", name: t("gallery.categories.canvas") },
        { id: "scroll", name: t("gallery.categories.scroll") }
    ];

    const animations = getAnimations();
    const filteredAnimations = getAnimationsByCategory(activeCategory, animations);

    return (
        <section id="animations" className="py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance nanum-pen-script-regular">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">{t("gallery.title").split(' ')[0]}</span>
                        <span className="text-foreground"> {t("gallery.title").split(' ')[1]}</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                        {t("gallery.subtitle")}
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
