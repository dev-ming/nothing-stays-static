import { ArrowDown, Sparkles, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation();
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-hero" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(330_75%_60%_/_0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(320_80%_70%_/_0.1),transparent_50%)]" />

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float blur-md" style={{ animationDelay: "0s" }} />
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-primary rounded-full opacity-15 animate-float blur-md" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-primary rounded-full opacity-25 animate-float blur-md" style={{ animationDelay: "2s" }} />

            <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{t("hero.badge")}</span>
                </div>

                {/* Main Title */}
                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-balance nanum-pen-script-regular">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Nothing Stays
                        </span>
                        <br />
                        <span className="text-foreground">
                            Static
                        </span>
                    </h1>
                    <p className="text-md sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
                        {t("hero.subtitle")}
                    </p>
                </div>

                {/* Feature Icons */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm">React</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm">CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm">Motion</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        onClick={() => scrollToSection("#animations")}
                    >
                        갤러리 보기
                    </Button>
                </div> */}

                {/* Scroll Indicator */}
                <div className="animate-bounce-soft pt-24">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => scrollToSection("#animations")}
                    >
                        <ArrowDown className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
